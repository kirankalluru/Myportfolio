import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editId, setEditId] = useState(null);

  // Fetch tasks from the server
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async () => {
    if (taskInput) {
      try {
        const res = await axios.post("http://localhost:5000/tasks", { task: taskInput });
        setTasks([...tasks, res.data]);
        setTaskInput("");
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  const updateTask = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/tasks/${editId}`, { task: taskInput });
      setTasks(tasks.map(task => task._id === editId ? res.data : task));
      setTaskInput("");
      setEditId(null);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleEdit = (task) => {
    setEditId(task._id);
    setTaskInput(task.task);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="min-h-screen w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-teal-400">Todo List</h1>
        <div className="flex mb-6">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Enter a new task"
            className="flex-grow p-3 bg-gray-700 text-white border border-gray-600 rounded-l-lg focus:outline-none focus:border-teal-500"
          />
          <button
            onClick={editId ? updateTask : addTask}
            className={`px-4 py-3 ${editId ? 'bg-yellow-500' : 'bg-teal-500'} text-white rounded-r-lg hover:bg-opacity-80 transition`}
          >
            {editId ? "Update" : "Add"}
          </button>
        </div>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task._id} className="flex justify-between items-center bg-gray-700 p-3 rounded-md shadow-sm break-words">
              <span className="text-lg">{task.task}</span>
              <div className="flex space-x-4">
                <button onClick={() => handleEdit(task)} className="text-yellow-400 hover:text-yellow-300 transition">Edit</button>
                <button onClick={() => deleteTask(task._id)} className="text-red-500 hover:text-red-400 transition">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todolist;
