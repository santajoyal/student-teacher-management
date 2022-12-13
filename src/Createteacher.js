import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

function Createteacher() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      gender: "",
      subject: "",
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://6346c13f9eb7f8c0f884b683.mockapi.io/teachers",
          values
        );
        alert("Teacher Added Successfully");
        navigate("/teachers");
      } catch (error) {
        alert("error");
      }
    },
  });
  return (
    <div className="container">
      <div>
        <h3>Add Teachers Form</h3>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Name</label>
              <input
                type={"text"}
                className="form-control"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Age</label>
              <input
                type={"number"}
                className="form-control"
                name="age"
                onChange={formik.handleChange}
                value={formik.values.age}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Gender</label>
              <select
                className="form-control"
                name="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Transgender</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Subject</label>
              <select
                className="form-control"
                name="subject"
                onChange={formik.handleChange}
                value={formik.values.subject}
              >
                <option>Tamil</option>
                <option>English</option>
                <option>Maths</option>
                <option>Science</option>
                <option>Social Science</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input type={"submit"} className="btn btn-primary" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Createteacher;
