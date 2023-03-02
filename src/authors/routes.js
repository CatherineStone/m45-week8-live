const {Router} = require("express");
const { addAuthor, getAuthorAndBooks } = require("./controllers");

const authorRouter = Router();

authorRouter.post("/author/addauthor", addAuthor)
authorRouter.get("/author/getauthorandbooks/:author", getAuthorAndBooks)

module.exports = authorRouter;