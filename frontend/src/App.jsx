import "./App.css";

import Home from "./components/Home";
import Market from "./components/Market";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Market />
      <ScrollToTopButton />
    </>
  );
}

export default App;
