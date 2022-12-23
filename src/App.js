import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Book from "./pages/Book";
import Dashboard from "./pages/Dashboard";
import DetailBuku from "./pages/DetailBuku";
import EditBuku from "./pages/EditBuku";
import Login from "./pages/Login";
import Peminjaman from "./pages/Peminjaman";
import Pengembalian from "./pages/Pengembalian";
import TambahBuku from "./pages/TambahBuku";
import AnggotaPerpustakaan from "./pages/AnggotaPerpustakaan";
import ViewJenis from "./pages/ViewJenis";
import ViewKategori from "./pages/ViewKategori";
import TambahJenisBuku from "./pages/TambahJenisBuku";
import EditJenisBuku from "./pages/EditJenis";
import TambahKategoriBuku from "./pages/TambahKategori";
import EditKategoriBuku from "./pages/EditKategori";

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
      <Route path="/pengembalian" element={<Pengembalian />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/anggota" element={<AnggotaPerpustakaan/>} />

      {/* Rute ke Pengolahan Buku */}
      <Route path="/book" element={<Book />} />
      <Route path="/add-book" element={<TambahBuku />} />
      <Route path="/detail-buku/:idBuku" element={<DetailBuku />} />
      <Route path="/edit-buku/:idBuku" element={<EditBuku />} />

      {/* Rute ke pengolahan jenis*/}
      <Route path="/jenis" element={<ViewJenis/>} />
      <Route path="/add-jenis" element={<TambahJenisBuku/>} />
      <Route path="/edit-jenis/:id" element={<EditJenisBuku/>} />


      {/* Rute ke pengolahan kategori*/}
      <Route path="/kategori" element={<ViewKategori/>} />
      <Route path="/add-kategori" element={<TambahKategoriBuku/>} />
      <Route path="/edit-kategori/:id" element={<EditKategoriBuku/>} />
      

    </Routes>
  );
};

export default App;
