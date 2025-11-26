import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mercadopago from "mercadopago";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN
});

app.post("/create-preference", async (req, res) => {
  try {
    const preference = {
      items: req.body.items,
      back_urls: {
        success: "https://3.144.166.195/success",
        failure: "https://3.144.166.195/failure",
        pending: "https://3.144.166.195/pending"
      }
    };

    const response = await mercadopago.preferences.create(preference);
    res.json({ id: response.body.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creando la preferencia" });
  }
});

app.listen(3001, () => console.log("API running on port 3001"));