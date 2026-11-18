import express from "express";

const app = express();

const PORT = 5000;

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("ShopPilot Backend is running!");
});

// Server
app.listen(PORT, () => {
  console.log(`ShopPilot server running on port ${PORT}`);
});
