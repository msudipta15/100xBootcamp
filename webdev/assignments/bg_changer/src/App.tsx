import { useState } from "react";
import "./App.css";

function App() {
  const [bg, setbg] = useState("bg-white");
  return (
    <div className={`w-full min-h-screen ${bg}`}>
      <div className="w-full fixed bottom-0 left-0 text-white ">
        <div className="flex w-full justify-center gap-10 p-10 ">
          <button
            onClick={() => setbg("bg-red-500")}
            className="py-2 px-5 rounded-md  bg-red-500 cursor-pointer "
          >
            Red
          </button>
          <button
            onClick={() => setbg("bg-yellow-300")}
            className="py-2 px-5 rounded-md  bg-yellow-300 cursor-pointer"
          >
            Yellow
          </button>
          <button
            onClick={() => setbg("bg-blue-500")}
            className="py-2 px-5 rounded-md  bg-blue-500 cursor-pointer"
          >
            Blue
          </button>
          <button
            onClick={() => setbg("bg-green-500")}
            className="py-2 px-5 rounded-md  bg-green-600 cursor-pointer"
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
