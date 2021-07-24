const { expect } = require("chai");
const { ethers } = require("hardhat");

let RETOKEN;
let retoken;
let REFRACTIONAL;
let refractional;
let owner, user1, user2;

describe("REToken Contract", function () {
  beforeEach(async () => {
    [owner, user1, user2] = await ethers.getSigners();

    RETOKEN = await ethers.getContractFactory("REToken");
    retoken = await RETOKEN.deploy();
    await retoken.deployed();

    REFRACTIONAL = await ethers.getContractFactory("REFractional");
    refractional = await REFRACTIONAL.deploy(retoken.address);
    await refractional.deployed();
  });

  describe("📝 Registering Property", () => {
    it("Should mint 100 token in supply", async function () {
      const mintUniqueTokenTo = await refractional.mintUniqueTokenTo(
        owner.address,
        100
      );

      // wait until the transaction is mined
      await mintUniqueTokenTo.wait();

      expect(await retoken.balanceOf(owner.address, 1)).to.equal(100);
    });

    it("Should set contract as operator", async function () {
      await retoken
        .connect(owner)
        .setApprovalForAll(refractional.address, true);

      expect(
        await retoken.isApprovedForAll(owner.address, refractional.address)
      ).to.be.true;
    });

    it("Should allow to secure tokens", async function () {
      const secureToken = await refractional.secureToken(100, 1);

      await secureToken.wait();

      expect(await retoken.balanceOf(owner.address, 1)).to.equal(90);
    });
  });
});
