import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Book from "./pages/Book";
import Dashboard from "./pages/Dashboard";
import DetailBuku from "./pages/DetailBuku";
import EditBuku from "./pages/EditBuku";
import Login from "./pages/Login";
import TambahBuku from "./pages/TambahBuku";

const App = () => {
  const [userLogged, setUserLogged] = useState(
    JSON.parse(sessionStorage.getItem("user-info"))
  );
  useEffect(() => {
    sessionStorage.setItem("user-info", JSON.stringify(userLogged));
  }, [userLogged]);
  const logIn = () => setUserLogged(true);
  const logOut = () => setUserLogged(false);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
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
