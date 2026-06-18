const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

const auth = require("../middleware/authMiddleware");

const {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook
} = require("../controllers/bookController");

router.post(
  "/",
  auth,
  upload.single("coverImage"),
  createBook
);

router.get("/", auth, getBooks);

router.get("/:id", auth, getBook);

router.put("/:id", auth, updateBook);

router.delete("/:id", auth, deleteBook);

module.exports = router;