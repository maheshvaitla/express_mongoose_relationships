const express = require("express");


const usersController = require("./controllers/users.controller");
const authorsController = require("./controllers/authors.controller");
const sectionsController = require("./controllers/sections.controller");
const booksController = require("./controllers/books.controller");


const app = express();

app.use(express.json());


app.use("/sectionss", sectionsController);
app.use("/users", usersController);
app.use("/books", booksController);
app.use("/authors", authorsController);


module.exports =app;










