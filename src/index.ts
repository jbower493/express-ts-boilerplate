import express from "express";

const PORT = 3000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "Hi", data: [] });
});

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
