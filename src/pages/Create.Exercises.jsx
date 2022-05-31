import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateExercise = () => {
  const [data, setData] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
  });
  const { username, description, duration, date } = data;
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:5000/exercises/add", data)
      .then(() => {
        console.log("Exercise added");
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/exercises");
  };
  return (
    <div>
      <h1 className="text-3xl underline underline-offset-2 decoration-indigo-500">
        Create Exercise
      </h1>
      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            required
            className=" w-96 p-1 outline-none border border-gray-300 rounded-md px-4"
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            placeholder={"Enter username"}
          />
        </div>
        <div className="mb-3">
          <textarea
            required
            className=" w-96 p-1 outline-none border border-gray-300 rounded-md px-4"
            type="text"
            name="description"
            id="description"
            onChange={handleChange}
            placeholder={"Enter description"}
          />
        </div>
        <div className="mb-3">
          <input
            className=" w-96 p-1 outline-none border border-gray-300 rounded-md px-4"
            type="number"
            name="duration"
            id="duration"
            onChange={handleChange}
            placeholder={"Enter duration"}
          />
        </div>
        <div className="mb-3">
          <input
            required
            className=" w-96 p-1 outline-none border border-gray-300 rounded-md px-4"
            type="date"
            name="date"
            id="date"
            onChange={handleChange}
          />
        </div>

        <button className="mt-5 p-2 rounded-3xl px-4 bg-violet-600 text-white">
          Create Exercise
        </button>
      </form>
    </div>
  );
};
export default CreateExercise;
