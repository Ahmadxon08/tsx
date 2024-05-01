/* eslint-disable @typescript-eslint/no-unused-vars */
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TextField } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { Button } from "react-bootstrap";
import "./Edit.scss";
import { Users } from "../../types/Users.type";

const Edit = () => {
  const { id } = useParams();
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
        errors.name = "Name cannot be empty";
      }
      if (values.username === "") {
        errors.username = "Username cannot be empty";
      }
      if (values.email === "") {
        errors.email = "Email cannot be empty";
      }
      if (values.phone === "") {
        errors.phone = "Phone cannot be empty";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.put(`http://localhost:400/users/${id}`, values);
        navigate("/");
      } catch (error) {
        console.error("Error updating user:", error);
      }
    },
  });

  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    formik;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:400/users/${id}`);
        formik.setValues(res.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [id]);
  return (
    <div className="container">
      <div className="head">
        <Link
          className="btn d-flex align-items-center gap-2 btn-md btn-primary fs-25 text-white"
          to={"/"}
        >
          {" "}
          <IoArrowBack size={22} />
          Back
        </Link>
        <h1>Welcome to edit user' info Section</h1>
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

export default Edit;
