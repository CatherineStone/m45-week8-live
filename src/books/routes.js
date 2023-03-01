const {Router} = require("express");
const { addBook } = require("./controllers");

const bookRouter = Router();

bookRouter.post("/books/addbook", addBook);

module.exports = bookRouter;