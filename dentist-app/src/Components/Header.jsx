import { Link, useLocation } from "react-router-dom";
import { HeaderJSON } from "./json/HeaderJSON";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import WebLogo from "../Assets/WebLogo.svg";
import MobaLogo from "../Assets/MobaLogo.svg";

export const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(true);
  const [targetId, setTargetId] = useState("");
  const path = useLocation();

  const Menu = () => {
    setIsShowMenu(!isShowMenu);
  };

  useEffect(() => {
    if (path.pathname === "/")
      if (targetId) {
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
  }, [targetId]);

  function handleClick(event) {
    if (!isShowMenu) {
      Menu();
    }
    event.preventDefault();
    setTargetId(event.currentTarget.getAttribute("href"));
  }

  return (
    <div className="flex absolute top-0 z-1 w-screen z-50 bg-white">
      <nav className="w-full p-5 lg:flex items-center justify-between mx-0 xl:mx-32">
        <div className="flex justify-between">
          <Link to="/">
            <img
              alt="Logo"
              className="mx-3 w-40 hidden lg:block"
              src={WebLogo}
            />
            <img alt="Logo" className="mx-3 block lg:hidden" src={MobaLogo} />
          </Link>
          <div className="text-3xl cursor-pointer block lg:hidden ">
            <RxHamburgerMenu name="menu" onClick={Menu} />
          </div>
        </div>
        {!isShowMenu ? (
          <div className="xl:flex xl:items-center w-full lg:w-auto xl:py-0 py-4 mx-3">
            {HeaderJSON.map((item, index) => {
              return (
                <div
                  className="text-xl font-normal p-1.5 hover:text-blue-500"
                  key={index}
                >
                  {path.pathname === "/" ? (
                    <a
                      onClick={handleClick}
                      href={`#${item.path}`}
                      className="transition-all duration-300"
                    >
                      <div className="font-semibold text-md xl:text-xl">
                        {item.name}
                      </div>
                    </a>
                  ) : (
                    <Link to="/">
                      <div className="font-semibold text-md xl:text-xl">
                        {item.name}
                      </div>
                    </Link>
                  )}
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
          <div className="gap-5 hidden lg:flex items-center">
            {HeaderJSON.map((item, index) => {
              return (
                <div className="p-1.5 hover:text-blue-500" key={index}>
                  {path.pathname === "/" ? (
                    <a
                      onClick={handleClick}
                      href={`#${item.path}`}
                      className="transition-all duration-300"
                    >
                      <div className="font-semibold text-md xl:text-xl">
                        {item.name}
                      </div>
                    </a>
                  ) : (
                    <Link to="/">
                      <div className="font-semibold text-md xl:text-xl">
                        {item.name}
                      </div>
                    </Link>
                  )}
                </div>
              );
            })}
            <Link to="/appointment">
              <div className="PurpleButton">Цаг авах</div>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};
