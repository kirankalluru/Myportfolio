const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB contactDB
const contactDB = mongoose.createConnection("mongodb://localhost:27017/contactDB");
contactDB.on("connected", () => console.log("Connected to MongoDB contactDB"));
contactDB.on("error", (error) => console.log("Error connecting to contactDB:", error));

// Connect to MongoDB Todolist in Atlas
const todoDB = mongoose.createConnection("mongodb+srv://kirankalluru:kirankalluru@kiran.qcibn.mongodb.net/Todolist");
todoDB.on("connected", () => console.log("Connected to MongoDB todo"));
todoDB.on("error", (error) => console.log("Error connecting to todoDB:", error));







// Define a schema and model for Todo items in the todoDB
const todoSchema = new mongoose.Schema({
  task: String,
  completed: Boolean,
});

const Todo = todoDB.model("Todo", todoSchema);

// API Endpoints for Todo tasks

// Get all tasks
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Todo.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).send("Error retrieving tasks");
  }
});

// Add a new task
app.post("/tasks", async (req, res) => {
  const { task } = req.body;
  const newTask = new Todo({
    task,
    completed: false,
  });
  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).send("Error adding task");
  }
});

// Update a task
app.put("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;
  try {
    const updatedTask = await Todo.findByIdAndUpdate(id, { task, completed }, { new: true });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).send("Error updating task");
  }
});

// Delete a task
app.delete("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Todo.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send("Error deleting task");
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
