import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Teacher() {
  const [userdata, setUserdata] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchdata();
  }, []);

  let fetchdata = async () => {
    try {
      setLoading(true);
      const users = await axios.get(
        "https://6346c13f9eb7f8c0f884b683.mockapi.io/teachers"
      );
      console.log(users);
      setUserdata(users.data);
      setLoading(false);
    } catch (error) {
      alert("error");
    }
  };

  let deleteteacher = async (id) => {
    try {
      await axios.delete(
        `https://6346c13f9eb7f8c0f884b683.mockapi.io/teachers/${id}`
      );
      alert("Teacher is deleted")
    } catch (error) {
      alert("error");
    }
  };

  return (
    <div class="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-2 text-gray-800">Teachers List</h1>
        <Link
          to={"/create-teacher"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-clipboard-list fa-x text-gray-300"></i> Add
          Teacher
        </Link>
      </div>

      {loading ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Teachers Details</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Subject</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Subject</th>
                    <th>Actions</th>
                  </tr>
                </tfoot>
                <tbody>
                  {userdata.map((data) => {
                    return (
                      <tr>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.gender}</td>
                        <td>{data.age}</td>
                        <td>{data.subject}</td>
                        <td>
                          <Link to={`/view-teacher/${data.id}`} className="btn btn-primary m-1">view</Link>
                          <Link to={`/edit-teacher/${data.id}`} className="btn btn-info m-1">Edit</Link>
                          <button
                            onClick={() => {
                              deleteteacher(data.id);
                            }}
                            className="btn btn-danger m-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Teacher;
