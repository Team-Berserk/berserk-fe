import { Link, useLocation } from "react-router-dom";
import { HeaderJSON } from "./json/HeaderJSON";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthContext";

export const Header = () => {
  const path = useLocation();
  const { userData } = useContext(AuthContext);

  return (
    <div className="h-20 flex items-center justify-normal lg:justify-around absolute top-0 w-screen">
      <div className="flex p-1 gap-2 font-medium text-sm lg:text-md w-fit lg:w-2/3">
        {HeaderJSON.map((item, index) => {
          return (
            <div className="text-lg font-normal p-1.5" key={index}>
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
                <div></div>
              </Link>
            </div>
          );
        })}
      </div>
      <div>{userData && userData.username}</div>
    </div>
  );
};
