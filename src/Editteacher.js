import axios from 'axios'
import { Formik, useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Editteacher() {
   let params = useParams()
   let navigate = useNavigate()
   const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      gender: "",
      subject: "",
    },
    onSubmit: async (values) => {
      try {
        await axios.put(
          `https://6346c13f9eb7f8c0f884b683.mockapi.io/teachers/${params.id}`,
          values
        );
        alert("Updated Successfully");
        navigate("/teachers");
      } catch (error) {
        alert("error");
      }
    },
  });
   

  useEffect(()=>{
async function fetchdata(){
    try {
        let user = await axios.get(`https://6346c13f9eb7f8c0f884b683.mockapi.io/teachers/${params.id}`)
        formik.setValues(user.data)
    } catch (error) {
        console.log(error)
    }
}
fetchdata()
  },[])
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
              <input type={"submit"} className="btn btn-primary" value={"Updatae"}/>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Editteacher