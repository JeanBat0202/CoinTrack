// Importez les modules Node nécessaires
const fs = require("node:fs");
const path = require("node:path");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Créez l'application express
const app = express();

// Utilisez des middlewares au niveau de l'application
app.use(express.json());
app.use(cors()); // Utilisez CORS pour toutes les routes

// Importez et montez les routes de l'API
const router = express.Router();

router.get("/crypto-proxy", async (req, res) => {
  try {
    const { VITE_API_KEY } = process.env;

    // Utilisez une importation dynamique pour node-fetch (disponible dans tous les modules CommonJS)
    const fetch = await import("node-fetch");

    const response = await fetch.default(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10",
      {
        headers: {
          Accept: "application/json",
          "X-CMC_PRO_API_KEY": VITE_API_KEY,
        },
      }
    );

    // Essaye de parser la réponse JSON
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
    res.status(500).send("Erreur lors de la récupération des données");
  }
});

app.use("/api", router);

// Servez l'application REACT
const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  // Servez les ressources REACT
  app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

  // Redirigez toutes les demandes vers le fichier index REACT
  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// Prêt à être exporté
module.exports = app;
