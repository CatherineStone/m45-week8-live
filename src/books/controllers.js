const Book = require("./model");

const addBook = async (req, res) => {
   try {
    const book = await Book.create(req.body)

    res.status(201).json({ message: "Book successfully added.", newBook: book})
   } catch (error) {
     console.log(error)

     res.status(501).json({ errorMessage: error.message, error: error })
   }
};


const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.findAll();

        res.status(201).json({ message: "All books successfully found.", books: allBooks });
    } catch {
        console.log(error)

        res.status(501).json({ errorMessage: error.message, error: error })
    }
};



// {
//   "title": "book4",
//   "updateValue": "updated author",
//   "updateKey": "X"
// }
const updateBook = async (req, res) => {
    try {
        const updateBook = await Book.update({[req.body.updateKey]: req.body.updateValue }, { // Update object
            where: {
                title: req.body.title
            }
        });

        res.status(201).json({ message: "Book successfully updated.", book: updateBook });
    } catch {
        console.log(error)

        res.status(501).json({ errorMessage: error.message, error: error })
    }
};


// const updatedBook = async (req, res) => {
//     try {
//         const updatedBook = await Book.update(
//             {genre: req.body.newGenre}, // New data to update
//             { where { title: req.body.title } } // Filter
//     )
//         res.status(201).json({ message: "Book successfully updated.", book: updatedBook });
//     } catch {
//         console.log(error)

//         res.status(501).json({ errorMessage: error.message, error: error })
//     }
// };



const deleteBook = async (req, res) => {
    try {
        const result = await Book.destroy({
            where: {
                title: req.body.title
            }
        });
        res.status(201).json({ message: "Book successfully deleted.", result: result})
    } catch {
        console.log(error)

        res.status(501).json({ errorMessage: error.message, error: error })
    }
};


const deleteAllBooks = async (req, res) => {
    try {
        const books = await Book.destroy({
            truncate: true
        });
        res.status(201).json({ message: "All books successfully deleted.", deleteBooks: books})
    } catch {
        console.log(error)

        res.status(501).json({ errorMessage: error.message, error: error })
    }
};

const getSingleBookByTitle = async (req, res) => {
    try {
        const book = await Book.findOne({ where: { title: req.params.title }
        });
        res.status(501).json({ message: "Book found by title.", book: book})
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error })
    }
};

module.exports = {
    addBook,
    getAllBooks,
    updateBook,
    deleteBook,
    deleteAllBooks,
    getSingleBookByTitle
};