import React, { useState, useEffect } from "react";
import { Flex, Button } from "@chakra-ui/react";
import { ethers } from "ethers";
import { keccak256 } from "ethers/lib/utils";
import MerkleTree from "merkletreejs";
import abi from "./abi/abi.json";

const addresses = [
  "0x2894Df8C3C0D654674108613f2fcf0cF4E319b65",
  "0x675704E137D1178854bfa798fbee24069e081395",
  "0x903fC0d00Ab75B25C2F876D1f4242d86d0A19565",
  "0x1E664bA846015F105FC97105f43E3803E0cA9A4c",
  "0x9300614F448a4FD4512bA5586E41528019bf266D",
  "0x2BbC590F901984b0217229Ab7F06Cd17d979fFb3",
  "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
  "0xE63f044D451934a08ced2463cBBf145e23ef6384",
  "0xB9277bb50FA9bD8Da38085622f5B782D47a64339",
  "0x9A41426ae9C88110188276bAF8046dC420005249",
  "0xD028780dDCBBD7930a9C27da65D3ca6f440E5127",
  "0x0AD4189a533d747AdbDA9afC8108c5B239dD73B4"
]; // whitelisted address

const contractAddress = "0x0AE2218f693aD02DA899F8c019Fa8825c7438b9B";
const API_KEY = ""; // Your api key from your ethercan account

function Mint() {
  const [mintAmount, setMintAmount] = useState(1);
  const [currentAccount, setCurrentAccount] = useState(null);
  let [totalSupply, setSupply] = useState("");

  const [proof, setProof] = useState([""]);

  let leaf = "";

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

      if (accounts.lenght !== 0) {
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
      setCurrentAccount(accounts[0]);
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
        let cost = 0.1 * amount;
        // let nftTxn = await nftContract.mint(amount, {value: ethers.utils.parseEther(cost.toString()),});
        console.log("proof", proof);

        let nftTxn = await nftContract.presaleMint(amount, proof, {value: ethers.utils.parseEther(cost.toString()),});
        console.log("Minting... please wait!");
        await nftTxn.wait();

        console.log(
          `Minted, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}`
        );
      } else {
        console.log("Ethereum object doesn't exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const connectWalletButton = () => {
    return (
      <p className="mint-yout-pass-button" onClick={connectWalletHandler}>
        MINT YOUR PASS
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

  useEffect(() => {
    checkWalletIsConnected();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchData() {
    const response = await fetch(
      `https://api-goerli.etherscan.io/api?module=stats&action=tokensupply&contractaddress=${contractAddress}&apikey=${API_KEY}`
    );
    const mintedTokens = await response.json();
    setSupply(mintedTokens.result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setMintAmount(function (prevCount) {
      if (prevCount < 2) {
        return (prevCount += 1);
      } else {
        return (prevCount = 2);
      }
    });
  }

  function decrement() {
    setMintAmount(function (prevCount) {
      if (prevCount === 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 1);
      }
    });
  }

  return (
    <div className="hover">
      <Flex className="mint-text">
        {currentAccount ? <p>Pulbic is live!</p> : ""}
      </Flex>
      {currentAccount ? (
        <div className="Button-mint">
          <Button className="connect-button1" onClick={decrement}>
            <div>-</div>
          </Button>
          <div>{mintAmount}</div>
          <Button className="connect-button2" onClick={increment}>
            <div>+</div>
          </Button>
        </div>
      ) : (
        ""
      )}
      <Flex>{currentAccount ? mintNftButton() : connectWalletButton()}</Flex>
      <Flex className="mint-supply">
        <div>Total Minted: {totalSupply} / 2000 </div>
      </Flex>
    </div>
  );
}

export default Mint;
