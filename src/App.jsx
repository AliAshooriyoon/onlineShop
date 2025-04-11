import Home from "./components/pages/Home/Home.jsx";
import { Header } from "./components/pages/Header/Header.jsx";
import { Footer } from "./components/pages/Footer/Footer.jsx";

const App = () => {
  return (
    <>
      <div className="app bg-zinc-900 ">
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
};
export default App;
