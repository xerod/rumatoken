// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Address.sol";
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
    address contractOwner;

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct RealEstate {
        address owner;
        uint8 securePeriod;
        uint256 securedAmount;
        uint256 tokenPrice;
        uint256 withdrawTimestamp;
    }

    mapping(uint256 => RealEstate) public realEstateObjects;
    mapping(uint256 => uint256) public ethReserved;

    /**
     * Only property owner activity
     */
    modifier OnlyPropertyOwner(uint256 _tokenId) {
        require(
            msg.sender == realEstateObjects[_tokenId].owner,
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

    modifier WithdrawEnabled(uint256 _amount, uint256 _tokenId) {
        require(_amount > 0, "Can't withdraw 0 ETH");

        require(
            _amount < (ethReserved[_tokenId] / 2),
            "Withdrawing more than 50% of reserved ETH are not allowed"
        );

        require(
            block.timestamp >= realEstateObjects[_tokenId].withdrawTimestamp,
            "Not allowed to withdraw more than once in a month"
        );

        realEstateObjects[_tokenId].withdrawTimestamp =
            block.timestamp +
            4 weeks;
        _;
    }

    constructor(address _token) {
        re = REToken(_token);
        contractOwner = msg.sender;
    }

    /**
     * Contract owner can mint token to property owner so
     * property owner could sell the token
     */
    function mintUniqueTokenTo(address _to, uint256 _amount)
        public
        returns (uint256)
    {
        require(
            msg.sender == contractOwner,
            "Only contract owner could mint token"
        );

        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        // Mint the new token
        re.mint(_to, newItemId, _amount);

        // Assign _to address as the property owner
        realEstateObjects[newItemId].owner = _to;

        // Add a minted timestamp
        realEstateObjects[newItemId].withdrawTimestamp = block.timestamp;

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

        // add the secured value to realEstateObjects
        realEstateObjects[_tokenId].securedAmount =
            realEstateObjects[_tokenId].securedAmount +
            _amount;

        // calculate the price based on secured token
        realEstateObjects[_tokenId].tokenPrice = msg.value / _amount;
    }

    /**
     * Investor could buy some token by
     * specifying the tokenId
     */
    function buyToken(uint256 _amount, uint256 _tokenId) public payable {
        address propertyOwner = realEstateObjects[_tokenId].owner;

        require(
            (msg.value / _amount) >= realEstateObjects[_tokenId].tokenPrice,
            "Insufficient Fund"
        );

        require(
            re.balanceOf(propertyOwner, _tokenId) >= _amount,
            "Requested token exceed the available amount"
        );

        re.safeTransferFrom(propertyOwner, msg.sender, _tokenId, _amount, "");
    }

    /**
     * Fill some 💰 to this contract
     */
    function payRent(uint256 _tokenId) public payable {
        require(msg.value != 0, "Transferred fund can't be zero");
        ethReserved[_tokenId] += msg.value;
    }

    /**
     * Property owner can ask for operating cost every month
     */
    function withdrawOperationCost(uint256 _amount, uint256 _tokenId)
        public
        OnlyPropertyOwner(_tokenId)
        WithdrawEnabled(_amount, _tokenId)
    {
        ethReserved[_tokenId] -= _amount;

        // use Address library to send ether
        Address.sendValue(payable(msg.sender), _amount);

        // distribute profit to each token owner
        distributeMonthlyProfit(_tokenId);
    }

    /**
     * Distribute profit to each token owner
     */
    function distributeMonthlyProfit(uint256 _tokenId) private {
        address[] memory addr = re.getAllTokenOwner(_tokenId);
        uint256 totalProfit = ethReserved[_tokenId];

        for (uint256 i = 0; i < addr.length; i++) {
            address payable investor = payable(addr[i]);

            if (investor == address(this)) {
                investor = payable(realEstateObjects[_tokenId].owner);
            }

            uint256 amount = (re.balanceOf(investor, _tokenId) /
                re.totalSupply(_tokenId)) * totalProfit;

            // (bool sent, ) = investor.call{value: amount}("");
            // require(sent, "Failed to send Ether");
            Address.sendValue(investor, amount);

            ethReserved[_tokenId] -= amount;
        }
    }

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Fallback function is called when msg.data is exist
    fallback() external payable {}

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
