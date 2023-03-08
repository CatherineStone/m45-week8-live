const {Router} = require("express");
const { addGenre, getAllBooksInGenre } = require("./controllers");

const genreRouter = Router();

genreRouter.post("/genres/addgenre", addGenre);
genreRouter.get("/genres/getbooksbygenre/:genre", getAllBooksInGenre)


module.exports = genreRouter;