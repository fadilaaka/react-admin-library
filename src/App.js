import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Book from "./pages/Book";
import Dashboard from "./pages/Dashboard";
import DetailBuku from "./pages/DetailBuku";
import EditBuku from "./pages/EditBuku";
import Login from "./pages/Login";
import Peminjaman from "./pages/Peminjaman";
import TambahBuku from "./pages/TambahBuku";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("user-info")) {
      navigate("/login");
    }
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/peminjaman" element={<Peminjaman />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Rute ke Pengolahan Buku */}
      <Route path="/book" element={<Book />} />
      <Route path="/add-book" element={<TambahBuku />} />
      <Route path="/detail-buku/:idBuku" element={<DetailBuku />} />
      <Route path="/edit-buku/:idBuku" element={<EditBuku />} />
    </Routes>
  );
};

export default App;
