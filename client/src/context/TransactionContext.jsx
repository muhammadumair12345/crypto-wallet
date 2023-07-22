import { createContext, useEffect, useState } from "react";

import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = createContext();

const { ethereum } = window;

const createEthereumContract = async () => {
  try {
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const transactionsContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );

    return transactionsContract;
  } catch (error) {
    console.log(error);
  }
};
export const TransactionProvider = (prop) => {
  const { children } = prop;
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionsContract = await createEthereumContract();

        const availableTransactions = await transactionsContract
          .getFunction("getAllTransactions")
          .call(this);

        const structuredTransactions = availableTransactions.map(
          (transaction) => ({
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: new Date(
              Number(transaction.timestamp) * 1000
            ).toLocaleString(),
            message: transaction.message,
            keyword: transaction.keyword,
            amount: parseInt(transaction.amount) / 10 ** 18,
          })
        );

        setTransactions(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfTransactionsExists = async () => {
    try {
      if (ethereum) {
        const transactionsContract = await createEthereumContract();
        const currentTransactionCount = await transactionsContract
          .getFunction("getTransactionCount")
          .call(this);

        window.localStorage.setItem(
          "transactionCount",
          currentTransactionCount
        );
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        getAllTransactions();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.");
    }
  };

  const sendTransaction = async () => {
    try {
      if (ethereum) {
        const { addressTo, amount, keyword, message } = formData;
        const transactionsContract = await createEthereumContract();
        const parsedAmount = ethers.parseEther(amount);
        await ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: currentAccount,
              to: addressTo,
              gas: "0x7A120",
              value: `0x${parsedAmount.toString(16)}`,
            },
          ],
        });
        const transactionHash = await transactionsContract
          .getFunction("addToBlockchain")
          .call(this, addressTo, parsedAmount, message, keyword);
        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading(false);
        const transactionsCount = await transactionsContract
          .getFunction("getTransactionCount")
          .call(this);
        setTransactionCount(transactionsCount);
        setFormData({
          addressTo: "",
          amount: "",
          keyword: "",
          message: "",
        });
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    checkIfTransactionsExists();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transactionCount,
        connectWallet,
        transactions,
        currentAccount,
        isLoading,
        sendTransaction,
        handleChange,
        formData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
