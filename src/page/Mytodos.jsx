import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Mytodos = () => {
  const location = useLocation();
  const userData = location.state?.data?.user1;
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const fetchTodos = async () => {
    try {
      const response = await fetch(`https://todo-backend1-s4y6.onrender.com/Todolist/${userData._id}`);
      const data = await response.json();

      if (data.payload && Array.isArray(data.payload)) {
        setTodos(data.payload);
        const completedMap = {};
        data.payload.forEach((todo) => {
          completedMap[todo._id] = todo.status === true;
        });
        setCompletedTodos(completedMap);
      } else {
        setTodos([]);
        console.warn("No valid todo payload received:", data);
      }
    } catch (error) {
      console.error("Error fetching todos:", error);
      setTodos([]);
    }
  };

  const handleLogout = () => {
    alert("Logged out successfully");
    navigate("/", { replace: true });
  };

  const handleAddTodo = () => {
    alert("About to add Todos");
    navigate("/Dashboard", {
      state: { data: { user1: userData } },
    });
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://todo-backend1-s4y6.onrender.com/Todolist/${id}`, {
        method: "DELETE",
      });
      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
      alert("Todo deleted successfully");
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const toggleComplete = async (id) => {
    const newStatus = !completedTodos[id];
    try {
      const response = await fetch(`https://todo-backend1-s4y6.onrender.com/todo/status/${id}/${newStatus}`, {
        method: "PUT",
      });

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      setCompletedTodos((prev) => ({
        ...prev,
        [id]: newStatus,
      }));
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleProfile = () => {
    alert("No profile yet");
    
  };

 const handleDeleteAccount = async () => {
  const confirmDelete = window.confirm(
    "Are you sure you want to permanently delete your account?"
  );
  if (!confirmDelete) return;

  try {
    const response = await fetch(
      `https://todo-backend1-s4y6.onrender.com/DeleteAccount/${userData._id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.Message || "Failed to delete account");
    }

    alert("Your account has been permanently deleted.");
    navigate("/", { replace: true });
  } catch (error) {
    console.error("Error deleting account:", error);
    alert("Something went wrong while deleting the account.");
  }
};

  useEffect(() => {
    if (userData?._id) fetchTodos();
  }, []);

  return (
    <div>
      <nav className="flex justify-between items-center bg-blue-900 p-4 text-white relative">
  
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-blue-700 px-4 py-2 cursor-pointer rounded-md hover:bg-blue-600"
          >
            Menu
          </button>

          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-40 bg-white text-black rounded shadow-md z-10">
              <button
                onClick={handleProfile}
                className="block w-full text-left px-4 py-2 cursor-pointer font-bold hover: text-blue-700 bg-gray-100 "
              >
                Profile
              </button>
              <button
                onClick={handleDeleteAccount}
                className="block w-full text-left px-4 py-2 cursor-pointer font-bold hover:bg-gray-100 text-red-600"
              >
                Delete Account
              </button>
            </div>
          )}
        </div>


        <div className="relative">
          <div className="font-bold">
            {userData?.firstname
              ? `${userData.firstname[0].toUpperCase()} . ${userData.lastname.toUpperCase()}`
              : "No Name"}
          </div>
        </div>


        <div className="flex space-x-10">
          <button
            onClick={handleAddTodo}
            className="font-bold hover:text-gray-400 cursor-pointer"
          >
            Add Todo
          </button>
          <button
            onClick={handleLogout}
            className="font-bold hover:text-gray-400 cursor-pointer"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 flex justify-center">My Todos</h1>
        <div className="space-y-4">
          {Array.isArray(todos) && todos.length > 0 ? (
            todos.map((todo) => (
              <div
                key={todo._id}
                className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center w-[80%] mx-auto"
              >
                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    checked={completedTodos[todo._id] || false}
                    onChange={() => toggleComplete(todo._id)}
                    className="h-5 w-10 cursor-pointer"
                  />
                  <div>
                    <h2
                      className={`text-xl font-semibold ${
                        completedTodos[todo._id] ? "line-through text-gray-500" : ""
                      }`}
                    >
                      {todo.title}
                    </h2>
                    <p className="text-gray-700">{todo.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(todo._id)}
                  className="text-red-600 font-bold cursor-pointer hover:underline"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600 flex justify-center ">No todos found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mytodos;
