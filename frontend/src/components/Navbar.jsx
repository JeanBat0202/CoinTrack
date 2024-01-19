export default function Navbar() {
  return (
    <nav className="navbar flex justify-center h-16 fixed w-full top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="flex items-center">
        <ul className="flex items-center text-xl text-white ">
          <li className="mr-6">Acceuil</li>
          <li className="mr-6">Marchés</li>
          <li className="mr-6">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
