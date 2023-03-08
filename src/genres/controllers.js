const Genre = require("./model")

const addGenre = async (req, res) => {
    try {
     const genre = await Genre.create(req.body)
 
     res.status(201).json({ message: "Genre successfully added.", newGenre: genre})
    } catch (error) {
      console.log(error)
 
      res.status(501).json({ errorMessage: error.message, error: error })
    }
 };

 const getAllBooksInGenre = async (req, res) => {
  try {
    const allBooksInGenre = await Genre.findAll({
      where: { genreName: req.params.genre }, 
            include: Book,
    });

    res.status(201).json({ message: "All books in this genre successfully found.", books: allBooksInGenre });
  } catch (error) {
    
    res.status(501).json({ errorMessage: error.message, error: error })
  }
 };
 


module.exports = {
    addGenre,
    getAllBooksInGenre
}