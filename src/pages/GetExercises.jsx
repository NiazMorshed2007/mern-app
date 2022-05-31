import React, { useEffect, useState } from "react";
import axios from "axios";

const GetExercises = () => {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises")
      .then((res) => {
        const t_exercises = [];
        res.data.forEach((data) => {
          t_exercises.push(data);
        });
        setExercises(t_exercises);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main>
      <h1 className="text-3xl underline underline-offset-2 decoration-violet-500">
        List of exercises
      </h1>
      <div className="exercises-wrapper mt-7">
        {exercises.map((exercise, _) => (
          <div
            className="p-3 flex items-center justify-between shadow-md border border-gray-200 mb-4 rounded-lg"
            key={_}
          >
            <div>
              <p>
                <span className="text-indigo-500">Created by: </span>
                {exercise.username}
              </p>
              <p className="mt-2">
                <span className="text-violet-400">Description: </span>
                {exercise.description}
              </p>
            </div>
            <div className="flex gap-5">
              <p className="text-slate-500">Edit</p>
              <p className="text-red-500">Delete</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default GetExercises;
