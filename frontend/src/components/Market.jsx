import "./market.css";
import { useEffect, useState } from "react";

export default function Market() {
  const [cryptoList, setCryptoList] = useState([]);
  const [cryptoLogo, setCryptoLogo] = useState({});

  const getCrypto = () => {
    fetch("http://localhost:8080/api/crypto-proxy")
      .then((res) => res.json())
      .then((data) => {
        console.info("Réponse du serveur:", data);
        setCryptoList(data.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données:", error);
      });
  };

  const getLogo = () => {
    fetch("http://localhost:8080/api/crypto-proxy-logo")
      .then((res) => res.json())
      .then((data) => {
        console.info("Réponse du serveur pour les logos:", data);
        // Vous devez probablement ajuster la structure des données selon ce que votre serveur renvoie
        setCryptoLogo(data.orderedData);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des logos:", error);
      });
  };

  useEffect(() => {
    getCrypto();
    getLogo();
  }, []);

  if (!cryptoList || cryptoList.length === 0 || !cryptoLogo) {
    return <p>Please wait...</p>;
  }

  return (
    <section className="market">
      <div className="marketText">Top 10 des crypto-monnaies</div>
      <div className="market-container">
        <div className="table-section">
          <div className="table-container1">
            <table>
              <thead>
                <tr>
                  <th>Logo</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(cryptoLogo).map((logo) => (
                  <tr key={logo.id}>
                    <td>
                      <img
                        className="logo-container"
                        src={logo.logo}
                        alt={logo.name}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Symbole</th>
                  <th>Prix</th>
                  <th>1H</th>
                  <th>24H</th>
                  <th>7D</th>
                  <th>Market Cap</th>
                </tr>
              </thead>
              <tbody>
                {cryptoList.map((crypto) => (
                  <tr key={crypto.id}>
                    <td>{crypto.name}</td>
                    <td>{crypto.symbol}</td>
                    <td>
                      {" "}
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }).format(parseFloat(crypto.quote.USD.price))}
                    </td>
                    <td
                      className={
                        Math.sign(crypto.quote.USD.percent_change_1h) === 1 || 0
                          ? "percentGreen"
                          : "percentRed"
                      }
                    >
                      {Math.sign(crypto.quote.USD.percent_change_1h) === 1 || 0
                        ? "+"
                        : ""}
                      {parseFloat(crypto.quote.USD.percent_change_1h).toFixed(
                        2
                      )}
                      %
                    </td>
                    <td
                      className={
                        Math.sign(crypto.quote.USD.percent_change_24h) === 1 ||
                        0
                          ? "percentGreen"
                          : "percentRed"
                      }
                    >
                      {Math.sign(crypto.quote.USD.percent_change_24h) === 1 || 0
                        ? "+"
                        : ""}
                      {parseFloat(crypto.quote.USD.percent_change_24h).toFixed(
                        2
                      )}
                      %
                    </td>
                    <td
                      className={
                        Math.sign(crypto.quote.USD.percent_change_7d) === 1 || 0
                          ? "percentGreen"
                          : "percentRed"
                      }
                    >
                      {Math.sign(crypto.quote.USD.percent_change_7d) === 1 || 0
                        ? "+"
                        : ""}
                      {parseFloat(crypto.quote.USD.percent_change_7d).toFixed(
                        2
                      )}
                      %
                    </td>
                    <td>
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(parseFloat(crypto.quote.USD.market_cap))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
