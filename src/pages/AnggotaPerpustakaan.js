import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPenSquare, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";

const AnggotaPerpustakaan = () => {
  const [dataAnggota, setDataAnggota] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalConfirmDelete, setModalConfirmDelete] = useState(false);

  // const url = "http://localhost:5000";
  const url = "https://incredible-complete-soybean.glitch.me";

  useEffect(() => {
    setLoading(true);
    getApiViewAnggota();
    setDeleted(false);
  }, [deleted]);

  const getApiViewAnggota = async () => {
    const result = await axios.get(`${url}/v1/api/anggota-perpus`);
    console.log(result);
    setDataAnggota(result.data.anggota);
    setLoading(false);
  };

  const deleteAnggota = (idAnggota) => {
    axios
      .post(`${url}/v1/api/delete-anggota-perpus/${idAnggota}`)
      .then((res) => {
        console.log(res);
        setDeleted(true);
        setModalConfirmDelete(false);
      })
      .catch((err) => console.log(err));
  };

  const [selectedId, setSelectedId] = useState();
  const [selectedTitle, setSelectedTitle] = useState();
  const openModal = (id, title) => {
    setSelectedId(id);
    setSelectedTitle(title);
    setModalConfirmDelete(true);
  };

  const closeModal = () => {
    setModalConfirmDelete(false);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="overflow-hidden border rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                >
                  No
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                >
                  Kode
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                >
                  Nama
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                >
                  No.Telp
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                >
                  Alamat
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <Loading />
              ) : (
                dataAnggota &&
                dataAnggota.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      <span>{item.code}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      <span>{item.name}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      <span>{item.telp}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      <span>{item.alamat}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      <Link to={`/edit-anggota/${item._id}`}>
                        <button
                          type="button"
                          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                        >
                          <FaPenSquare />
                        </button>
                      </Link>
                      <button
                        type="button"
                        onClick={() => openModal(item._id, item.name)}
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        <FaTrashAlt />
                      </button>
                      <Modal
                        modal={modalConfirmDelete}
                        title={selectedTitle}
                        id={selectedId}
                        onClose={closeModal}
                        onDelete={deleteAnggota}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnggotaPerpustakaan;
