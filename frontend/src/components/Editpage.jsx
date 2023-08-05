import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function ShowMore() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [titleEdit, setTitleEdit] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8000/getNote/${id}`).then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  }, [id]);

  function updateDatabase() {
    if (titleEdit) {
      axios
        .put(`http://localhost:8000/updateNote/${id}`, {
          title: title,
          content: content,
        })
        .then((res) => console.log(res));
      
    }
  }

  return (
    <div className="container flex flex-col p-5">
      <a
        className="w-fit text-white h-10 px-5 py-2 bg-indigo-500 hover:bg-indigo-600 hover:shadow-lg transition-all duration-300 rounded m-10"
        href="/Displaypage"
      >
        Go Back
      </a>
      <div className="flex">
      </div>
      
      {titleEdit ? (
        <>
          <input
            type="text"
            className="text-5xl font-bold mt-5 mb-3 border border-black rounded p-3"
            name="notes-title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            rows={10}
            cols={40}
            className="text-2xl border border-black rounded p-3"
            name="notes-content"
            placeholder="Type your content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex items-center justify-center ">
            <button
              onClick={() => {
                setTitleEdit(!titleEdit);
                updateDatabase();
              }}
              className=" text-white h-10 px-5 py-2 bg-indigo-500 hover:bg-indigo-600 hover:shadow-lg transition-all duration-300 rounded p-2"
            >
              Submit
            </button>
          </div>{" "}
        </>
      ) : (
        <>
          <h1 className="text-5xl font-bold mt-5 mb-3">{title}</h1>
          <p className="text-2xl">{content}</p>
        </>
      )}
    </div>
  );
}
