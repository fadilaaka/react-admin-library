import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const EditBuku = () => {
  const { idBuku } = useParams();
  const [detailBuku, setDetailBuku] = useState();
  const [dataKategori, setDataKategori] = useState([]);
  const [judul, setJudul] = useState("");
  const [penulis, setPenulis] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [isbn, setIsbn] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [description, setDescription] = useState("");
  const [idKategori, setIdKategori] = useState("");
  const [file, setFile] = useState();

  const url = "http://localhost:5000";

  useEffect(() => {
    getAPIJenisKategori();
    getAPIDetailBuku();
  }, []);

  const getAPIDetailBuku = async () => {
    const res = await axios.get(`${url}/v1/api/detail-buku/${idBuku}`);
    setDetailBuku(res.data.book);
    setJudul(res.data.book.title);
    setPenulis(res.data.book.author);
    setPenerbit(res.data.book.publisher);
    setTanggal(res.data.book.publishDate.split("T")[0]);
    setIsbn(res.data.book.isbn);
    setJumlah(res.data.book.pageCount);
    setDescription(res.data.book.description);
    setIdKategori(res.data.book.idKategori.title);
  };

  const getAPIJenisKategori = async () => {
    const result = await axios.get(`${url}/v1/api/jenis-kategori`);
    console.log(result);
    setDataKategori(result.data);
  };

  const fileImageSelected = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const submitData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", judul);
    formData.append("author", penulis);
    formData.append("publisher", penerbit);
    formData.append("publishDate", tanggal);
    formData.append("isbn", isbn);
    formData.append("pageCount", jumlah);
    formData.append("description", description);
    formData.append("idKategori", idKategori);

    axios
      .post(`${url}/v1/api/edit-buku/${idBuku}`, formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full px-6 py-4 mt-6 mx-auto overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
        <form onSubmit={(e) => submitData(e)}>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="updateTitle"
              id="updateTitle"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Judul Buku
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="updateAuthor"
              id="updateAuthor"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={penulis}
              onChange={(e) => setPenulis(e.target.value)}
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Penulis
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="updatePublisher"
              id="updatePublisher"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={penerbit}
              onChange={(e) => setPenerbit(e.target.value)}
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Penerbit Buku
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="date"
              name="UpdatePublishDate"
              id="UpdatePublishDate"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Tanggal Terbit
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="updateIsbn"
              id="updateIsbn"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              ISBN
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <label className="block mb-2 text-sm text-gray-500">
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="image"
              name="image"
              type="file"
              onChange={(e) => fileImageSelected(e)}
            />
            <span>{detailBuku && detailBuku.imageUrl}</span>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="number"
              name="updatePageCount"
              id="updatePageCount"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={jumlah}
              onChange={(e) => setJumlah(e.target.value)}
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Jumlah Halaman
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <label className="block mb-2 text-sm font-medium text-gray-500">
              Deskripsi
            </label>
            <textarea
              id="updateDescription"
              name="updateDescription"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <label className="block mb-2 text-sm font-medium text-gray-500">
              Jenis & Kategori Buku
            </label>
            <select
              className="border border-black rounded"
              name="updateIdKategori"
              id="updateIdKategori"
              value={idKategori}
              onChange={(e) => setIdKategori(e.target.value)}
            >
              <option value={idKategori}>
                {detailBuku && detailBuku.idKategori.title}
              </option>
              <option value="">--- Kategori Buku ---</option>
              {dataKategori.jenis &&
                dataKategori.jenis.map((item, index) => {
                  return (
                    <optgroup key={index} label={`${item.title}`}>
                      {item.idKategori.map((kategori, index) => {
                        return (
                          <option key={index} value={`${kategori._id}`}>
                            {kategori.title}
                          </option>
                        );
                      })}
                    </optgroup>
                  );
                })}
            </select>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBuku;
