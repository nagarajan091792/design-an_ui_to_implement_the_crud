import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
function ViewUser() {
  let navigate = useNavigate();
  let params = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  let fetchData = async () => {
    try {
      const users = await axios.get(
        `https://63873d31e399d2e473f90617.mockapi.io/User/${params.id}`
      );
      console.log(users);
      formik.setValues(users.data);
    } catch (error) {
      alert("error");
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      country: "",
      state: "",
      city: "",
      phone: "",
      dob: "",
      gender: "",
    },

    onSubmit: async () => {
      navigate("/list-users");
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Username</label>

              <input
                name="username"
                value={formik.values.username}
                type={"text"}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                value={formik.values.email}
                type={"email"}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Country</label>
              <select
                name="country"
                value={formik.values.country}
                className="form-control"
              >
                <option>India</option>
                <option>USA</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>State</label>
              <select
                name="state"
                value={formik.values.state}
                className="form-control"
              >
                <option>Tamilnadu</option>
                <option>Kerala</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>City</label>
              <select
                name="city"
                value={formik.values.city}
                className="form-control"
              >
                <option>Chennai</option>
                <option>Paramakudi</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Phone</label>
              <input
                name="phone"
                value={formik.values.phone}
                type={"number"}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Dath of Birth</label>
              <input
                name="dob"
                value={formik.values.dob}
                type={"date"}
                min={"1992-01-01"}
                max={"2004-01-01"}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Gender</label>
              <select
                name="gender"
                value={formik.values.gender}
                className="form-control"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <button type={"submit"} className="btn btn-primary">
                Go to UsersList
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ViewUser;
