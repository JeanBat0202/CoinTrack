import "./navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <header className={color ? "navbar navbar-bg" : "navbar"}>
      <div className="logo font-extrabold text-2xl">CoinTrack</div>
      <nav>
        <div className="Navigation">
          <ul className="flex items-center ">
            <li>Acceuil</li>
            <li>Marchés</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      <div className="logo font-extrabold text-2xl">CoinTrack</div>
    </header>
  );
}
