import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const Dashboard = () => {
  const location = useLocation();
  const userData = location.state.data.user1;
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdateTodo = () => {
    if (title.trim() === "" || description.trim() === "") return;

    const newTodo = {
      title,
      description,
      userId: userData._id,
    };

    if (isEditing && editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = newTodo;
      setTodos(updatedTodos);
      alert("Todo updated successfully");
    } else {
      setTodos([...todos, newTodo]);
      alert("Todo added successfully");
    }
    setTitle("");
    setDescription("");
    setIsEditing(false);
    setEditIndex(null);
    setShow(false);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleEdit = (index) => {
    const todo = todos[index];
    setTitle(todo.title);
    setDescription(todo.description);
    setEditIndex(index);
    setIsEditing(true);
    setShow(true);
  };

  const handleLogout = () => {
    alert("Logged out successfully");
    navigate("/", { replace: true });
  };

  const handleTodosList = () => {
    alert("loading your todos");
    navigate("/MyTodos", {
      state: { data: { user1: userData } },
    });
  };

  const handleSave = async (todo, index) => {
    try {
      const response = await fetch("https://todo-backend1-s4y6.onrender.com/Todolist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to save:", errorData);
        alert("Failed to save todo");
      } else {
        const result = await response.json();
        console.log("Saved:", result);
        alert("Todo saved to Todolist");

        
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong while saving");
    }
    console.log("Todo saved:", todo);
  };

  const handleShowForm = () => {
    setTitle("");
    setDescription("");
    setIsEditing(false);
    setEditIndex(null);
    setShow(true);
  };

  return (
    <div>
      
      <nav className="flex justify-between items-center bg-blue-900 p-4 text-white">
        <div className="flex items-center space-x-4">
          <div className="font-bold">
            {userData.firstname
              ? `${userData.firstname[0].toUpperCase()} . ${userData.lastname.toUpperCase()}`
              : "No Name"}
          </div>
        </div>

        <div className="flex items-center space-x-10">
          <button
            onClick={handleTodosList}
            className="font-bold hover:text-gray-400 cursor-pointer"
          >
            My ToDos
          </button>
          <button
            onClick={handleLogout}
            className="font-bold hover:text-gray-400 cursor-pointer"
          >
            Logout
          </button>
        </div>
      </nav>

      
      <button
        className="fixed bottom-6 right-6 bg-blue-600 cursor-pointer text-white text-[50px] w-16 h-16 pb-3 rounded-full shadow-lg hover:bg-blue-700 flex items-center justify-center"
        onClick={handleShowForm}
      >
        +
      </button>

      
      {show ? (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-xl font-bold mb-4">
              {isEditing ? "Edit Todo" : "Add Todo"}
            </h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Todo Title"
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Todo Description"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              rows={3}
            />
            <button
              onClick={handleAddOrUpdateTodo}
              className="w-full bg-blue-600 text-white cursor-pointer p-2 rounded hover:bg-blue-700"
            >
              {isEditing ? "Update Todo" : "Add Todo"}
            </button>
          </div>
        </div>
      ): null}

      
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
        <div className="flex flex-col items-center mt-8 w-full">
          <h2 className="mb-4">Click the plus button by your right bottom to add Todo</h2>
          <ul className="w-[60%] space-y-2">
            {todos.map((item, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-lg shadow-md border"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-extrabold ">
                    {item.title.toUpperCase()}
                  </h3>
                  <div className="space-x-4">
                    <button
                      onClick={() => handleEdit(index)}
                      className="text-blue-600 font-bold cursor-pointer hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleSave(item, index)}
                      className="text-green-600 font-bold cursor-pointer hover:underline"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-600 font-bold cursor-pointer hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
