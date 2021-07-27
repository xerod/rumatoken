/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { REFractional, REFractionalInterface } from "../REFractional";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "buyToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ethReserved",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mintUniqueTokenTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "payRent",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "realEstateObjects",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "securePeriod",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "securedAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "withdrawTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "secureToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "withdrawOperationCost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001d7738038062001d778339818101604052810190620000379190620000d6565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000150565b600081519050620000d08162000136565b92915050565b600060208284031215620000e957600080fd5b6000620000f984828501620000bf565b91505092915050565b60006200010f8262000116565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620001418162000102565b81146200014d57600080fd5b50565b611c1780620001606000396000f3fe6080604052600436106100a05760003560e01c8063b6d5e8cd11610064578063b6d5e8cd14610197578063b7627228146101d4578063bc197c81146101f0578063d9e8843f1461022d578063f23a6e6114610249578063fff7806814610286576100a7565b806301ffc9a7146100a9578063057466ea146100e657806312065fe0146101025780633cd30cb51461012d578063a4c1eaa81461016e576100a7565b366100a757005b005b3480156100b557600080fd5b506100d060048036038101906100cb9190611095565b6102c3565b6040516100dd9190611484565b60405180910390f35b61010060048036038101906100fb9190611110565b61033d565b005b34801561010e57600080fd5b506101176105dd565b60405161012491906115fa565b60405180910390f35b34801561013957600080fd5b50610154600480360381019061014f91906110be565b6105e5565b604051610165959493929190611431565b60405180910390f35b34801561017a57600080fd5b5061019560048036038101906101909190611110565b610648565b005b3480156101a357600080fd5b506101be60048036038101906101b99190611030565b6108f3565b6040516101cb91906115fa565b60405180910390f35b6101ee60048036038101906101e99190611110565b610a16565b005b3480156101fc57600080fd5b5061021760048036038101906102129190610ee2565b610c3a565b604051610224919061149f565b60405180910390f35b610247600480360381019061024291906110be565b610c4f565b005b34801561025557600080fd5b50610270600480360381019061026b9190610fa1565b610cc0565b60405161027d919061149f565b60405180910390f35b34801561029257600080fd5b506102ad60048036038101906102a891906110be565b610cd5565b6040516102ba91906115fa565b60405180910390f35b60007f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610336575061033582610ced565b5b9050919050565b6003600082815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600360008281526020019081526020016000206002015482346103d7919061171a565b1015610418576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040f906115da565b60405180910390fd5b8160008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1662fdd58e600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518363ffffffff1660e01b81526004016104959291906113d1565b60206040518083038186803b1580156104ad57600080fd5b505afa1580156104c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e591906110e7565b1015610526576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051d9061157a565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f242432a600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff163384866040518563ffffffff1660e01b81526004016105a79493929190611379565b600060405180830381600087803b1580156105c157600080fd5b505af11580156105d5573d6000803e3d6000fd5b505050505050565b600047905090565b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160149054906101000a900460ff16908060010154908060020154908060030154905085565b806003600082815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e4906115ba565b60405180910390fd5b828260008211610732576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610729906114ba565b60405180910390fd5b60026004600083815260200190815260200160002054610752919061171a565b8210610793576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078a9061159a565b60405180910390fd5b60036000828152602001908152602001600020600301544210156107ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e39061155a565b60405180910390fd5b6224ea00426107fb91906116c4565b600360008381526020019081526020016000206003018190555084600460008681526020019081526020016000206000828254610838919061174b565b9250508190555060003373ffffffffffffffffffffffffffffffffffffffff16866040516108659061133b565b60006040518083038185875af1925050503d80600081146108a2576040519150601f19603f3d011682016040523d82523d6000602084013e6108a7565b606091505b50509050806108eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e2906114fa565b60405180910390fd5b505050505050565b60006108ff6002610d57565b600061090b6002610d6d565b905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663156e29f68583866040518463ffffffff1660e01b815260040161096a939291906113fa565b600060405180830381600087803b15801561098457600080fd5b505af1158015610998573d6000803e3d6000fd5b50505050836003600083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055504260036000838152602001908152602001600020600301819055508091505092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e985e9c533306040518363ffffffff1660e01b8152600401610a71929190611350565b60206040518083038186803b158015610a8957600080fd5b505afa158015610a9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac1919061106c565b610b00576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610af79061151a565b60405180910390fd5b60003411610b43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3a9061153a565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f242432a333084866040518563ffffffff1660e01b8152600401610ba29493929190611379565b600060405180830381600087803b158015610bbc57600080fd5b505af1158015610bd0573d6000803e3d6000fd5b50505050816003600083815260200190815260200160002060010154610bf691906116c4565b60036000838152602001908152602001600020600101819055508134610c1c919061171a565b60036000838152602001908152602001600020600201819055505050565b600063bc197c8160e01b905095945050505050565b6000341415610c93576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8a906114da565b60405180910390fd5b34600460008381526020019081526020016000206000828254610cb691906116c4565b9250508190555050565b600063f23a6e6160e01b905095945050505050565b60046020528060005260406000206000915090505481565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6001816000016000828254019250508190555050565b600081600001549050919050565b6000610d8e610d898461163a565b611615565b90508083825260208201905082856020860282011115610dad57600080fd5b60005b85811015610ddd5781610dc38882610eb8565b845260208401935060208301925050600181019050610db0565b5050509392505050565b6000610dfa610df584611666565b611615565b905082815260208101848484011115610e1257600080fd5b610e1d848285611800565b509392505050565b600081359050610e3481611b85565b92915050565b600082601f830112610e4b57600080fd5b8135610e5b848260208601610d7b565b91505092915050565b600081519050610e7381611b9c565b92915050565b600081359050610e8881611bb3565b92915050565b600082601f830112610e9f57600080fd5b8135610eaf848260208601610de7565b91505092915050565b600081359050610ec781611bca565b92915050565b600081519050610edc81611bca565b92915050565b600080600080600060a08688031215610efa57600080fd5b6000610f0888828901610e25565b9550506020610f1988828901610e25565b945050604086013567ffffffffffffffff811115610f3657600080fd5b610f4288828901610e3a565b935050606086013567ffffffffffffffff811115610f5f57600080fd5b610f6b88828901610e3a565b925050608086013567ffffffffffffffff811115610f8857600080fd5b610f9488828901610e8e565b9150509295509295909350565b600080600080600060a08688031215610fb957600080fd5b6000610fc788828901610e25565b9550506020610fd888828901610e25565b9450506040610fe988828901610eb8565b9350506060610ffa88828901610eb8565b925050608086013567ffffffffffffffff81111561101757600080fd5b61102388828901610e8e565b9150509295509295909350565b6000806040838503121561104357600080fd5b600061105185828601610e25565b925050602061106285828601610eb8565b9150509250929050565b60006020828403121561107e57600080fd5b600061108c84828501610e64565b91505092915050565b6000602082840312156110a757600080fd5b60006110b584828501610e79565b91505092915050565b6000602082840312156110d057600080fd5b60006110de84828501610eb8565b91505092915050565b6000602082840312156110f957600080fd5b600061110784828501610ecd565b91505092915050565b6000806040838503121561112357600080fd5b600061113185828601610eb8565b925050602061114285828601610eb8565b9150509250929050565b6111558161177f565b82525050565b61116481611791565b82525050565b6111738161179d565b82525050565b60006111866014836116b3565b9150611191826118de565b602082019050919050565b60006111a9601e836116b3565b91506111b482611907565b602082019050919050565b60006111cc6014836116b3565b91506111d782611930565b602082019050919050565b60006111ef606c836116b3565b91506111fa82611959565b608082019050919050565b60006112126030836116b3565b915061121d826119f4565b604082019050919050565b60006112356031836116b3565b915061124082611a43565b604082019050919050565b6000611258602b836116b3565b915061126382611a92565b604082019050919050565b600061127b6039836116b3565b915061128682611ae1565b604082019050919050565b600061129e601e836116b3565b91506112a982611b30565b602082019050919050565b60006112c1600083611697565b91506112cc82611b59565b600082019050919050565b60006112e46000836116a8565b91506112ef82611b59565b600082019050919050565b60006113076011836116b3565b915061131282611b5c565b602082019050919050565b611326816117e9565b82525050565b611335816117f3565b82525050565b6000611346826112d7565b9150819050919050565b6000604082019050611365600083018561114c565b611372602083018461114c565b9392505050565b600060a08201905061138e600083018761114c565b61139b602083018661114c565b6113a8604083018561131d565b6113b5606083018461131d565b81810360808301526113c6816112b4565b905095945050505050565b60006040820190506113e6600083018561114c565b6113f3602083018461131d565b9392505050565b600060608201905061140f600083018661114c565b61141c602083018561131d565b611429604083018461131d565b949350505050565b600060a082019050611446600083018861114c565b611453602083018761132c565b611460604083018661131d565b61146d606083018561131d565b61147a608083018461131d565b9695505050505050565b6000602082019050611499600083018461115b565b92915050565b60006020820190506114b4600083018461116a565b92915050565b600060208201905081810360008301526114d381611179565b9050919050565b600060208201905081810360008301526114f38161119c565b9050919050565b60006020820190508181036000830152611513816111bf565b9050919050565b60006020820190508181036000830152611533816111e2565b9050919050565b6000602082019050818103600083015261155381611205565b9050919050565b6000602082019050818103600083015261157381611228565b9050919050565b600060208201905081810360008301526115938161124b565b9050919050565b600060208201905081810360008301526115b38161126e565b9050919050565b600060208201905081810360008301526115d381611291565b9050919050565b600060208201905081810360008301526115f3816112fa565b9050919050565b600060208201905061160f600083018461131d565b92915050565b600061161f611630565b905061162b828261180f565b919050565b6000604051905090565b600067ffffffffffffffff8211156116555761165461189e565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156116815761168061189e565b5b61168a826118cd565b9050602081019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b60006116cf826117e9565b91506116da836117e9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561170f5761170e611840565b5b828201905092915050565b6000611725826117e9565b9150611730836117e9565b9250826117405761173f61186f565b5b828204905092915050565b6000611756826117e9565b9150611761836117e9565b92508282101561177457611773611840565b5b828203905092915050565b600061178a826117c9565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b611818826118cd565b810181811067ffffffffffffffff821117156118375761183661189e565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f43616e2774207769746864726177203020455448000000000000000000000000600082015250565b7f5472616e736665727265642066756e642063616e2774206265207a65726f0000600082015250565b7f4661696c656420746f2073656e64204574686572000000000000000000000000600082015250565b7f5468697320636f6e747261637420646f65736e2774206861766520616363657360008201527f7320746f206d6f766520796f7572206173736574732e20506c6561736520617060208201527f70726f7665207468697320636f6e7472616374206173206f70657261746f722060408201527f746f20636f6e74696e75652e0000000000000000000000000000000000000000606082015250565b7f5472616e7366657272696e67206574686572206172652072657175697265642060008201527f746f2073656375726520746f6b656e7300000000000000000000000000000000602082015250565b7f4e6f7420616c6c6f77656420746f207769746864726177206d6f72652074686160008201527f6e206f6e636520696e2061206d6f6e7468000000000000000000000000000000602082015250565b7f52657175657374656420746f6b656e206578636565642074686520617661696c60008201527f61626c6520616d6f756e74000000000000000000000000000000000000000000602082015250565b7f5769746864726177696e67206d6f7265207468616e20353025206f662072657360008201527f65727665642045544820617265206e6f7420616c6c6f77656400000000000000602082015250565b7f4f6e6c792070726f7065727479206f776e657220686173206163636573730000600082015250565b50565b7f496e73756666696369656e742046756e64000000000000000000000000000000600082015250565b611b8e8161177f565b8114611b9957600080fd5b50565b611ba581611791565b8114611bb057600080fd5b50565b611bbc8161179d565b8114611bc757600080fd5b50565b611bd3816117e9565b8114611bde57600080fd5b5056fea2646970667358221220a2640e8b2cbe17b452c7c73c9a4a352a3fae3c6c0deed5c8bbeea2798eedf94764736f6c63430008040033";

export class REFractional__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<REFractional> {
    return super.deploy(_token, overrides || {}) as Promise<REFractional>;
  }
  getDeployTransaction(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, overrides || {});
  }
  attach(address: string): REFractional {
    return super.attach(address) as REFractional;
  }
  connect(signer: Signer): REFractional__factory {
    return super.connect(signer) as REFractional__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): REFractionalInterface {
    return new utils.Interface(_abi) as REFractionalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): REFractional {
    return new Contract(address, _abi, signerOrProvider) as REFractional;
  }
}
