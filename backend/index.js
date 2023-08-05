import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import Note from "./models/Note.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/addNote", function (req, res) {
  const data = req.body;

  const entry = new Note(data);
  entry.save();

  res.status(200).send();
});

app.get("/getNote", function (req, res) {
  Note.find({}).then((data) => {
    res.status(200).send(data);
  });
});

app.get("/getNote/:id", function (req, res) {
  const noteId = req.params.id;
  Note.findById(noteId)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(500).send("Error");
    });
});

app.put("/updateNote/:id", function (req, res) {
  const id = req.params.id;
  const data = req.body;

  Note.findOneAndUpdate({ _id: id }, data)
    .then(() => {
      res.send("article submitted successfully");
    })
    .catch((error) => {
      console.error("Error :", error);
      res.status(500).send("Error ");
    });
});

app.delete("/deleteNote/:id", function (req, res) {
  const noteId = req.params.id;
  Note.findByIdAndDelete(noteId)
    .then(() => {
      res.send("article deleted successfully");
    })
    .catch((error) => {
      console.error("Error deleting article:", error);
      res.status(500).send("Error");
    });
});

mongoose
  .connect(
    "mongodb+srv://root:fybWGYattidR8EFw@cluster0.voxmzsh.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
  
    app.listen(8000, () => console.log("MongoDb connected, Server is running.."));
  })
  .catch((err) => {
    console.log(err);
  });