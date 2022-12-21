import React from "react";
import {
  FaHome,
  FaBookOpen,
  FaBook,
  FaAddressBook,
  FaRegCalendarAlt,
  FaClipboardCheck,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
      <div className="space-y-3">
        <div className="flex items-center">
          <h2 className="text-xl font-bold">Dashboard</h2>
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
              <Link
                to="/dashboard"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <FaHome size={25} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                to="/jenis"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <FaBookOpen size={25} />
                <span>Jenis dan Kategori</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                to="/book"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <FaBook size={25} />
                <span>List Buku</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                to="/anggota"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <FaAddressBook size={25} />
                <span>Anggota Perpustakaan</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                to="/peminjaman"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <FaRegCalendarAlt size={25} />
                <span>Peminjaman</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                to="/pengembalian"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <FaClipboardCheck size={25} />
                <span>Pengembalian</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <button
                onClick={() => logout()}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <FaSignOutAlt size={25} />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
