import "./market.css";
import { useEffect, useState } from "react";

export default function Market() {
  const [cryptoList, setCryptoList] = useState([]);

  const getCrypto = () => {
    fetch("http://localhost:8080/api/crypto-proxy")
      .then((res) => res.json())
      .then((data) => {
        console.info("Réponse du serveur:", data);
        setCryptoList(data.results);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données:", error);
      });
  };

  useEffect(() => {
    getCrypto();
  }, []);

  if (!cryptoList) {
    return <p>Please wait...</p>;
  }

  return (
    <section className="market">
      <div className="marketText">Prix des crypto-monnaies </div>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Symbole</th>
          </tr>
        </thead>
        <tbody>
          {cryptoList.map((crypto) => (
            <tr key={crypto.id}>
              <td>{crypto.name}</td>
              <td>{crypto.symbol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
