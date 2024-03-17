const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5001;
const app = express();

// Middlewears
const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());

// Initialize database connection
const db = new sqlite3.Database("dua_main.sqlite");

// API endpoint to get all categories with language preference
app.get("/categories", (req, res) => {
  const language = req.query.language || "en"; // Default language is English if not provided

  const categoryFields = `
      id,
      cat_id,
      cat_name_${language} AS cat_name,
      no_of_subcat,
      no_of_dua,
      cat_icon
  `;
  const sql = `SELECT ${categoryFields} FROM category`;

  db.all(sql, (err, categories) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(categories);
  });
});

// API endpoint to get all duas with language preference
app.get("/duas", (req, res) => {
  const language = req.query.language || "en"; // Default language is English if not provided

  const duaFields = `
      id,
      cat_id,
      subcat_id,
      dua_id,
      dua_name_${language} AS dua_name,
      top_${language} AS top,
      dua_arabic,
      transliteration_${language} AS transliteration,
      dua_indopak,
      translation_${language} AS translation,
      bottom_${language} AS bottom,
      refference_${language} AS refference,
      audio
  `;

  const sql = `SELECT ${duaFields} FROM dua`;

  db.all(sql, (err, duas) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(duas);
  });
});

// API endpoint to get all subcategories with language preference
app.get("/sub-categories", (req, res) => {
  const language = req.query.language || "en"; // Default language is English if not provided

  const subCategoryFields = `
      id,
      cat_id,
      subcat_id,
      subcat_name_${language} AS subcat_name,
      no_of_dua
  `;

  const sql = `SELECT ${subCategoryFields} FROM sub_category`;

  db.all(sql, (err, subcategories) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(subcategories);
  });
});

app.get("/", (req, res) => {
  res.send("Hello from Dua & Ruqyah Server..");
});

app.listen(port, () => {
  console.log(`Advisoropedia is running on port ${port}`);
});
