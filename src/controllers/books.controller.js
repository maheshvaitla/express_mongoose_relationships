const express = require("express");

const Book =require("../models/books.model")

const router = express.Router();


router.post("", async (req, res) => {
    try {
      const book = await Book.create(req.body);
  
      return res.status(201).send(book);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.get("", async (req, res) => {
    try {
      const books = await Book.find().populate("author_id", {first_name : 1 }).lean().exec();
  
      return res.send(books);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const book = await Book.findById(req.params.id).lean().exec();
  
      return res.send(book);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.patch("/:id", async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      return res.send(book);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id)
        .lean()
        .exec();
  
      return res.send(comment);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  

  module.exports = router;
  
  