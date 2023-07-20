import { FaEthereum, FaInfoCircle } from "react-icons/fa";

const Welcome = () => {
  return (
    <section className="py-12 flex gap-6 items-center flex-col md:flex-row justify-between">
      <div>
        <div>
          <h1 className="text-6xl mb-4">
            Send Crypto <br /> Across the world
          </h1>
          <p className="mb-8 font-normal text-2xl">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Crypto.
          </p>
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
            <h5 className="font-light text-sm mb-1">0x9xff32323</h5>
            <h2 className="font-semibold text-lg">Etherium</h2>
          </div>
        </div>
        <form className="bg-secondary rounded-2xl flex flex-col gap-6 p-6">
          <input
            className="rounded-sm p-2 outline-none bg-transparent text-dark border-none text-sm"
            type="text"
            placeholder="Address To"
          />
          <input
            className="rounded-sm p-2 outline-none bg-transparent text-dark border-none text-sm"
            type="text"
            placeholder="Amount (ETH)"
          />
          <input
            className="rounded-sm p-2 outline-none bg-transparent text-dark border-none text-sm"
            type="text"
            placeholder="Keyword (Gif)"
          />
          <input
            className="rounded-sm p-2 outline-none bg-transparent text-dark border-none text-sm"
            type="text"
            placeholder="Enter Message"
          />
          <button
            type="submit"
            className="p-2 bg-gradient rounded-full cursor-pointer"
          >
            Send now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Welcome;
