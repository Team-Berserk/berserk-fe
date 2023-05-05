import { Link, useLocation } from "react-router-dom";
import { HeaderJSON } from "./json/HeaderJSON";
import { useContext, useState } from "react";
// import { AuthContext } from "../Providers/AuthContext";
import { RxHamburgerMenu } from "react-icons/rx";
import WebLogo from "../Assets/WebLogo.svg";
import MobaLogo from "../Assets/MobaLogo.svg";

export const Header = () => {
  const path = useLocation();
  // const { userData } = useContext(AuthContext);
  const [isShowMenu, setIsShowMenu] = useState(true);

  const Menu = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <div className="flex absolute top-0 z-10 w-screen bg-white">
      <nav className="w-full p-5 md:flex items-center justify-between mx-0 xl:mx-32 md:mx-1">
        <div className="flex justify-between">
          <Link to="/">
            <img
              alt="Logo"
              className="mx-3 w-40 hidden md:block"
              src={WebLogo}
            />
            <img alt="Logo" className="mx-3 block md:hidden" src={MobaLogo} />
          </Link>
          <div className="text-3xl cursor-pointer block md:hidden">
            <RxHamburgerMenu name="menu" onClick={Menu} />
          </div>
        </div>
        {!isShowMenu ? (
          <div className="xl:flex xl:items-center w-full lg:w-auto xl:py-0 py-4 mx-3 gap-3">
            {HeaderJSON.map((item, index) => {
              return (
                <div
                  className="text-xl font-normal p-1.5 hover:text-[#516EFF]"
                  key={index}
                >
                  <Link to="/" className="no-underline" onClick={Menu}>
                    <div className="font-semibold">{item.name}</div>
                  </Link>
                </div>
              );
            })}
            <Link to="/appointment" onClick={Menu}>
              <div className="border bg-[#516EFF] hover:bg-[#637DFF] rounded-md p-2 px-3 w-32 h-12 flex items-center justify-center text-white font-semibold">
                Цаг авах
              </div>
            </Link>
          </div>
        ) : (
          <div className="gap-5 hidden md:flex items-center">
            {HeaderJSON.map((item, index) => {
              return (
                <div className="p-1.5 hover:text-[#516EFF]" key={index}>
                  <Link to="/" className="no-underline">
                    <div className="font-semibold text-md xl:text-xl">
                      {item.name}
                    </div>
                  </Link>
                </div>
              );
            })}
            <Link to="/appointment">
              <div className="border bg-[#516EFF] hover:bg-[#637DFF] text-sm xl:text-xl rounded-md p-2 px-3 xl:w-32 xl:h-12 flex items-center justify-center text-white font-semibold">
                Цаг авах
              </div>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};
