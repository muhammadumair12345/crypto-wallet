import logo from "../assets/logo.png";

const Footer = () => (
  <div className="flex flex-col py-4 gap-6 font-medium text-lg">
    <div className="flex gap-6 justify-between items-center">
      <a href="#">
        <img src={logo} alt="" className="w-24" />
      </a>
      <div className="flex items-center gap-6">
        <ul className={`flex gap-6`}>
          {["Market", "Exchange", "Tutorials", "Wallets"].map((menu, index) => (
            <li key={index}>
              <a href="#">{menu}</a>
            </li>
          ))}
        </ul>
      </div>
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
