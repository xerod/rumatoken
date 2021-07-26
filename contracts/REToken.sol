// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./ERC1155Enumerable.sol";

contract REToken is ERC1155Enumerable {
    constructor() ERC1155("https://realest.example/api/item/{id}.json") {}

    function mint(
        address _to,
        uint256 _tokenId,
        uint256 _amount
    ) external {
        super._mint(_to, _tokenId, _amount, "");
    }
}

// Interact with ERC1155
contract REFractional is ERC1155Holder {
    REToken re;

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct RealEstate {
        address owner;
        uint8 securePeriod;
        uint256 securedAmount;
        uint256 tokenPrice;
    }

    mapping(uint256 => RealEstate) public REObjects;

    address owner;

    /**
     * Only property owner activity
     */
    modifier OnlyPropertyOwner(uint256 _tokenId) {
        require(
            msg.sender == REObjects[_tokenId].owner,
            "Only property owner has access"
        );
        _;
    }

    /**
     * Only token holders activity
     */
    modifier OnlyTokenHolder(uint256 _tokenId) {
        require(
            re.balanceOf(msg.sender, _tokenId) >= 0,
            "Only token holder has access"
        );
        _;
    }

    constructor(address _token) {
        re = REToken(_token);
        owner = _token;
    }

    /**
     * Contract owner can mint token to property owner so
     * property owner could sell the token
     */
    function mintUniqueTokenTo(address _to, uint256 _amount)
        public
        returns (uint256)
    {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        // Mint the new token
        re.mint(_to, newItemId, _amount);

        // Assign _to address as the property owner
        REObjects[newItemId].owner = _to;

        return newItemId;
    }

    /**
     * Property owner can secure some token to
     * set initial price for their token
     */
    function secureToken(uint256 _amount, uint256 _tokenId) public payable {
        // this contract need to be approved as operator
        require(
            re.isApprovedForAll(msg.sender, address(this)),
            "This contract doesn't have access to move your assets. Please approve this contract as operator to continue."
        );

        // require some eth to secure some tokens
        require(
            msg.value > 0,
            "Transferring ether are required to secure tokens"
        );

        // send to contract address
        re.safeTransferFrom(msg.sender, address(this), _tokenId, _amount, "");

        // add the secured value to REObjects
        REObjects[_tokenId].securedAmount =
            REObjects[_tokenId].securedAmount +
            _amount;

        // calculate the price based on secured token
        REObjects[_tokenId].tokenPrice = msg.value / _amount;
    }

    /**
     * Investor could buy some token by
     * specifying the tokenId
     */
    function buyToken(uint256 _amount, uint256 _tokenId) public payable {
        owner = REObjects[_tokenId].owner;

        require(
            (msg.value / _amount) >= REObjects[_tokenId].tokenPrice,
            "Insufficient Fund"
        );

        require(
            re.balanceOf(owner, _tokenId) >= _amount,
            "Requested token exceed the available amount"
        );

        re.safeTransferFrom(owner, msg.sender, _tokenId, _amount, "");
    }

    /**
     * Fill some 💰 to this contract
     */
    function payRent(uint256 _tokenId) public payable {}

    /**
     * Property owner can ask for operating cost per month
     */
    function withdrawOperatingCost(uint256 _amount, uint256 _tokenId)
        public
        OnlyPropertyOwner(_tokenId)
    {}

    /**
     * Investor could withdraw their profit for every month
     */
    function distributeMonthlyProfit(uint256 _tokenId) private {}

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
