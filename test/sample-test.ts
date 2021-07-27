import { expect } from "chai";
import { ethers, waffle } from "hardhat";
import { ContractFactory } from "ethers";
import { REFractional, REToken } from "../types/index";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

const { deployContract } = waffle;

let RETOKEN: ContractFactory;
let retoken: REToken;
let REFRACTIONAL: ContractFactory;
let refractional: REFractional;
let owner: SignerWithAddress,
  user1: SignerWithAddress,
  user2: SignerWithAddress,
  user3: SignerWithAddress;
let tokenId = 1;

describe("Fractional Real Estate Ownership", function () {
  beforeEach(async () => {
    [owner, user1, user2, user3] = await ethers.getSigners();

    RETOKEN = await ethers.getContractFactory("REToken");
    retoken = (await RETOKEN.deploy()) as REToken;
    await retoken.deployed();

    REFRACTIONAL = await ethers.getContractFactory("REFractional");
    refractional = (await REFRACTIONAL.deploy(retoken.address)) as REFractional;
    await refractional.deployed();
  });

  describe("Property Owner Could Mint 100 Property Token", () => {
    it("Should mint 100 token in supply", async function () {
      const mintUniqueTokenTo = await refractional.mintUniqueTokenTo(
        owner.address,
        100
      );

      // wait until the transaction is mined
      await mintUniqueTokenTo.wait();

      expect(await retoken.balanceOf(owner.address, tokenId)).to.equal(100);
    });
  });

  describe("Property Owner Could Secure Tokens", () => {
    beforeEach(async () => {
      await retoken
        .connect(owner)
        .setApprovalForAll(refractional.address, true);

      const mintUniqueTokenTo = await refractional.mintUniqueTokenTo(
        owner.address,
        100
      );

      // wait until the transaction is mined
      await mintUniqueTokenTo.wait();
    });

    it("Should set contract as operator", async function () {
      expect(
        await retoken.isApprovedForAll(owner.address, refractional.address)
      ).to.be.true;
    });

    it("Should fail when securing token without including some ETH", async function () {
      await expect(refractional.secureToken(10, 1)).to.be.revertedWith(
        "Transferring ether are required to secure tokens"
      );
    });

    it("Should allow to secure 10 tokens for 1 ETH", async function () {
      const overrides = {
        value: ethers.utils.parseEther("1.0"), // To convert Ether to Wei:
      };

      const secureToken = await refractional.secureToken(10, 1, overrides);
      await secureToken.wait();

      // owner balance should decrease
      expect(await retoken.balanceOf(owner.address, tokenId)).equal(90);
      // contract balance should be 1 ETH
      expect(await refractional.getBalance()).equal(
        ethers.utils.parseEther("1.0")
      );
    });
  });

  describe("Investor Could Buy the Property Token", () => {
    beforeEach(async () => {
      await retoken
        .connect(owner)
        .setApprovalForAll(refractional.address, true);

      const mintUniqueTokenTo = await refractional.mintUniqueTokenTo(
        owner.address,
        100
      );

      // wait until the transaction is mined
      await mintUniqueTokenTo.wait();

      const overrides = {
        value: ethers.utils.parseEther("10.0"), // To convert Ether to Wei:
      };

      const secureToken = await refractional
        .connect(owner)
        .secureToken(10, 1, overrides);
      await secureToken.wait();
    });

    it("Should fail if Investor paying less than actual price", async function () {
      await expect(refractional.buyToken(10, 1)).to.be.revertedWith(
        "Insufficient Fund"
      );
    });

    it("Should fail if Investor buying more than the available amount", async function () {
      const overrides = {
        value: ethers.utils.parseEther("1000.0"), // To convert Ether to Wei:
      };

      await expect(
        refractional.buyToken(1000, 1, overrides)
      ).to.be.revertedWith("Requested token exceed the available amount");
    });

    it("Should allow each investor to buy 30 token", async function () {
      const overrides = {
        value: ethers.utils.parseEther("30.0"), // To convert Ether to Wei:
      };

      await refractional.connect(user1).buyToken(30, 1, overrides);
      expect(await retoken.balanceOf(await user1.getAddress(), tokenId)).equal(
        30
      );

      await refractional.connect(user2).buyToken(30, 1, overrides);
      expect(await retoken.balanceOf(await user2.getAddress(), tokenId)).equal(
        30
      );

      await refractional.connect(user3).buyToken(30, 1, overrides);
      expect(await retoken.balanceOf(await user3.getAddress(), tokenId)).equal(
        30
      );

      // owner wallet should be empty
      expect(await retoken.balanceOf(owner.address, tokenId)).equal(0);

      // no guarantees on the ordering of values returned from getAllTokenOwner
      expect(await retoken.getAllTokenOwner(tokenId)).to.have.members([
        refractional.address,
        user1.address,
        user2.address,
        user3.address,
      ]);
    });
  });

  describe("Tenant Could Pay Monthly Rent", () => {
    it("Should allow anyone to pay rent", async function () {});
    it("Should allow property owner to view payment made by all tenant", async function () {});
  });

  describe("Property Owner Could Withdraw Operating Cost", () => {
    it("Should not allow property owner to withdraw more than 50% of the available fund", async function () {});
    it("Should allow property owner to withdraw operating cost in ETH", async function () {});
    it("Should not allow property owner to withdraw operating cost more than once a month", async function () {});
  });

  describe("Contract Could Distribute Profit", () => {
    it("Should allow contract to distribute profit to token owner", async function () {});
  });

  describe("Investor Could Transfer Token", () => {
    it("Should allow contract to distribute profit to token owner", async function () {});
  });
});
