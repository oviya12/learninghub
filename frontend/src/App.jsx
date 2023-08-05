import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <div className="relative flex flex-col h-screen justify-center items-center bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="absolute top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white text-6xl">
        <FontAwesomeIcon icon={faBook} />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-serif font-bold shadow-lg px-6 py-3 rounded-md border border-white text-center">
        Hi there, Welcome to Learning Hub
      </div>

      <a
        href="/mainpage"
        className="absolute bottom-44 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-indigo-600 hover:shadow-lg transition-all duration-300"
      >
        Get Started
      </a>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full text-white py-4 px-6 text-center">
        <p>© {new Date().getFullYear()} Learning Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}
