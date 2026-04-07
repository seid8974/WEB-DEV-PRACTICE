import React from "react";
import { useState, useEffect } from "react";
import { CanceledError } from "../services/api-client";
import userService, { type User } from "../services/user-service";
import useUsers from "../hooks/useUsers";

const User = () => {
  // const [users, setUsers] = useState<User[]>([]);
  // const [error, setError] = useState("");
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   // const { request, cancel } = userService.getAllUsers();
  //   const { request, cancel } = userService.getAll<User[]>();
  //   request
  //     .then((res) => {
  //       setUsers(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       if (err instanceof CanceledError) return;
  //       setError(err.message);
  //       setLoading(false);
  //     });
  //   return () => cancel;

  //   // const fetchUsers = async () => {
  //   //   try {
  //   //     const res = await axios.get<User[]>(
  //   //       "https://jsonplaceholder.typicode.com/users",
  //   //     );
  //   //     setUsers(res.data);
  //   //   } catch (err) {
  //   //     setError((err as AxiosError).message);
  //   //   }
  //   // };

  //   // fetchUsers();
  // }, []);


 const { users, error, isLoading, setUsers, setError } = useUsers();


  const handleDeleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    // userService.deleteUser(user.id).catch((err) => {
    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const handleAddUser = () => {
    const originalUser = [...users];
    const newUser = {
      id: 0,
      name: "seid",
    };
    // setUsers([newUser, ...users]);
    setUsers((prevUsers) => [newUser, ...prevUsers]);

    userService
      // .createUser(newUser)
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      // .then(({ data: savedUser }) =>
      //   setUsers((prevUsers) => [savedUser, ...prevUsers]),
      // )
      // .then(({ data: savedUser }) =>
      //   setUsers((prevUsers) =>
      //     prevUsers.map((u) => (u.id === newUser.id ? savedUser : u)),
      //   ),
      // )
      .catch((err) => {
        setError(err.message);
        setUsers(originalUser);
      });
  };

  const handleUpdateUser = (user: User) => {
    const originalUser = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    // userService.updateUser(updatedUser).catch((err) => {
    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUser);
    });
  };

  return (
    <>
      {error && <p className="text-danger"> {error} </p>}
      {isLoading && <div className="spinner-border"></div>}

      <button
        className="btn btn-primary mb-3 mt-3 ms-5"
        onClick={handleAddUser}
      >
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-2"
                onClick={() => handleUpdateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDeleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default User;
