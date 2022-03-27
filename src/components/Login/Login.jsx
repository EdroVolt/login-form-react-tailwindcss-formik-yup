import { useFormik } from "formik";
import * as yup from "yup";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup
      .string("")
      .email("please enter valid email")
      .required("email is required"),
    password: yup
      .string("")
      .min(8, "password must be at least 8 characters")
      .required("required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="container m-auto mt-56 max-w-lg">
      <div className="md:mt-10 m-2 sm:mt-0">
        <form onSubmit={formik.handleSubmit}>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div>
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
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {formik.errors.email && formik.touched.email && (
                  <div style={{ color: "red" }}>{formik.errors.email}</div>
                )}
              </div>

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
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {formik.errors.password && formik.touched.password && (
                  <div style={{ color: "red" }}>{formik.errors.password}</div>
                )}
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 sm:px-6">
              <button
                type="submit"
                className="py-2 px-4 min-w-full border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                LogIn
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
