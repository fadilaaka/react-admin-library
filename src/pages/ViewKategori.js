import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Tabs from "../components/Tabs";
import axios from "axios";
import { FaPenSquare, FaTrashAlt } from "react-icons/fa";
import Modal from "../components/Modal";

const ViewKategori = () => {
  const [dataKategori, setDataKategori] = useState([]);
  const [modal, setModal] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [status, setStatus] = useState();
  // const url = "http://localhost:5000";
  const url = "https://incredible-complete-soybean.glitch.me";

  useEffect(() => {
    getApiViewKategori();
    setDeleted(false);
  }, [deleted]);

  const getApiViewKategori = () => {
    axios
      .get(`${url}/v1/api/jenis-kategori`)
      .then((result) => {
        console.log(result);
        setDataKategori(result.data.kategori);
      })
      .catch((error) => console.log(error));
  };
  console.log("ini kategori:", dataKategori);

  const deleteKategori = (idKategori) => {
    axios
      .post(`${url}/v1/api/delete-kategori/${idKategori}`)
      .then((res) => {
        console.log(res);
        setDeleted(true);
        setModal(false);
        setStatus(res.status);
      })
      .catch((err) => console.log(err));
  };

  const [selectedId, setSelectedId] = useState();
  const [selectedTitle, setSelectedTitle] = useState();
  const openModal = (id, title) => {
    setSelectedId(id);
    setSelectedTitle(title);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col">
        <Tabs />

        <Link to={"/add-kategori"}>
          <button
            type="button"
            className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Tambah Kategori Buku
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
                  Kategori Buku
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
              {dataKategori &&
                dataKategori.map((item, index) => (
                  <tr key={index} className="border-b-2">
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {index + 1}
                    </td>
                    <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left text-gray-500">
                      {item.title}
                    </td>
                    {item.idJenis !== null ? (
                      <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left text-gray-500">
                        {item.idJenis.title}
                      </td>
                    ) : (
                      <td className="text-sm font-normal text-center px-6 py-4 whitespace-nowrap text-gray-500">
                        ----------
                      </td>
                    )}

                    <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-right">
                      <Link to={`/edit-kategori/${item._id}`}>
                        <button
                          type="button"
                          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-2.5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                        >
                          <FaPenSquare />
                        </button>
                      </Link>
                      <button
                        type="button"
                        onClick={() => openModal(item._id, item.title)}
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-2.5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                    <Modal
                      modal={modal}
                      title={selectedTitle}
                      id={selectedId}
                      onClose={closeModal}
                      onDelete={deleteKategori}
                    />
                  </tr>
                ))}
            </tbody>
          </table>
          {status === 201 ? (
            <div
              className="mx-auto fixed w-[25%] h-[10%] inset-0 flex items-center p-4 my-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
              role="alert"
            >
              <span className="font-medium">Berhasil menghapus kategori</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewKategori;
