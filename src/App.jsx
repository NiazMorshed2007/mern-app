import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateUser from "./pages/Create.user";
import GetUsers from "./pages/Get.users";
import GetExercises from "./pages/GetExercises";
import CreateExercise from "./pages/Create.Exercises";

const App = () => {
  return (
    <Router>
      <main className="p-10 px-28">
        <NavBar />
        <Routes>
          <Route path="/" element={"Home page"} />
          <Route path="/users" element={<GetUsers />} />
          <Route path="/users/create" element={<CreateUser />} />
          <Route path="/exercises" element={<GetExercises />} />
          <Route path="/exercises/create" element={<CreateExercise />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
