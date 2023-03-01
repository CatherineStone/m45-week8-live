const Book = require("./model");

const addBook = async (req, res) => {
   try {
    const book = await Book.create(req.body)

    res.status(201).json({ message: "success", newBook: book});
   } catch (error) {
     console.log(error);

     res.status(501).json({ errorMessage: error.message, error: error});
   }
};

module.exports = {
    addBook,
};