import React from "react";
import { FaAddressBook, FaBook, FaBookOpen, FaClipboardCheck, FaRegCalendarAlt } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex bg-slate-800">
      <Sidebar />
      <div className="container mx-auto p-10">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4">
          <div className="w-full px-4 py-5 m-2 bg-white rounded-lg shadow flex flex-row">
            <div className="left-section w-4/5">
              <div className="text-sm font-medium text-gray-500 truncate">
                Jenis Buku
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                450
              </div>
            </div>     
            <div className="right-section">
              <div className="icon w-14 p-3.5 bg-slate-900 text-white rounded-full mr-3 float-right">
                <FaBookOpen size={25} />
              </div>
            </div>  
          </div>

          <div className="w-full px-4 py-5 m-2 bg-white rounded-lg shadow flex flex-row">
            <div className="left-section w-4/5">
              <div className="text-sm font-medium text-gray-500 truncate">
                Kategori Buku
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                450
              </div>
            </div>     
            <div className="right-section">
              <div className="icon w-14 p-3.5 bg-slate-900 text-white rounded-full mr-3 float-right">
                <FaBookOpen size={25} />
              </div>
            </div>  
          </div>

          <div className="w-full px-4 py-5 m-2 bg-white rounded-lg shadow flex flex-row">
            <div className="left-section w-4/5">
              <div className="text-sm font-medium text-gray-500 truncate">
                List Buku
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                450
              </div>
            </div>     
            <div className="right-section">
              <div className="icon w-14 p-3.5 bg-slate-900 text-white rounded-full mr-3 float-right">
                <FaBook size={25} />
              </div>
            </div>  
          </div>

          <div className="w-full px-4 py-5 m-2 bg-white rounded-lg shadow flex flex-row">
            <div className="left-section w-4/5">
              <div className="text-sm font-medium text-gray-500 truncate">
                Anggota Perpustakaan
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                450
              </div>
            </div>     
            <div className="right-section">
              <div className="icon w-14 p-3.5 bg-slate-900 text-white rounded-full mr-3 float-right">
                <FaAddressBook size={25} />
              </div>
            </div>  
          </div>

          <div className="w-full px-4 py-5 m-2 bg-white rounded-lg shadow flex flex-row">
            <div className="left-section w-4/5">
              <div className="text-sm font-medium text-gray-500 truncate">
                Peminjaman
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                450
              </div>
            </div>     
            <div className="right-section">
              <div className="icon w-14 p-3.5 bg-slate-900 text-white rounded-full mr-3 float-right">
                <FaRegCalendarAlt size={25} />
              </div>
            </div>  
          </div>

          <div className="w-full px-4 py-5 m-2 bg-white rounded-lg shadow flex flex-row">
            <div className="left-section w-4/5">
              <div className="text-sm font-medium text-gray-500 truncate">
                Pengembalian
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                450
              </div>
            </div>     
            <div className="right-section">
              <div className="icon w-14 p-3.5 bg-slate-900 text-white rounded-full mr-3 float-right">
                <FaClipboardCheck size={25} />
              </div>
            </div>  
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
