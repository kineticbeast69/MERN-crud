import { data, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
function UpdatePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const updateSubmit = (data) => {
    console.log(data);
  };
  const [username, setUsername] = useState("shubham tiwari");
  const [email, setEmail] = useState("abc.test@gamil.com");
  return (
    <>
      <div className="text-center text-4xl font-semibold mb-5">
        Update Operations
      </div>
      <Link to="/" className="ml-4">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Back
        </button>
      </Link>
      <div className="w-full  flex  justify-center">
        <form
          onSubmit={handleSubmit(updateSubmit)}
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
              defaultValue={username}
              onChange={(e) => setUsername(e.target.value)}
              id="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="username"
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

          {/* email validation is here */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              type="email"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
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

          <button
            type="submit"
            className="self-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
}
export default UpdatePage;
