import { Link, useLocation } from "react-router-dom";
import { HeaderJSON } from "./json/HeaderJSON";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthContext";
import { RxHamburgerMenu } from "react-icons/rx";
import image from "../Assets/SiteLogo.svg";

export const Header = () => {
  const path = useLocation();
  // const { userData } = useContext(AuthContext);
  const [isShowMenu, setIsShowMenu] = useState(true);
  function Menu(e) {
    setIsShowMenu(!isShowMenu);
  }

  return (
    <div className="flex items-center justify-around absolute top-0 w-screen z-10 header bg-slate-50">
      <nav className="w-full p-5 md:flex items-center">
        <div className="flex items-center justify-between">
          <img alt="Logo" className="mx-3" src={image} />
          <span className="text-3xl cursor-pointer md:hidden block mx-2 ">
            <RxHamburgerMenu name="menu" onClick={(e) => Menu(e)} />
          </span>
        </div>
        {!isShowMenu ? (
          <div className="md:flex md:items-center w-full  md:w-auto md:py-0 py-4 gap-3">
            {HeaderJSON.map((item, index) => {
              return (
                <div
                  className="text-xl font-normal p-1.5 hover:text-cyan-500"
                  key={index}
                >
                  <Link to={`/${item.path}`} className="no-underline">
                    <div
                      className={`${
                        path.pathname === "/" + item.path
                          ? "text-sky-500"
                          : "text-black"
                      }`}
                      onClick={Menu}
                    >
                      {item.name}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="gap-4 font-medium w-fit hidden md:flex">
            {HeaderJSON.map((item, index) => {
              return (
                <div
                  className="text-xl font-normal p-1.5 hover:text-cyan-500"
                  key={index}
                >
                  <Link to={`/${item.path}`} className="no-underline">
                    <div
                      className={`${
                        path.pathname === "/" + item.path
                          ? "text-sky-500"
                          : "text-black"
                      }`}
                    >
                      {item.name}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </nav>
    </div>
  );
};
