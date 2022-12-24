import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { FaListUl, FaPenSquare, FaTrashAlt } from "react-icons/fa";
import Loading from "../components/Loading";
import Modal from "../components/Modal";

const Book = () => {
  const [dataBuku, setDataBuku] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalConfirmDelete, setModalConfirmDelete] = useState(false);

  // const url = "http://localhost:5000";
  const url = "https://incredible-complete-soybean.glitch.me";

  useEffect(() => {
    setLoading(true);
    getApiViewBook();
    setDeleted(false);
  }, [deleted]);

  const getApiViewBook = async () => {
    const result = await axios.get(`${url}/v1/api/book`);
    console.log(result);
    setDataBuku(result.data);
    setLoading(false);
  };

  const deleteBook = (idBuku) => {
    axios
      .post(`${url}/v1/api/delete-buku/${idBuku}`)
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
      <div className="container mx-auto mt-10 px-20">
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="py-3 pl-2">
              <Link to={"/add-book"}>
                <button
                  type="button"
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Tambah Buku
                </button>
              </Link>
              <div className="relative max-w-xs">
                <label htmlFor="hs-table-search" className="sr-only">
                  Search
                </label>
                <input
                  type="text"
                  name="hs-table-search"
                  id="hs-table-search"
                  className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  placeholder="Search..."
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <svg
                    className="h-3.5 w-3.5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="p-1.5 w-full inline-block align-middle">
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
                        Nama Buku
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                      >
                        Pengarang
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                      >
                        Jenis Buku
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                      >
                        Kategori Buku
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
                      dataBuku &&
                      dataBuku.map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            <span>{item.title}</span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            <span>{item.author}</span>
                          </td>
                          {item.idKategori.idJenis !== null ? (
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              <span>{item.idKategori.idJenis.title}</span>
                            </td>
                          ) : (
                            <td className="text-sm font-normal text-center px-6 py-4 whitespace-nowrap text-gray-500">
                              ----------
                            </td>
                          )}
                          {item.idKategori !== null ? (
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              <span>{item.idKategori.title}</span>
                            </td>
                          ) : (
                            <td className="text-sm font-normal text-center px-6 py-4 whitespace-nowrap text-gray-500">
                              ----------
                            </td>
                          )}
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            <Link to={`/detail-buku/${item._id}`}>
                              <button
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                              >
                                <FaListUl />
                              </button>
                            </Link>
                            <Link to={`/edit-buku/${item._id}`}>
                              <button
                                type="button"
                                className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                              >
                                <FaPenSquare />
                              </button>
                            </Link>
                            <button
                              type="button"
                              onClick={() => openModal(item._id, item.title)}
                              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            >
                              <FaTrashAlt />
                            </button>
                            <Modal
                              modal={modalConfirmDelete}
                              title={selectedTitle}
                              id={selectedId}
                              onClose={closeModal}
                              onDelete={deleteBook}
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
        </div>
      </div>
    </div>
  );
};

export default Book;
