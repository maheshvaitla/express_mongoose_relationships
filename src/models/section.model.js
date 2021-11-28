const mongoose = require("mongoose");


const sectionSchema = new mongoose.Schema(
    {
      book_id:{type:mongoose.Schema.Types.ObjectId},
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
 module.exports = mongoose.model("section", sectionSchema); 