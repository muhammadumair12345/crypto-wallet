import { useState } from "react";
import logo from "../assets/logo.png";
import { FaTimes, FaBars } from "react-icons/fa";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const menuStyle = toggle
    ? "md:hidden flex-col fixed z-10 -top-0 -right-2 bg-dark h-screen py-4 px-8 gap-6 w-[60vw] opacity-[0.5] shadow-2xl rounded-md ease-in-out duration-300"
    : "hidden md:flex items-center gap-6";

  return (
    <header className="flex relative gap-6 justify-between items-center container lg:w-[80%]  m-auto py-4 font-medium text-xl">
      <a href="#" className="flex gap-2 items-center">
        <img src={logo} alt="" />
        <p className="text-3xl">Crypto</p>
      </a>
      <div className="flex items-center gap-6">
        <ul className={`flex ${menuStyle}`}>
          {toggle && (
            <li className="self-end">
              <button onClick={() => setToggle(false)}>
                <FaTimes fontSize="30px" />
              </button>
            </li>
          )}
          <li>
            <a href="#">Market</a>
          </li>
          <li>
            <a href="#">Exchange</a>
          </li>
          <li>
            <a href="#">Tutorials</a>
          </li>
          <li>
            <a href="#">Wallets</a>
          </li>
          <li>
            <button className="bg-primary w-full md:w-[7rem] text-center rounded-full hover:bg-secondary p-2">
              Login
            </button>
          </li>
        </ul>
        <button className="block md:hidden" onClick={() => setToggle(true)}>
          {!toggle && <FaBars fontSize="30px" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
