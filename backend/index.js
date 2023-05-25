import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.listen(8800, () => {
  console.log("Connected to backend !");
});

app.get("/", (req, res) => {
  const q = "SELECT * FROM appart";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/myrentals", (req, res) => {
  const q = "SELECT * FROM user_appart";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/myrentals", (req, res) => {
  console.log(req.body);

  const q =
    "INSERT INTO user_appart (`title`, `desc`, `price`, `surfaces`, `chambers`, `dateEntree`, `dateSortie`, `city`, `images`,`dispo`) VALUES (?) ";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.surfaces,
    req.body.chambers,
    req.body.dateEntree,
    req.body.dateSortie,
    req.body.city,
    req.body.images,
    req.body.dispo,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Appartment has been created");
  });
});

app.put("/myrentals/:id", (req, res) => {
  console.log(req);
  const appartementId = req.params.id;
  const q =
    "UPDATE user_appart SET `title` = ?, `desc` = ?, `price` = ?, `surfaces` = ?, `chambers` = ?, `dateEntree` = ?, `dateSortie` = ?, `city` = ?, `images` = ? ,`dispo` = ? WHERE id = ? ";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.surfaces,
    req.body.chambers,
    req.body.dateEntree,
    req.body.dateSortie,
    req.body.city,
    req.body.images,
    req.body.dispo,
  ];

  db.query(q, [...values, appartementId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Appartment has been updated successfully");
  });
});

app.delete("/:id", (req, res) => {
  const appartmentId = req.params.id;
  const q = "DELETE FROM user_appart WHERE id = ?";

  db.query(q, [appartmentId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been deleted successfully");
  });
});
