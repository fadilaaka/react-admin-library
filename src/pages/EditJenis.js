import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const EditJenisBuku = () => {
  const [jenis, setJenis] = useState("");
  const [status, setStatus] = useState();
  // const url = "http://localhost:5000";
  const url = "https://incredible-complete-soybean.glitch.me";
  const { id } = useParams();

  const submitData = (e) => {
    e.preventDefault();

    axios
      .post(`${url}/v1/api/edit-jenis/${id}`, {
        title: jenis,
      })
      .then((res) => {
        console.log(res);
        setStatus(res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDetailJenis = () => {
    axios
      .get(`${url}/v1/api/detail-jenis/${id}`)
      .then((res) => {
        console.log(res);
        setJenis(res.data.jenis.title);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetailJenis();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full px-6 py-4 my-auto mx-auto overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="title"
            id="title"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={jenis}
            onChange={(e) => setJenis(e.target.value)}
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Edit Jenis Buku
          </label>
        </div>

        <button
          onClick={(e) => submitData(e)}
          className="mr-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit
        </button>
        <Link
          to={"/jenis"}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Close
        </Link>
        {status === 201 ? (
          <div
            className="mx-auto fixed w-[25%] h-[10%] inset-0 flex items-center p-4 my-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
            role="alert"
          >
            <span className="font-medium">Berhasil edit jenis</span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default EditJenisBuku;
