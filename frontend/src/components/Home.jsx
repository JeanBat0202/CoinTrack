import "./home.css";

const handleClick = () => {
  const market = document.getElementById("market-container");
  market.scrollIntoView({ behavior: "smooth" });
};

export default function Home() {
  return (
    <section className="home">
      <div className="content">
        <div className="homeText">
          <h1>Suivez le cours des crypto-monnaies les plus populaires.</h1>
        </div>
        <button onClick={handleClick} type="button" className="button-style">
          ACCEDEZ
        </button>
      </div>
    </section>
  );
}
