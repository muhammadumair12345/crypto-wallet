import logo from "../assets/logo.png";

const Footer = () => (
  <div className="flex flex-col py-4 gap-6 font-medium text-lg">
    <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
      <a href="#">
        <img src={logo} alt="" className="w-20 h-20 md:w-24 md:h-24" />
      </a>
      <ul className={`grid grid-cols-2 md:grid-cols-4 gap-6`}>
        {["Market", "Exchange", "Tutorials", "Wallets"].map((menu, index) => (
          <li key={index} className="hover:text-[#8419b1]">
            <a href="#">{menu}</a>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <p className="text-sm text-center">
        Come join us and hear for the unexpected miracle
      </p>
      <p className="text-sm text-center font-medium mt-2">
        info@cryptowallet.com
      </p>
    </div>

    <div className="w-full h-[0.25px] bg-primary" />

    <div className="flex justify-between items-center">
      <p className="text-xs">@CryptoWallet2022</p>
      <p className="text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
