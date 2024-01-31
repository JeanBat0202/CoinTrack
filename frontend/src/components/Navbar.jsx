import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbarbg">
      <div className="flex items-center">
        <ul className="flex items-center text-xl text-white  ">
          <li className="mr-8">Acceuil</li>
          <li className="mr-8">Marchés</li>
          <li className="mr-8">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
