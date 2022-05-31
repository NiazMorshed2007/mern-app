import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users/add", { username })
      .then(() => {
        console.log("User added");
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/users");
  };
  return (
    <div>
      <h1 className="text-3xl underline underline-offset-2 decoration-indigo-500">
        Create User
      </h1>
      <form className="mt-5" onSubmit={handleSubmit}>
        <div>
          <input
            required
            className=" w-96 p-1 outline-none border border-gray-300 rounded-md px-4"
            value={username}
            type="text"
            onChange={handleChange}
            placeholder={"Enter username"}
          />
        </div>
        <button className="mt-5 p-2 rounded-3xl px-4 bg-violet-600 text-white">
          Create User
        </button>
      </form>
    </div>
  );
};
export default CreateUser;
