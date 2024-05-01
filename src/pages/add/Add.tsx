/* eslint-disable @typescript-eslint/no-unused-vars */
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import "./Add.scss";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Users } from "../../types/Users.type";
import axios from "axios";
import { useFormik } from "formik";
import { Button } from "react-bootstrap";

const Add = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      phone: "",
      address: "",
    },
    validate(values) {
      const errors: Partial<Users> = {};
      if (values.name === "") {
        errors.name == " Name cannot be empty or empty";
      }
      if (values.username === "") {
        errors.username == " Username cannot be empty or empty";
      }
      if (values.email === "") {
        errors.email == " Email cannot be empty or empty";
      }
      if (values.phone === "") {
        errors.phone == " Phone cannot be empty or empty";
      }
      return errors;
    },
    onSubmit: (values) => {
      navigate("/");
      console.log(values);
      addUsers();
    },
  });

  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    formik;

  const [, setUsers] = useState<Users[]>([]);

  const addUsers = async () => {
    if (values.name.length < 2 && values.username.length < 3) {
      try {
        const res = await axios.post(`http://localhost:400/users`, values);
        const data = await res.data;
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Name and username must be more than 2 characters");
    }
  };

  useEffect(() => {
    addUsers();
  }, []);

  return (
    <div className="container">
      <div className="head">
        <Link
          className="btn d-flex align-items-center gap-2 btn-md btn-primary fs-25 text-white"
          to={"/"}
        >
      
          <IoArrowBack size={22} />
          Back
        </Link>
        <h1>Welcome to add user' info Section</h1>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="form">
          <h1>User's information</h1>
          <TextField
            id="name"
            name="name"
            label="Name"
            type="text"
            variant="standard"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
            style={{
              width: "70%",
              marginTop: "20px",
            }}
          />
          <span className="err">
            {touched.name && errors.name && errors.name}
          </span>
          <TextField
            id="username"
            name="username"
            label="User Name"
            type="text"
            variant="standard"
            onBlur={handleBlur}
            value={values.username}
            onChange={handleChange}
            style={{
              width: "70%",
              marginTop: "20px",
            }}
          />
          <span className="err">
            {touched.username && errors.username && errors.username}
          </span>
          <TextField
            id="email"
            name="email"
            label="Email"
            type="email"
            variant="standard"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            style={{
              width: "70%",
              marginTop: "20px",
            }}
          />
          <span className="err">
            {touched.email && errors.email && errors.email}
          </span>
          <TextField
            id="phone"
            name="phone"
            label="Phone Number"
            type="number"
            variant="standard"
            onBlur={handleBlur}
            value={values.phone}
            onChange={handleChange}
            style={{
              width: "70%",
              marginTop: "20px",
              fontSize: "20px",
            }}
          />
          <span className="err">
            {touched.phone && errors.phone && errors.phone}
          </span>
        </div>
        <div className="footer">
          <Link className="btn btn-lg btn-secondary" to={"/"}>
            Cancel
          </Link>
          <Button type="submit" className="btn btn-lg btn-primary">
            Save{" "}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Add;
