import { MdUpdate, MdYoutubeSearchedFor } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import LoadingIcon from "./loading";
import axios from "axios";
import { useEffect, useState } from "react";
import Record from "./records";

function Table() {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasData, setHasData] = useState(false);
  const [change, setchange] = useState("no");
  //deleting the user info
  const deleteUser = async (id) => {
    setchange("yes");
    try {
      const response = await axios.delete(
        import.meta.env.VITE_BASE_URL + `/delete/${id}`
      );
      toast.success(response.data.message, {
        duration: 2000,
        style: { color: "white", backgroundColor: "gray" },
      });
    } catch (error) {
      if (error.response) {
        // console.log(error.response);
        toast.error(error.response.data.message, {
          duration: 2000,
          style: { color: "white", backgroundColor: "gray" },
        });
      }
    } finally {
      setchange("no");
    }
  };

  // getting all the data from the server
  useEffect(() => {
    //handling the data coming from server
    setLoading(true);
    const fetchAllData = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BASE_URL + "/read"
        );
        const data = response.data.getAllData;
        if (data.length == 0) {
          setLoading(false);
          setDatas([]);
          return;
        }
        setDatas(data);
      } catch (error) {
        setHasData(true);
        toast.error(error.response.data.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
    return () => fetchAllData;
  }, [change]);
  if (hasData) {
    return <Record />;
  } else {
    return (
      <div className="relative w-[80%] overflow-x-auto shadow-md rounded-lg">
        {loading ? (
          <LoadingIcon />
        ) : (
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
              {hasData
                ? "there is no data"
                : datas.map((data, index) => (
                    <tr
                      className="bg-blue-400 hover:bg-blue-500 transition-colors border-b border-blue-400"
                      key={index}
                    >
                      <td
                        scope="row"
                        className="px-4 py-3 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                      >
                        {data.username}
                      </td>
                      <td className="px-4 py-3">{data.email}</td>
                      <td className="px-4 py-3 flex items-center gap-2 justify-center">
                        <div
                          className="p-2 hover:bg-blue-300 rounded-lg"
                          onClick={() => navigate(`/update/${data._id}`)}
                        >
                          <MdUpdate size={27} />
                        </div>
                        <div
                          className="p-2 hover:bg-blue-300 rounded-lg"
                          onClick={() => deleteUser(data._id)}
                        >
                          <MdDeleteForever size={27} />
                        </div>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
export default Table;
