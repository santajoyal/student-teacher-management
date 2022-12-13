import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Createstudent() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      rollnumber:"",  
      name: "",
      age: "",
      gender: "",
      class: "",
      grade:"",
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://6346c13f9eb7f8c0f884b683.mockapi.io/students",
          values
        );
        alert("student Added Successfully");
        navigate("/students");
      } catch (error) {
        alert("error");
      }
    },
  });
  return (
    <div className="container">
    <div>
      <h3>Add Students Form</h3>
    </div>
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
      <div className="col-lg-4">
          <div className="form-group">
            <label>Roll Number</label>
            <input
              type={"number"}
              className="form-control"
              name="rollnumber"
              onChange={formik.handleChange}
              value={formik.values.rollnumber}
            />
          </div>
        </div>
        <div className="col-lg-4">
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
        <div className="col-lg-4">
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
        <div className="col-lg-4">
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
        <div className="col-lg-4">
          <div className="form-group">
            <label>Class</label>
            <select
              className="form-control"
              name="class"
              onChange={formik.handleChange}
              value={formik.values.class}
            >
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>Grade</label>
            <select
              className="form-control"
              name="grade"
              onChange={formik.handleChange}
              value={formik.values.grade}
            >
              <option>A+</option>
              <option>A</option>
              <option>B+</option>
              <option>B</option>
              <option>C</option> 
              <option>D</option> 
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
  )
}

export default Createstudent