import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCheck, FaTrashAlt, FaRegCalendarAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Sidebar from "../components/Sidebar";

const Peminjaman = () => {
  const [detailPeminjaman, setDetailPeminjaman] = useState();
    const [deleted, setDeleted] = useState();
    const [modalConfirm, setModalConfirm] = useState(false); 

  // const url = "http://localhost:5000";
  const url = "https://incredible-complete-soybean.glitch.me";

    useEffect(() => {
        getApiViewPeminjaman();
        setDeleted(false)
    }, [deleted]);

  const getApiViewPeminjaman = async () => {
    const result = await axios.get(`${url}/v1/api/peminjaman`);
    console.log(result);
    setDetailPeminjaman(result.data);
  };

    const deletePeminjaman = (idPeminjaman) => {
        axios
          .post(`${url}/v1/api/delete-peminjaman/${idPeminjaman}`)
          .then((res) => {
            console.log(res);
            setDeleted(true);
            setModalConfirm(false);
          })
          .catch((err) => console.log(err));
      };

    console.log(detailPeminjaman);

    return (
        <div className="flex bg-slate-800">
        <Sidebar />
        <div className="container mx-auto p-10">

                <div className="title mx-5 flex text-white font-semibold border-b-2 pb-4 text-2xl">
                        <FaRegCalendarAlt />
                        <h3 className="ml-2">Peminjaman</h3>
                    </div>
                    
                <div className="w-full">
                    <div className="relative mx-5 w-1/4 mt-8 mb-5">
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
                </div>


                <div class="container pt-3 pb-3 mx-auto px-4 md:px-6 lg:px-5">
                        <section class="mb-20 text-gray-800">
                        <div class="block rounded-lg shadow-lg bg-white">
                            <div class="flex flex-col">
                                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div class="inline-block min-w-full sm:px-6 lg:px-8">
                                        <div class="overflow-hidden">
                                            <table class="min-w-full mb-0">
                                            <thead class="border-b rounded-t-lg text-center">
                                                    <tr class="border-b bg-gray-50">
                                                        <th scope="col" class="rounded-tl-lg text-sm font-medium px-6 py-4">No</th>
                                                        <th scope="col" class="text-sm font-medium px-6 py-4">Tanggal Peminjaman</th>
                                                        <th scope="col" class="text-sm font-medium px-6 py-4">Tanggal Pengembalian</th>
                                                        <th scope="col" class="text-sm font-medium px-6 py-4">Nama</th>
                                                        <th scope="col" class="text-sm font-medium px-6 py-4">Buku</th>
                                                        <th scope="col" class="text-sm font-medium px-6 py-4">Status</th>
                                                        <th scope="col" class="rounded-tr-lg text-sm font-medium px-6 py-4">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {detailPeminjaman &&
                                                detailPeminjaman.peminjaman.map((item, index) => (
                                                    <tr key={index} className="border-b-2">
                                                    <td className="px-6 py-4 text-sm text-center font-medium text-gray-800 whitespace-nowrap">
                                                            {index + 1}
                                                        </td>
                                                    <td class="text-sm font-normal text-center px-6 py-4 whitespace-nowrap text-left text-gray-500">
                                                            {item.tanggalPeminjaman.split("T")[0]}
                                                        </td>
                                                    <td class="text-sm font-normal text-center px-6 py-4 whitespace-nowrap text-left text-gray-500">
                                                            {item.tanggalPengembalian.split("T")[0]}
                                                        </td>
                                                    <td class="text-sm font-normal text-center px-6 py-4 whitespace-nowrap text-left text-gray-500">
                                                            {item.anggota.name}
                                                        </td>
                                                    <td class="text-sm font-normal text-center px-6 py-4 whitespace-nowrap text-left text-gray-500">
                                                            {item.book.title}
                                                        </td>
                                                    <td class="text-sm font-normal text-center px-6 py-4 whitespace-nowrap text-left text-gray-500">
                                                           {item.status}
                                                        </td>
                                                    <td class="text-sm font-normal text-center px-6 py-4 whitespace-nowrap text-right">
                                                            <button
                                                                type="button"
                                                                className="text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-2.5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                                                <FaCheck />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-2.5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">
                                                                <ImCross />
                                                            </button>
                                                            <button
                                                                type="button"
                                                            onClick={() => setModalConfirm(true)}
                                                                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-2.5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                                                <FaTrashAlt />
                                                            </button>
                                                        </td>
                                                    {modalConfirm == true ? (
                                            <div
                                                    className="mx-auto fixed w-[30%] h-[15%] inset-0 text-center p-4 mb-4 text-sm text-gray-700 bg-gray-300 rounded-b-lg dark:bg-gray-700 dark:text-gray-300"
                                                role="alert"
                                            >
                                                <span className="font-medium">Apakah Anda yakin ingin menghapus peminjaman ini?</span>
                                                <div class="my-3">
                                                    <button
                                                        type="button"
                                                            onClick={() => deletePeminjaman(item._id)}
                                                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm w-1/5 px-1.5 py-1.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                                        Ya
                                                    </button>
                                                    <button
                                                        type="button"
                                                            onClick={() => setModalConfirm(false)}
                                                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm w-1/5 px-1.5 py-1.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                                        Tidak
                                                    </button>
                                                </div>                    
                                            </div>
                                                ) : "" }
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

export default Peminjaman;
