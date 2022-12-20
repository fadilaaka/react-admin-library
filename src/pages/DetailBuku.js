import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DetailBuku = () => {
  const { idBuku } = useParams();
  const [detailBuku, setDetailBuku] = useState();

  const url = "http://localhost:5000";

  useEffect(() => {
    getAPIDetailBuku();
  }, []);

  const getAPIDetailBuku = async () => {
    const res = await axios.get(`${url}/v1/api/detail-buku/${idBuku}`);
    setDetailBuku(res.data.book);
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="mx-auto my-10 bg-gray-100 p-5 rounded-lg">
        <h1>{detailBuku && detailBuku.title}</h1>
        <img
          src={`http://localhost:5000/${detailBuku && detailBuku.imageUrl}`}
          alt="Cover Detail Buku"
        />
        <p>Penerbit : {detailBuku && detailBuku.author}</p>
        <p>ISBN : {detailBuku && detailBuku.isbn}</p>
        <p>Halaman : {detailBuku && detailBuku.isbn}</p>
      </div>
    </div>
  );
};

export default DetailBuku;
