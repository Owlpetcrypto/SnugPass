import React, { useState, useEffect } from "react";
import { Flex, Button } from '@chakra-ui/react'
import { ethers } from "ethers";
import { keccak256 } from "ethers/lib/utils";
import MerkleTree from "merkletreejs";
import abi from "./abi/abi.json";
import WalletChecker from "./walletChecker";
import { addresses } from "./addresses";

const contractAddress = "0xEc3013634b69928a4daB8bBbe82a3c218e84eEf7";
const API_KEY = ""; // Your api key from your ethercan account

function Mint() {
  const [mintAmount, setMintAmount] = useState(1);
  const [renderCount, setRenderCount] = useState(0);
  const [walletConnected, setWalletConnected] = useState(false);
  const [showFirst, setShowFirst] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);

  let [totalSupply, setSupply] = useState("");

  const [proof, setProof] = useState([""]);

  let leaf = "";

  const handleClick = () => {
    setShowFirst(!showFirst);
    setButtonClicked(true);
  };

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exist! We are ready to go!");
      const accounts = await ethereum.request({ method: "eth_accounts" });

      const leaves = addresses.map((x) => keccak256(x));
      const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
      const buf2hex = (x) => "0x" + x.toString("hex");

      console.log("root", buf2hex(tree.getRoot()));

      leaf = keccak256(accounts[0]); // accounts from accounts using accountsconnect/metamask
      setProof(tree.getProof(leaf).map((x) => buf2hex(x.data)));
      
      console.log("proof", proof);
      console.log(accounts);

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account: ", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    }
  };

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address: ", accounts[0]);
      setWalletConnected(true);
    } catch (err) {
      console.log(err);
    }
  };

  const mintNftHandler = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);
        let amount = mintAmount;

        console.log("Initialize payment");

        let cost = amount;

        if(amount === 1){
            cost = 0.05
        } else if (amount === 2){
          cost = 0.1
        } else if (amount === 3) {
          cost = 0.15
        }
        
        let nftTxn = await nftContract.mint(amount, {value: ethers.utils.parseEther(cost.toString()),});
        console.log("proof", proof);

 
        // let nftTxn = await nftContract.presaleMint(amount, proof, {value: ethers.utils.parseEther(cost.toString()),});
        console.log("Minting... please wait!");
        await nftTxn.wait();

          console.log(
            `Minted, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}`
          );
        } else {
      }
    } catch (err) {
      console.log(err);
    }
  };

  const connectWalletButton = () => {
    return (
      <p className="mint-yout-pass-button" onClick={connectWalletHandler}>
        CONNECT YOUR WALLET
      </p>
    );
  };

  const mintNftButton = () => {
    return (
      <p className="mint-yout-pass-button" onClick={mintNftHandler}>
        MINT YOUR PASS
      </p>
    );
  };

  async function fetchData() {
    const response = await fetch(
      `https://api-goerli.etherscan.io/api?module=stats&action=tokensupply&contractaddress=${contractAddress}&apikey=${API_KEY}`
    );
    const mintedTokens = await response.json();
    setSupply(mintedTokens.result);
  }

  useEffect(() => {
    if (renderCount < 1 && walletConnected) {
      setRenderCount(renderCount + 1);
      checkWalletIsConnected();
    }
  }, [walletConnected, renderCount]);

  useEffect(() => {
    fetchData();
  }, []);

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setMintAmount(function (prevCount) {
      if (prevCount < 3) {
        return (prevCount += 1);
      } else {
        return (prevCount = 3);
      }
    });
  }

  function decrement() {
    setMintAmount(function (prevCount) {
      if (prevCount === 1) {
        return (prevCount = 1);
      } else {
        return prevCount - 1;
      }
    });
  }

  return (
    <div className="hover">

    <WalletChecker />

     {/* {!buttonClicked && (<div className="mint-yout-pass-button" onClick={handleClick}>MINT YOUR PASS</div>)}
        {showFirst ? (
          <div className="first-display"></div>
        ) : (
          <div className="second-display">
          <Flex className="mint-text">
            <p>Snug List is Live!</p>
          </Flex>
            <div className="Button-mint">
              <Button className="connect-button1" onClick={decrement}>
                <div>-</div>
              </Button>
              <div>{mintAmount}</div>
              <Button className="connect-button2" onClick={increment}>
                <div>+</div>
              </Button>
            </div>
            <Flex>{currentAccount ? mintNftButton() : connectWalletButton()}</Flex>
            <Flex className="mint-supply">
              <div>
                MINT PRICE: <span className="supply">0.05 ETH</span>
              </div>
            </Flex>
            <Flex className="mint-supply">
              <div>
                Total Minted: <span className="supply">{totalSupply} / 2000</span>
              </div>
            </Flex>
        </div> 
        )} */}
    </div>
  );
}

export default Mint;