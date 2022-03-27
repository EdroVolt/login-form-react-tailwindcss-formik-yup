import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

export default function Login() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const errors = {};

  const validateInput = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;

    switch (inputName) {
      case "name":
        !value.length && (errors.name = "required");
        break;

      case "email":
        if (!value.length) errors.email = "required";
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
          errors.email = "please enter valid email";
        else delete errors.inputName;
        break;

      case "userName":
        if (!value.length) errors.userName = "required";
        else if (!/^\S*$/.test(value)) errors.userName = "spaces not allowed";
        break;

      case "password":
        if (!value.length) errors.password = "required";
        else if (
          !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/.test(value)
        )
          errors.password =
            "contains at least one lowercase, one uppercase, at least one digit and special character";
        else if (!value.length >= 8)
          errors.password = "should contains at least 8 characters";
        break;

      case "confirmPassword":
        if (!value.length) errors.confirmPassword = "required";
        else if (value === userInfo.password)
          errors.confirmPassword = "password dosen't match";
        break;

      default:
        break;
    }
  };

  const onChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <div className="container m-auto max-w-lg">
      <div className="md:mt-10 m-2 sm:mt-0">
        <form onSubmit={onSubmit}>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              {/* start: name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ahmed Edrees"
                  autoComplete="Ahmed Edrees"
                  value={userInfo.name}
                  onChange={onChange}
                  // onBlur={formik.handleBlur}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {/* {formik.errors.email && formik.touched.email && (
                  <div style={{ color: "red" }}>{formik.errors.email}</div>
                )} */}
              </div>

              {/* start: email */}
              <div className="mt-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="test@test.com"
                  autoComplete="given-name"
                  value={userInfo.email}
                  onChange={onChange}
                  // onBlur={formik.handleBlur}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {/* {formik.errors.email && formik.touched.email && (
                  <div style={{ color: "red" }}>{formik.errors.email}</div>
                )} */}
              </div>

              {/* start: userName */}
              <div className="mt-5">
                <label
                  htmlFor="userName"
                  className="block text-sm font-medium text-gray-700"
                >
                  userName
                </label>
                <input
                  type="text"
                  name="userName"
                  placeholder="EdroVolt"
                  id="userName"
                  value={userInfo.userName}
                  onChange={onChange}
                  // onBlur={formik.handleBlur}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {/* {formik.errors.password && formik.touched.password && (
                  <div style={{ color: "red" }}>{formik.errors.password}</div>
                )} */}
              </div>

              {/* start: password */}
              <div className="mt-5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  id="password"
                  value={userInfo.password}
                  onChange={onChange}
                  // onBlur={formik.handleBlur}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {/* {formik.errors.password && formik.touched.password && (
                  <div style={{ color: "red" }}>{formik.errors.password}</div>
                )} */}
              </div>

              {/* start: confirmPassword */}
              <div className="mt-5">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  confirmPassword
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="********"
                  id="confirmPassword"
                  value={userInfo.confirmPassword}
                  onChange={onChange}
                  // onBlur={formik.handleBlur}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {/* {formik.errors.password && formik.touched.password && (
                  <div style={{ color: "red" }}>{formik.errors.password}</div>
                )} */}
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 sm:px-6">
              <button
                type="submit"
                className="py-2 px-4 min-w-full border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
