import { useContext } from "react";
import { FaEthereum, FaInfoCircle } from "react-icons/fa";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import Loader from "./Loader";

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    sendTransaction,
    handleChange,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addressTo, amount, keyword, message } = formData;
    if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  };

  return (
    <section className="py-12 flex gap-6 items-center flex-col md:flex-row justify-between">
      <div>
        <div>
          <h1 className="text-4xl md:text-left text-center md:text-6xl mb-4">
            Send Crypto <br /> Across the world
          </h1>
          <p className="mb-4 md:text-left text-center  text-xl md:text-2xl">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Crypto.
          </p>
          {!currentAccount && (
            <button
              onClick={connectWallet}
              className="mb-8 bg-primary w-full text-lg font-medium text-center rounded-full hover:bg-secondary p-2 md:p-3"
            >
              Connect Wallet
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3">
          {[
            "Reliability",
            "Security",
            "Ethereum",
            "Web 3.0",
            "Low Fees",
            "Blockchain",
          ].map((item, index, items) => (
            <div
              key={index}
              className={`p-6 flex justify-center items-center ${
                index === 0
                  ? "rounded-tl-2xl"
                  : index === items.length - 1
                  ? "rounded-br-2xl"
                  : ""
              } text-sm font-light text-center border-[0.5px] border-primary`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-auto">
        <div className="mb-6 p-6 md:w-[25rem] flex flex-col justify-between  shadow-md bg-gradient rounded-2xl h-[15rem] border-[0.5px] border-secondary">
          <div className="flex justify-between items-start">
            <FaEthereum
              fontSize="2.5rem"
              className="rounded-full border-[2px] p-2"
            />
            <FaInfoCircle fontSize="1.5rem" />
          </div>
          <div>
            <h5 className="font-light text-sm mb-1">
              {currentAccount ? shortenAddress(currentAccount) : "..."}
            </h5>
            <h2 className="font-semibold text-lg">Etherium</h2>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-secondary rounded-2xl flex flex-col gap-6 p-6"
        >
          <input
            className="rounded-sm p-2 outline-none bg-transparent text-dark border-none text-sm"
            type="text"
            onChange={handleChange}
            name="addressTo"
            placeholder="Address To"
          />
          <input
            className="rounded-sm p-2 outline-none bg-transparent text-dark border-none text-sm"
            type="number"
            onChange={handleChange}
            name="amount"
            step="any"
            placeholder="Amount (ETH)"
          />
          <input
            className="rounded-sm p-2 outline-none bg-transparent text-dark border-none text-sm"
            type="text"
            onChange={handleChange}
            name="keyword"
            placeholder="Keyword (Gif)"
          />
          <input
            className="rounded-sm p-2 outline-none bg-transparent text-dark border-none text-sm"
            type="text"
            onChange={handleChange}
            name="message"
            placeholder="Enter Message"
          />
          {isLoading ? (
            <Loader />
          ) : (
            <button
              type="submit"
              className="p-2 hover:bg-[#aa1ee5eb] shadow-sm  bg-secondary border-[1px] rounded-full cursor-pointer"
            >
              Send now
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default Welcome;
