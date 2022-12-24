import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Tabs from "../components/Tabs";
import axios from "axios";
import { FaCheck, FaPenSquare, FaTrashAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const ViewJenis = () => {
  const [dataJenis, setDataJenis] = useState([]);
  const [modal, setModal] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [status, setStatus] = useState();
  // const url = "http://localhost:5000";
  const url = "https://incredible-complete-soybean.glitch.me";

  useEffect(() => {
    getApiViewJenis();
    setDeleted(false);
  }, [deleted]);

  const getApiViewJenis = () => {
    axios
      .get(`${url}/v1/api/jenis-kategori`)
      .then((result) => {
        console.log(result);
        setDataJenis(result.data.jenis);
      })
      .catch((error) => console.log(error));
  };
  console.log("ini jenis:", dataJenis);

  const deleteJenis = (idJenis) => {
    axios
      .post(`${url}/v1/api/delete-jenis/${idJenis}`)
      .then((res) => {
        console.log(res);
        setDeleted(true);
        setModal(false);
        setStatus(res.status);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col">
        <Tabs />

        <Link to={"/add-jenis"}>
          <button
            type="button"
            className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Tambah Jenis Buku
          </button>
        </Link>

        <div className="p-1.5 w-full inline-block align-middle">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  No.
                </th>
                <th scope="col" className="py-3 px-6">
                  Jenis Buku
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {dataJenis &&
                dataJenis.map((item, index) => (
                  <tr key={index} className="border-b-2">
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {index + 1}
                    </td>
                    <td class="text-sm font-normal px-6 py-4 whitespace-nowrap text-left text-gray-500">
                      {item.title}
                    </td>
                    <td class="text-sm font-normal px-6 py-4 whitespace-nowrap text-right">
                      <Link to={`/edit-jenis/${item._id}`}>
                        <button
                          type="button"
                          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-2.5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                        >
                          <FaPenSquare />
                        </button>
                      </Link>

                      <button
                        type="button"
                        onClick={() => setModal(true)}
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-2.5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        <FaTrashAlt />
                      </button>

                      {modal && (
                        <div
                          className="mx-auto fixed w-[30%] h-[15%] inset-0 items-center p-4 my-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
                          role="alert"
                        >
                          <span className="font-medium">
                            Apakah Anda yakin ingin menghapus jenis ini?
                          </span>
                          <div class="my-3">
                            <button
                              type="button"
                              onClick={() => deleteJenis(item._id)}
                              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm w-1/5 px-1.5 py-1.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                            >
                              Ya
                            </button>
                            <button
                              type="button"
                              onClick={() => setModal(false)}
                              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm w-1/5 px-1.5 py-1.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            >
                              Tidak
                            </button>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          {status === 201 ? (
            <div
              className="mx-auto fixed w-[25%] h-[10%] inset-0 flex items-center p-4 my-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
              role="alert"
            >
              <span className="font-medium">Berhasil menghapus jenis</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewJenis;
