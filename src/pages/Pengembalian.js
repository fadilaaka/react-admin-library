import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCheck, FaTrashAlt, FaRegCalendarAlt } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import Modal from "../components/Modal";

const Pengembalian = () => {
  const [detailPengembalian, setDetailPengembalian] = useState();
  const [deleted, setDeleted] = useState();
  const [modalConfirm, setModalConfirm] = useState(false);

  // const url = "http://localhost:5000";
  const url = "https://incredible-complete-soybean.glitch.me";

  useEffect(() => {
    getApiViewPengembalian();
    setDeleted(false);
  }, [deleted]);

  const getApiViewPengembalian = async () => {
    const result = await axios.get(`${url}/v1/api/pengembalian`);
    console.log(result);
    setDetailPengembalian(result.data);
  };

  const approvePengembalian = (idPengembalian) => {
    axios
      .post(`${url}/v1/api/approve-pengembalian/${idPengembalian}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const deletePengembalian = (idPengembalian) => {
    axios
      .post(`${url}/v1/api/delete-pengembalian/${idPengembalian}`)
      .then((res) => {
        console.log(res);
        setDeleted(true);
        setModalConfirm(false);
      })
      .catch((err) => console.log(err));
  };

  console.log(detailPengembalian);

  const [selectedId, setSelectedId] = useState();
  const [selectedTitle, setSelectedTitle] = useState();
  const openModal = (id, title) => {
    setSelectedId(id);
    setSelectedTitle(title);
    setModalConfirm(true);
  };

  const closeModal = () => {
    setModalConfirm(false);
  };

  return (
    <div className="flex bg-slate-800">
      <Sidebar />
      <div className="container mx-auto p-10">
        <div className="title mx-2 flex text-white font-semibold border-b-2 pb-4 text-2xl">
          <FaRegCalendarAlt />
          <h3 className="ml-2">Pengembalian</h3>
        </div>

        <div className="relative w-1/4 mx-2 mt-8 mb-5">
          <label htmlFor="hs-table-search" className="sr-only">
            Search
          </label>
          <input
            type="text"
            name="hs-table-search"
            id="hs-table-search"
            className="block w-full p-3 pl-10 text-sm bg-slate-100 focus:outline-slate-300 placeholder-slate-500 border-gray-200 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            placeholder="Search..."
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg
              className="h-3.5 w-3.5 text-slate-900"
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

        <div className="container pt-3 pb-5 mx-auto px-4 md:px-6 lg:px-2">
          <section className="mb-20 text-gray-800">
            <div className="block rounded-lg shadow-lg bg-white">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full mb-0">
                        <thead className="border-b rounded-t-lg text-center">
                          <tr className="border-b bg-gray-50">
                            <th
                              scope="col"
                              className="rounded-tl-lg text-sm font-medium px-6 py-4"
                            >
                              No
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium px-6 py-4"
                            >
                              Tanggal Peminjaman
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium px-6 py-4"
                            >
                              Tanggal Pengembalian
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium px-6 py-4"
                            >
                              Nama
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium px-6 py-4"
                            >
                              Buku
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium px-6 py-4"
                            >
                              Status
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium px-6 py-4"
                            >
                              Waktu Pengembalian
                            </th>
                            <th
                              scope="col"
                              className="rounded-tr-lg text-sm font-medium px-6 py-4"
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {detailPengembalian &&
                            detailPengembalian.pengembalian.map(
                              (item, index) => (
                                <tr key={index} className="border-b-2">
                                  <td className="px-6 py-4 text-sm text-center font-medium text-gray-800 whitespace-nowrap">
                                    {index + 1}
                                  </td>
                                  <td className="text-sm font-normal text-center px-6 py-4 whitespace-nowrap text-gray-500">
                                    {item.tanggalPeminjaman.split("T")[0]}
                                  </td>
                                  <td className="text-sm font-normal text-center px-6 py-4 whitespace-nowrap text-gray-500">
                                    {item.tanggalPengembalian.split("T")[0]}
                                  </td>
                                  {item.anggota !== null ? (
                                    <td className="text-sm font-normal text-center px-6 py-4 whitespace-nowrap text-gray-500">
                                      {item.anggota.name}
                                    </td>
                                  ) : (
                                    <td className="text-sm font-normal text-center px-6 py-4 whitespace-nowrap text-gray-500">
                                      ----------
                                    </td>
                                  )}
                                  {item.book !== null ? (
                                    <td className="text-sm font-normal text-center px-6 py-4 whitespace-nowrap text-gray-500">
                                      {item.book.title}
                                    </td>
                                  ) : (
                                    <td className="text-sm font-normal text-center px-6 py-4 whitespace-nowrap text-gray-500">
                                      ----------
                                    </td>
                                  )}
                                  <td className="text-sm font-normal text-center px-6 py-4 whitespace-nowrap text-gray-500">
                                    {item.status}
                                  </td>
                                  {item.waktuDikembalikan === null ? (
                                    <td className="text-sm text-center font-normal px-6 py-4 whitespace-nowrap text-gray-500">
                                      -----------
                                    </td>
                                  ) : (
                                    <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left text-gray-500">
                                      {item.waktuDikembalikan.split("T")[0]}{" "}
                                      {"/ "}
                                      {
                                        item.waktuDikembalikan
                                          .split("T")[1]
                                          .split(".")[0]
                                      }
                                    </td>
                                  )}
                                  <td className="text-sm font-normal text-center px-6 py-4 whitespace-nowrap">
                                    {item.status === "belum dikembalikan" ? (
                                      <>
                                        <button
                                          type="button"
                                          onClick={() =>
                                            approvePengembalian(item._id)
                                          }
                                          className="text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-2.5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                        >
                                          <FaCheck />
                                        </button>
                                      </>
                                    ) : (
                                      ""
                                    )}
                                    <button
                                      type="button"
                                      onClick={() =>
                                        openModal(
                                          item._id,
                                          item.tanggalPengembalian.split("T")[0]
                                        )
                                      }
                                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-2.5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                    >
                                      <FaTrashAlt />
                                    </button>
                                  </td>
                                  <Modal
                                    modal={modalConfirm}
                                    title={selectedTitle}
                                    id={selectedId}
                                    onClose={closeModal}
                                    onDelete={deletePengembalian}
                                  />
                                </tr>
                              )
                            )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Pengembalian;
