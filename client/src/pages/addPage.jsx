import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
function AddPage() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const addSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="text-center text-4xl font-semibold mb-5">
        Create Operations
      </div>

      <Link to="/" className="ml-4">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Back
        </button>
      </Link>

      {/* form goes over here */}
      <div className="w-full  flex  justify-center">
        <form
          onSubmit={handleSubmit(addSubmit)} //submit function
          className="w-[50%] border border-gray-400 px-5 py-3 rounded-2xl shadow-2xl"
        >
          {/* username validation is here */}
          <div className="mb-5">
            <label
              htmlFor="text"
              className="block mb-2 text-lg font-medium text-gray-900 "
            >
              Your Name
            </label>
            <input
              type="text"
              id="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="username"
              maxLength={25}
              {...register("username", {
                required: "Username is required.",
                min: {
                  value: 5,
                  message: "Must have 5 characters.",
                },
                max: {
                  value: 25,
                  message: "Less than 25 characters.",
                },
                pattern: {
                  value: /^[a-zA-Z0-9 ]+$/,
                  message: "Username must have only alphabets and numbers. ",
                },
              })}
            />
            {errors.username && (
              <p className="text-red-500 last:text-sm italic">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* email validation field is here */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@test.com"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter valid email address.",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm italic">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* password validation field is here */}
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-lg font-medium text-gray-900 "
            >
              Your password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("password", {
                required: "Password is required.",
                min: {
                  value: 5,
                  message: "Password must have 5 characters.",
                },
                max: {
                  value: 8,
                  message: "Password must be less than 8 characters.",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                  message:
                    "Password atleast have one Uppercase,Lowercase & Special characters.",
                },
              })}
            />
            {errors.password && (
              <p className="text-sm text-red-500 italic">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                onClick={() => setShowPassword((prev) => !prev)}
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-500"
            >
              {showPassword ? "Hide" : "Show"} Password
            </label>
          </div>
          <button
            type="submit"
            className="self-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}
export default AddPage;
