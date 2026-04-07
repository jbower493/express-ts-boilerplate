import cors from "cors";
import express from "express";

const PORT = 4000;

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.get("/", (req, res) => {
  return res.json({ message: "Hi", data: [] });
});

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
