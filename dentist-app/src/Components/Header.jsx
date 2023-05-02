import { Link, useLocation } from "react-router-dom";
import { HeaderJSON } from "./json/HeaderJSON";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

export const Header = () => {
  const path = useLocation();
  const { userData } = useContext(AuthContext);
  const [isShowMenu, setIsShowMenu] = useState(true);
  function Menu(e) {
    console.log(e);
    setIsShowMenu(!isShowMenu);
    // let list = document.querySelector("ul");

    // if (e.name !== "menu") {
    //   list.classList.add("top-[80px]");
    //   list.classList.add("opacity-100");
    // }
    // e.name === "menu"
    //   ? ((e.name = "close"),
    //     list.classList.add("top-[80px]"),
    //     list.classList.add("opacity-100"))
    //   : ((e.name = "menu"),
    //     list.classList.remove("top-[80px]"),
    //     list.classList.remove("opacity-100"));
  }

  return (
    <div className="flex items-center justify-around absolute top-0 w-screen">
      <nav className="w-screen p-5 pb-0 md:flex md:items-center">
        <div className="flex items-center">
          <span className="text-3xl cursor-pointer md:hidden block mx-2">
            <RxHamburgerMenu name="menu" onClick={(e) => Menu(e)} />
          </span>
        </div>
        {console.log(isShowMenu)}
        {!isShowMenu ? (
          <ul
            className={`md:flex md:items-center z-[100] md:z-auto md:static w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 top-[-400px] transition-all ease-in duration-500 bg-white`}
          >
            <li className="mx-4 my-6 md:my-0">
              <a href="/" className="text-xl hover:text-cyan-500 duration-500">
                Нүүр хуудас
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a
                href="/doctors"
                className="text-xl hover:text-cyan-500 duration-500"
              >
                Эмч
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a href="/about-us" className="text-xl hover:text-cyan-500 duration-500">
                Бидний тухай
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a href="/appointment" className="text-xl hover:text-cyan-500 duration-500">
                Цаг захиалах
              </a>
            </li>
          </ul>
        ) : (
          <div className="gap-4 font-medium w-fit hidden lg:flex">
            {HeaderJSON.map((item, index) => {
              return (
                <div className="text-xl font-normal p-1.5 hover:text-cyan-500" key={index}>
                  <Link to={`/${item.path}`} className="no-underline">
                    <div
                      className={`${
                        path.pathname === "/" + item.path
                          ? "hover:text-sky-500"
                          : ""
                      }`}
                    >
                      {item.name}
                    </div>
                    <div></div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </nav>
      <div>{userData && userData.username}</div>
    </div>
  );
};
