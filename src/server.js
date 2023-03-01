require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 5001;

const Book = require("./books/model");

const app = express();

app.use(express.json());

const syncTables = () => {
    Book.sync();
};

app.get("/health", (req, res) => 
res.status(200).json({ message: "API is working" }))

app.listen(port, () => {
    syncTables();
    console.log(`Server is listening on port ${port}`);
});