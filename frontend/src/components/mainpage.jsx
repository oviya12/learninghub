import { useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faBook  } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  
  function handleSubmit(event) {
    event.preventDefault();
  
    if (title && content) {
      let formData = {
        title: title,
        content: content,
      };
  
      axios
        .post("http://localhost:8000/addNote", formData)
        .then((res) => console.log(res));

       setTitle("");
       setContent("");
       setShowPopup(true); 
    } else {
      alert("Please add some content!!");
    }
  }
  
  function handleTitleChange(event) {
    let text = event.target.value;
    setTitle(text);
  }

  function handleContentChange(event) {
    let content = event.target.value;
    setContent(content);
  }

  return (
    <div>
      <div className="p-10 gap-5 flex flex-col h-full w-full text-white font-serif shadow-lg">
        <header className="flex items-center justify-between mb-4">
        <div className="flex items-center">
            <FontAwesomeIcon icon={faBook} className="text-3xl text-white" />
            <h1 className="text-3xl font-bold text-white ml-2">Learning Hub</h1>
          </div>
          <a
            href="/Displaypage"
            className="text-white px-4 py-2 bg-indigo-500 hover:bg-indigo-600 hover:shadow-lg transition-all duration-300 rounded"
          >
            View posted Articles
          </a>
        </header>
        <form className="flex gap-2 items-center justify-center" onSubmit={handleSubmit}>
          <div className="input-fields w-full flex flex-col gap-3">
            <label htmlFor="notes-title" className="text-lg">Title :</label>
            <input
              type="text"
              className="rounded p-2 w-80 bg-slate-700 text-slate-50"
              name="notes-title"
              id="notes-title"
              placeholder="Type your title here..."
              onChange={handleTitleChange}
              value={title}
            />

            <label htmlFor="notes-content" className="text-lg">Content :</label>
            <textarea
              rows={15}
              cols={20}
              className="rounded p-2 bg-slate-700 text-slate-50"
              name="notes-content"
              id="notes-content"
              placeholder="Type your content here..."
              onChange={handleContentChange}
              value={content}
            />
            <div className="flex items-center justify-center">
              <button className="text-white h-10 px-5 py-2 bg-indigo-500 hover:bg-indigo-600 hover:shadow-lg transition-all duration-300 rounded">
                Submit
              </button>
            </div>
          </div>
        </form>

        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg flex flex-col items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500 text-4xl mb-4"
              />
              <p className="text-xl text-slate-800 font-bold mb-2">
                Thank you for submitting the article!
              </p>
              <p className="text-xl text-slate-800 font-bold mb-4">
                You can now view your article By clicking "View  Posted Article" on top right corner
              </p>
              <button
                className="w-fit h-10 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                onClick={() => setShowPopup(false)}
              >
                Okay
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
