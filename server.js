require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);

app.use("/api/books", bookRoutes);

app.get("/", (req, res) => {
  res.send("Book Management API Running");
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server running on ${process.env.PORT}`
  );
});