import React, { useEffect, useState } from "react";
import axios from "axios";

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        const t_users = [];
        res.data.forEach((data) => {
          t_users.push(data);
        });
        setUsers(t_users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main>
      <h1 className="text-3xl underline underline-offset-2 decoration-violet-500">
        List of users
      </h1>
      <div className="users-wrapper mt-7">
        {users.map((user, _) => (
          <div
            className="p-3 shadow-md border border-gray-200 mb-4 rounded-lg"
            key={_}
          >
            <p>{user.username}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default GetUsers;
