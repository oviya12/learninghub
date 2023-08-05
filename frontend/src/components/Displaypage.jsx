import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function NotesList() {
  const [notes, setNotes] = useState([]);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/getNote").then((res) => {
      const data = res.data;
      setNotes(data.reverse());
    });
  }, [notes]);

  function deleteItem(id) {
    axios
      .delete(`http://localhost:8000/deleteNote/${id}`)
      .then((res) => console.log(res));
  }

  function handleHamburgerMenu(id) {
    setSelectedNoteId(selectedNoteId === id ? null : id);
  }

  return (
    <div className="flex flex-col p-10 gap-5">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faBook} className="text-3xl text-white" />
          <h1 className="text-3xl font-bold text-white ml-2">Learning Hub</h1>
        </div>
        <a
          className="text-white h-10 px-5 py-2 bg-indigo-500 hover:bg-indigo-600 hover:shadow-lg transition-all duration-300 rounded"
          href="/mainpage"
        >
          Go Back
        </a>
      </header>

      <div className="flex flex-wrap justify-start">
        {notes.map((item) => (
          <li
            key={item._id}
            className="relative h-fit w-fit p-2 rounded-lg border border-black bg-slate-800 text-white m-3"
          >
            <FontAwesomeIcon
              icon={faEllipsisV}
              className="text-white cursor-pointer absolute top-2 right-2"
              onClick={() => handleHamburgerMenu(item._id)}
            />
            <div className=" h-fit w-fit p-5 rounded-lg bg-slate-800 text-white  ">
            {selectedNoteId === item._id && (
             <div className="absolute top-2 right-4 bg-gray-800 rounded-lg p-5 text-white z-10">
                <Link
                  to={`/Editpage/${item._id}`}
                  className="block py-1 hover:bg-gray-700"
                >
                  Edit
                </Link>
                <a
                  className="block py-1 hover:bg-gray-700 cursor-pointer"
                  onClick={() => deleteItem(item._id)}
                >
                  Remove
                </a>
                <Link
                  to={`/ShowFullContent/${item._id}`}
                  className="block py-1 hover:bg-gray-700"
                >
                  Show Full Content
                </Link>
              </div>
             
            )} </div>
            <div className="text-left content w-56">
              <h1 className="text-slate-300">{item.title}</h1>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
