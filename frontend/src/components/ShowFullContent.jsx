import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBook  } from "@fortawesome/free-solid-svg-icons";

export default function ShowFullContent() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8000/getNote/${id}`).then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  }, [id]);

  return (<div classname=" p-10 gap-5 flex flex-col h-full w-full text-white font-serif shadow-lg">
  <header className="flex items-center justify-between mb-8">
        <div className="flex items-center m-3">
          <FontAwesomeIcon icon={faBook} className="text-3xl text-white" />
          <h1 className="text-3xl font-bold text-white ml-2">Learning Hub</h1>
        </div>
        <a
          className="text-white h-10 px-5 py-2 bg-indigo-500 hover:bg-indigo-600 hover:shadow-lg transition-all duration-300 rounded m-2"
          href="/Displaypage"
        >
          Go Back
        </a>
      </header>
    <div className="flex flex-col gap-7 relative h-fit w-fit m-10">
        
      <div className="p-2 bg-gray-200 rounded shadow-md ">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">{title}</h1>
      </div>
      <div className="p-10 bg-gray-200 rounded shadow-md">
        <p className="text-lg text-slate-900">{content}</p>
      </div>
    </div> </div>
  );
}
