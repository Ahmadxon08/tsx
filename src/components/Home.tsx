/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { Users } from "./../types/Users.type";
import { Button, Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./Home.scss";
import { IoPersonAddSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([] as Users[]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:400/users");
      const data = await res?.data;
      console.log(data);

      setUsers(data);
    } catch (error: unknown) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:400/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="head">
          <h1>Users</h1>
          <Link to={"/add"} className="btn btn-primary">
            <IoPersonAddSharp fontSize={28} size={22} />
          </Link>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Usename</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user,) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td className="d-flex gap-2">
                  <Link
                    to={`./edit/${user.id}`}
                    className="btn d-flex justify-item-center align-center btn-sm btn-warning text-white"
                  >
                    <FaEdit size={22} />
                  </Link>
                  <Button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-sm btn-danger text-white"
                  >
                    <MdDelete size={22} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
