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
        <h1 className="font-bold text-center my-5 text-lg">
          {detailBuku && detailBuku.title}
        </h1>
        <img
          className="h-80 mx-auto mb-5"
          src={`${url}/${detailBuku && detailBuku.imageUrl}`}
          alt="Cover Detail Buku"
        />
        <p>Kategori Buku : {detailBuku && detailBuku.idKategori.title}</p>
        <p>Jenis Buku : {detailBuku && detailBuku.idKategori.idJenis.title}</p>
        <p>Penulis : {detailBuku && detailBuku.author}</p>
        <p>Penerbit : {detailBuku && detailBuku.publisher}</p>
        <p>
          Tanggal Terbit : {detailBuku && detailBuku.publishDate.split("T")[0]}
        </p>
        <p>ISBN : {detailBuku && detailBuku.isbn}</p>
        <p>Halaman : {detailBuku && detailBuku.pageCount}</p>
        <p className="w-96 mx-auto">{detailBuku && detailBuku.description}</p>
      </div>
    </div>
  );
};

export default DetailBuku;
