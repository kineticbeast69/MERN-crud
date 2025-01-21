import { MdUpdate } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
function Table() {
  const navigate = useNavigate();
  const deleteUser = () => {
    toast.error("User deleted sucessfully", {
      duration: 2000,
      style: { color: "white", backgroundColor: "gray" },
    });
  };
  return (
    <div className="relative w-[80%] overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-xl text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              User Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Action
            </th>
          </tr>
        </thead>

        {/* all the itration goes over here */}
        <tbody>
          <tr className="bg-blue-400 hover:bg-blue-500 transition-colors border-b border-blue-400">
            <td
              scope="row"
              className="px-4 py-3 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
            >
              Apple MacBook Pro 17"
            </td>
            <td className="px-4 py-3">Silver</td>
            <td className="px-4 py-3 flex items-center gap-2 justify-center">
              <div
                className="p-2 hover:bg-blue-300 rounded-lg"
                onClick={() => navigate("/update/asdada")}
              >
                <MdUpdate size={27} />
              </div>
              <div
                className="p-2 hover:bg-blue-300 rounded-lg"
                onClick={deleteUser}
              >
                <MdDeleteForever size={27} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Table;
