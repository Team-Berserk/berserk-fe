import { useContext } from "react";
import { AuthContext } from "../Providers";

export const Home = () => {
  const { userData } = useContext(AuthContext);
  return <div>Snu {userData && userData.username}</div>;
};
