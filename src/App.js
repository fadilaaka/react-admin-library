import React from "react";
import { Routes, Route } from "react-router-dom";
import Book from "./pages/Book";
import Dashboard from "./pages/Dashboard";
import DetailBuku from "./pages/DetailBuku";
import Login from "./pages/Login";
import TambahBuku from "./pages/TambahBuku";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />

      {/* Rute ke Pengolahan Buku */}
      <Route path="/book" element={<Book />} />
      <Route path="/add-book" element={<TambahBuku />} />
      <Route path="/detail-buku/:idBuku" element={<DetailBuku />} />
    </Routes>
  );
};

export default App;
