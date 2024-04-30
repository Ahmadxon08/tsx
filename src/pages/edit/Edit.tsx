import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
// import { TextField } from "@mui/material";
import "./Edit.scss";

const Edit = () => {
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
        <h1>Welcome to add user' info Section</h1>
      </div>

      <div className="form">
        <h1>User's information</h1>
        <TextField
          id="filled-basic"
          label="Name"
          variant="standard"
          style={{
            width: "70%",
            marginTop: "20px",
          }}
        />
        <TextField
          id="filled-basic"
          label="User Name"
          variant="standard"
          style={{
            width: "70%",
            marginTop: "20px",
          }}
        />
        <TextField
          id="filled-basic"
          label="Email"
          variant="standard"
          style={{
            width: "70%",
            marginTop: "20px",
          }}
        />
        <TextField
          id="filled-basic"
          label="Phone Number"
          variant="standard"
          style={{
            width: "70%",
            marginTop: "20px",
            fontSize: "20px",
          }}
        />
      </div>
      <div className="footer">
        <Link className="btn btn-lg btn-secondary" to={"/"}>
          Cancel
        </Link>
        <Link className="btn btn-lg btn-primary" to={"/"}>
          Save
        </Link>
      </div>
    </div>
  );
};

export default Edit;
