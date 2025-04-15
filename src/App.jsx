import Home from "./components/pages/Home/Home.jsx";
import { Header } from "./components/pages/Header/Header.jsx";
import { Footer } from "./components/pages/Footer/Footer.jsx";
import DataCartShower from "./useDataCart.jsx";

const App = () => {
  return (
    <>
      <div className="app bg-zinc-900 ">
        <DataCartShower>
          <Header />
          <Home />
          <Footer />
        </DataCartShower>
      </div>
    </>
  );
};
export default App;
