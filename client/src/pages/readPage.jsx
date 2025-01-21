import Table from "../components/table";
import { Link } from "react-router-dom";
function ReadPage() {
  return (
    <div className="w-full h-[100dvh]  flex flex-col">
      <div className="text-4xl text-center my-5 text-red-500 font-sans font-bold hover:underline underline-offset-2 hover:text-red-600 transition-colors">
        CRUD operation
      </div>
      <Link to="/add" className="ml-4">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add project
        </button>
      </Link>
      <div className=" h-[100%] flex justify-center mt-4">
        <Table />
      </div>
    </div>
  );
}
export default ReadPage;
