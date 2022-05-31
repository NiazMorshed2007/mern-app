import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex mb-8 bg-slate-800 text-white p-5 rounded-lg items-center gap-7">
      <h1 className="text-lg text-indigo-600">CRUD APP</h1>
      <Link to={"/users"}>Users</Link>
      <Link to={"/users/create"}>Create User</Link>
      <Link to={"/exercises"}>Exercises</Link>
      <Link to={"exercises/create"}>Create Exercise</Link>
    </nav>
  );
};
export default NavBar;
