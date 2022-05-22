// const { ethers } = require("ethers");
import { ethers } from "./ethers-5.2.esm.min.js";


const nftAddress = "0x0937F524C8A7d3D6Af3023875CF6c7f293F3B994";
const vaultAddress = "0x3B2d33aC0B76462c8Eb58548ed7db68BC826F15E";

const abi_vault =  [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_nftAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "depositNft",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "depositedNft",
    "outputs": [
      {
        "internalType": "contract IERC721Metadata",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_nftAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "getDelegatedOwner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "onERC721Received",
    "outputs": [
      {
        "internalType": "bytes4",
        "name": "",
        "type": "bytes4"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_nftAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_nftAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_newDelegate",
        "type": "address"
      }
    ],
    "name": "updateDelegatedAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_nftAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "withdrawNft",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.log(error);
    }
    document.getElementById("connectButton").innerHTML = "Connected";
    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log(accounts);
  } else {
    document.getElementById("connectButton").innerHTML =
      "Please install MetaMask";
  }
}

async function executeVault() {
  if (typeof window.ethereum !== "undefined") {
    // contractAddress = nftAddress;
    // const abi = [
    //   {
    //     inputs: [
    //       {
    //         internalType: "string",
    //         name: "_name",
    //         type: "string",
    //       },
    //       {
    //         internalType: "uint256",
    //         name: "_favoriteNumber",
    //         type: "uint256",
    //       },
    //     ],
    //     name: "addPerson",
    //     outputs: [],
    //     stateMutability: "nonpayable",
    //     type: "function",
    //   },
    //   {
    //     inputs: [
    //       {
    //         internalType: "string",
    //         name: "",
    //         type: "string",
    //       },
    //     ],
    //     name: "nameToFavoriteNumber",
    //     outputs: [
    //       {
    //         internalType: "uint256",
    //         name: "",
    //         type: "uint256",
    //       },
    //     ],
    //     stateMutability: "view",
    //     type: "function",
    //   },
    //   {
    //     inputs: [
    //       {
    //         internalType: "uint256",
    //         name: "",
    //         type: "uint256",
    //       },
    //     ],
    //     name: "people",
    //     outputs: [
    //       {
    //         internalType: "uint256",
    //         name: "favoriteNumber",
    //         type: "uint256",
    //       },
    //       {
    //         internalType: "string",
    //         name: "name",
    //         type: "string",
    //       },
    //     ],
    //     stateMutability: "view",
    //     type: "function",
    //   },
    //   {
    //     inputs: [],
    //     name: "retrieve",
    //     outputs: [
    //       {
    //         internalType: "uint256",
    //         name: "",
    //         type: "uint256",
    //       },
    //     ],
    //     stateMutability: "view",
    //     type: "function",
    //   },
    //   {
    //     inputs: [
    //       {
    //         internalType: "uint256",
    //         name: "_favoriteNumber",
    //         type: "uint256",
    //       },
    //     ],
    //     name: "store",
    //     outputs: [],
    //     stateMutability: "nonpayable",
    //     type: "function",
    //   },
    // ];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner();
    const contract = new ethers.Contract(window.vaultAddress, abi_vault, provider);
    try {
      var _tokenId = window.getDelegateTokenId;
      var _owner = await contract.getDelegatedOwner(window.nftAddress,_tokenId);
      console.log(_owner);
      return _owner;

    } catch (error) {
      console.log(error);
    }
  } else {
    document.getElementById("executeButton").innerHTML =
      "Please install MetaMask";
  }
}



async function execute() {
  if (typeof window.ethereum !== "undefined") {
    contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const abi = [
      {
        inputs: [
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "_favoriteNumber",
            type: "uint256",
          },
        ],
        name: "addPerson",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        name: "nameToFavoriteNumber",
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
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "people",
        outputs: [
          {
            internalType: "uint256",
            name: "favoriteNumber",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "retrieve",
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
            internalType: "uint256",
            name: "_favoriteNumber",
            type: "uint256",
          },
        ],
        name: "store",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      await contract.store(42);
    } catch (error) {
      console.log(error);
    }
  } else {
    document.getElementById("executeButton").innerHTML =
      "Please install MetaMask";
  }
}


// module.exports = {
//   connect,
//   execute,
// };

export {  connect,
  execute,
  executeVault
};
