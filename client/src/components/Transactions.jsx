import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

const TransactionsCard = (prop) => {
  const { addressTo, addressFrom, timestamp, message, amount, url } = prop;

  return (
    <div className="flex flex-col gap-6 p-6 shadow-md rounded-2xl border-[0.5px] border-secondary">
      <div>
        <a
          href={`https://ropsten.etherscan.io/address/${addressFrom}`}
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-base">From: {shortenAddress(addressFrom)}</p>
        </a>
        <a
          href={`https://ropsten.etherscan.io/address/${addressTo}`}
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-base">To: {shortenAddress(addressTo)}</p>
        </a>
        <p className="text-base">Amount: {amount} ETH</p>
        {message && (
          <>
            <br />
            <p className="text-base">Message: {message}</p>
          </>
        )}
      </div>
      <img
        src={url}
        alt="nature"
        className="w-full h-64 rounded-md object-cover"
      />
      <p className="text-primary font-bold">{timestamp}</p>
    </div>
  );
};

const Transactions = () => {
  const currentAccount = false;
  return (
    <div className="py-12 flex flex-col gap-6">
      {currentAccount ? (
        <h3 className="text-3xl text-center">Latest Transactions</h3>
      ) : (
        <h3 className="text-3xl text-center">
          Connect your account to see the latest transactions
        </h3>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
        {dummyData.reverse().map((transaction, i) => (
          <TransactionsCard key={i} {...transaction} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
