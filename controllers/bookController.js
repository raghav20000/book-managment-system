const Book = require("../models/Book");

exports.createBook = async (req, res) => {
  try {
    const book = await Book.create({
      title: req.body.title,
      author: req.body.author,
      price: req.body.price,
      description: req.body.description,
      coverImage: req.file.path
    });

    res.status(201).json({
      message: "Book Added",
      book
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.getBooks = async (req, res) => {
  const books = await Book.find();

  res.json(books);
};

exports.getBook = async (req, res) => {
  const book = await Book.findById(req.params.id);

  res.json(book);
};

exports.updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(book);
};

exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);

  res.json({
    message: "Book Deleted"
  });
};