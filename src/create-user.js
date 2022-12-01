import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
function Createuser() {
  let navigate = useNavigate();
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
    validate: (values) => {
      let error = {};
      if (!values.username) {
        error.username = "Please enter your name";
      }
      if (values.username && (values.username.length <= 2 || values.username.length > 15)) {
        error.username = "Username must be between 3 to 15 Characters";
      }
      if (!values.email) {
        error.email = "Please enter your email";
      }
      if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        error.email = "Invalid email address";
      }
      if (!values.phone) {
        error.phone = "Please enter your PhoneNumber";
      }
      if (values.phone && values.phone.toString().length !== 10) {
        error.phone = "Invalid PhoneNumber";
      }
        
      var age = new Date().getFullYear() - parseInt(values.dob.split("-")[0])
      if (!values.dob) {
        error.dob = "Please select your Date of Birth";
      }
      if (values.dob && age < 18) {
        error.dob = "Only allow in 18";
      }
      if (!values.country) {
        error.country = "Please select your country";
      }
      if (!values.state) {
        error.state = "Please select your state";
      }
      if (!values.city) {
        error.city = "Please select your city";
      }
      if (!values.gender) {
        error.gender = "Please select your gender";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        const userData = await axios.post(
          "https://63873d31e399d2e473f90617.mockapi.io/User",
          values
        );
        alert("User added Successfully");
        navigate("/list-users");
        formik.resetForm ();
      } catch (error) {
        alert("Error");
      }
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                type={"text"}
                className={`form-control ${
                  formik.touched.username && formik.errors.username ? "error-box" : "null"
                } ${
                  formik.touched.username && !formik.errors.username
                    ? "success-box"
                    : "null"
                }`}
              />
              {formik.errors.username ? (
                <span style={{ color: "red" }}>{formik.errors.username}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type={"email"}
                className={`form-control ${
                  formik.touched.email && formik.errors.email ? "error-box" : "null"
                } ${
                  formik.touched.email && !formik.errors.email
                    ? "success-box"
                    : "null"
                }`}
              />
              {formik.errors.email ? (
                <span style={{ color: "red" }}>{formik.errors.email}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Country</label>
              <select
                name="country"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
                className={`form-control ${
                  formik.touched.country && formik.errors.country ? "error-box" : "null"
                } ${
                  formik.touched.country && !formik.errors.country
                    ? "success-box"
                    : "null"
                } `}
              >
                <option value={""}></option>
                <option>India</option>
                <option>USA</option>
              </select>
              {formik.errors.country ? (
                <span style={{ color: "red" }}>{formik.errors.country}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>State</label>
              <select
                name="state"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.state}
                className={`form-control ${
                  formik.touched.state && formik.errors.state ? "error-box" : "null"
                } ${
                  formik.touched.state && !formik.errors.state
                    ? "success-box"
                    : "null"
                } `}
              >
                <option value={""}></option>
                <option>Tamilnadu</option>
                <option>Kerala</option>
              </select>
              {formik.errors.state ? (
                <span style={{ color: "red" }}>{formik.errors.state}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>City</label>
              <select
                name="city"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
                className={`form-control ${
                  formik.touched.city && formik.errors.city ? "error-box" : "null"
                } ${
                  formik.touched.city && !formik.errors.city
                    ? "success-box"
                    : "null"
                } `}
              >
                <option value={""}></option>
                <option>Chennai</option>
                <option>Paramakudi</option>
              </select>
              {formik.errors.city ? (
                <span style={{ color: "red" }}>{formik.errors.city}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Phone</label>
              <input
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                type={"number"}
                className={`form-control ${
                  formik.touched.phone && formik.errors.phone ? "error-box" : "null"
                } ${
                  formik.touched.phone && !formik.errors.phone
                    ? "success-box"
                    : "null"
                }`}
              />
              {formik.errors.phone ? (
                <span style={{ color: "red" }}>{formik.errors.phone}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Dath of Birth</label>
              <input
                name="dob"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
                type={"date"}
                min ={"1992-01-01"}
                max = {"2004-01-01"}
                className={`form-control ${
                  formik.touched.dob && formik.errors.dob ? "error-box" : "null"
                } ${
                  formik.touched.dob && !formik.errors.dob
                    ? "success-box"
                    : "null"
                }`}
              />
              {formik.errors.dob ? (
                <span style={{ color: "red" }}>{formik.errors.dob}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Gender</label>
              <select
                name="gender"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.gender}
                className={`form-control ${
                  formik.touched.gender && formik.errors.gender ? "error-box" : "null"
                } ${
                  formik.touched.gender && !formik.errors.gender
                    ? "success-box"
                    : "null"
                } `}
              >
                <option value={""}></option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              {formik.errors.gender ? (
                <span style={{ color: "red" }}>{formik.errors.gender}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <input type={"submit"} className="btn btn-primary" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Createuser;
