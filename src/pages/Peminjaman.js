import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

const Peminjaman = () => {
  return (
    <div className="flex bg-slate-800">
      <Sidebar />
      <div className="container mx-auto p-10">

        
        <div class="mb-4 border-b rounded-t-lg border-gray-200 dark:border-gray-700 bg-white">
            <ul class="flex flex-wrap  text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <li class="mr-2 w-full" role="presentation">
                    <button class="inline-block p-4 rounded-t-lg w-full border-b-2" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Peminjaman</button>
                </li>

                <div class="container my-12 py-12 mx-auto px-4 md:px-6 lg:px-12">
                    <section class="mb-20 text-gray-800">
                    <div class="block rounded-lg shadow-lg bg-white">
                        <div class="flex flex-col">
                            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full sm:px-6 lg:px-8">
                                    <div class="overflow-hidden">
                                        <table class="min-w-full mb-0">
                                            <thead class="border-b rounded-t-lg text-left">
                                                <tr class="border-b bg-gray-100">
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
                                                <tr>
                                                    <th class="text-sm font-medium px-6 py-4 whitespace-nowrap text-left" scope="row">1</th>
                                                    <td class="text-sm font-normal px-6 py-4 whitespace-nowrap text-left text-gray-500">12/12/2022</td>
                                                    <td class="text-sm font-normal px-6 py-4 whitespace-nowrap text-left text-gray-500">12/16/2022</td>
                                                    <td class="text-sm font-normal px-6 py-4 whitespace-nowrap text-left text-gray-500">Elsa</td>
                                                    <td class="text-sm font-normal px-6 py-4 whitespace-nowrap text-left text-gray-500">Matahari</td>
                                                    <td class="text-sm font-normal px-6 py-4 whitespace-nowrap text-left text-gray-500">belum dikonfirmasi</td>
                                                    <td class="text-sm font-normal px-6 py-4 whitespace-nowrap text-right">
                                                        <a href="#!" class="font-medium mr-2 text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out">Approve</a>
                                                        <a href="#!" class="font-medium mr-2 text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out">Reject</a>
                                                        <a href="#!" class="font-medium mr-2 text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out">Delete</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>
                </div>
                    </ul>
                </div>
    
        
      </div>
    </div>
  );
};

export default Peminjaman;
