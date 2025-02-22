import { useNavigate, Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
function UpdatePage() {
  const navigate = useNavigate();
  const { userID } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // fetching the single user data from server
  useEffect(() => {
    //getting the single user data
    const fetchSingleUser = async () => {
      try {
        const response = await axios.get(
          //api calling for single user
          import.meta.env.VITE_BASE_URL + `/singleUser/${userID}`
        );
        const data = response.data.user;
        setUsername(data.username);
        setEmail(data.email);
      } catch (error) {
        if (error.response) {
          console.log(error.response);
          // error toasting
          toast.error(error.response.data.message, {
            duration: 2000,
            style: { color: "black", backgroundColor: "gray" },
          });
        }
      }
    };
    fetchSingleUser();
    return () => fetchSingleUser;
  }, [userID]);

  //function updating the data
  const updateSubmit = async (data) => {
    const { username, email } = data;
    try {
      const response = await axios.put(
        import.meta.env.VITE_BASE_URL + `/update/${userID}`,
        { username, email }
      );
      toast.success(response.data.message, {
        duration: 2000,
        style: { color: "white", backgroundColor: "gray" },
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        // console.log(error.response.data);
        toast.error(error.response.data.message, {
          duration: 2000,
          style: { color: "black", backgroundColor: "gray" },
        });
      }
    }
  };
  const [username, setUsername] = useState(""); //username state
  const [email, setEmail] = useState(""); //email state
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
