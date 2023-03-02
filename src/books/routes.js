const {Router} = require("express");
const { addBook, getAllBooks, updateBook, deleteBook, deleteAllBooks, getSingleBookByTitle } = require("./controllers");

const bookRouter = Router();

bookRouter.post("/books/addbook", addBook);
bookRouter.get("/books/getallbooks", getAllBooks);
bookRouter.put("/books/updatebook", updateBook);
bookRouter.delete("/books/deletebook", deleteBook);
bookRouter.delete("/books/deleteallbooks", deleteAllBooks);
bookRouter.get("/book/getbook/:title", getSingleBookByTitle);

module.exports = bookRouter;