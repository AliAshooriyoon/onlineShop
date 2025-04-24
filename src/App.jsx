import Home from "./components/pages/Home/Home.jsx";
import { Header } from "./components/pages/Header/Header.jsx";
import { Footer } from "./components/pages/Footer/Footer.jsx";
import DataCartShower from "./useDataCart.jsx";
import ChangerOpacity, { useStatusOpacity } from "./useFinalCartData.jsx";
import { useEffect, useState } from "react";

const App = () => {
  const { status } = useStatusOpacity();
  const [stat, setStat] = useState(status);
  useEffect(() => {
    console.log("111111111111111111111111111111111111111111111111111111111");
    console.log(status);
    setStat(status);
  }, [status]);
  return (
    <>
      <div className={`app bg-zinc-900 ${stat ? "opacity-50" : ""}`}>
        <ChangerOpacity>
          <DataCartShower>
            <Header />
            <Home />
            <Footer />
          </DataCartShower>
        </ChangerOpacity>
      </div>
    </>
  );
};
export default App;
