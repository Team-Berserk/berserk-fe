import { useContext } from "react";
import { AuthContext } from "../Providers";
import { Footer } from "../Components/Footer";

export const Home = () => {
  const { userData } = useContext(AuthContext);
  return (
    <div>
      Snu {userData && userData.username}
      <Footer />
    </div>
  );
};
