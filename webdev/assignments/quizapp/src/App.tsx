import { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JSON XML",
      "JavaScript Extension",
    ],
    answer: 0,
  },
  {
    question: "Which hook is used for state in React?",
    options: ["useData", "useState", "useEffect", "useRef"],
    answer: 1,
  },
  {
    question: "React is mainly used for building ____",
    options: ["Databases", "User Interfaces", "Servers", "APIs"],
    answer: 1,
  },
];

function App() {
  const [current, setcurrent] = useState(0);
  const [score, setscore] = useState(0);
  const [showresult, setshowresult] = useState(false);

  const handleanswer = (index) => {
    if (index == questions[current].answer) {
      setscore((s) => s + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setcurrent(next);
    } else {
      setshowresult(true);
    }
  };

  return (
    <div>
      <div className="p-2 text-center">
        <h1 className="text-3xl font-medium">Quiz Master V1</h1>
      </div>
      <div className="w-full h-screen bg-amber-50 flex flex-col justify-center items-center px-10 sm:px-40">
        <div className="bg-amber-200 p-5 w-full h-1/2  ">
          {showresult ? (
            <div className=" flex flex-col gap-4 h-full justify-center items-center ">
              <div className="text-3xl font-bold">Your Score</div>
              <div className="text-5xl">
                {score}/{questions.length}
              </div>
              <div>
                <button className="px-4 py-2 bg-blue-500 rounded-2xl text-white">
                  Restart
                </button>
              </div>
            </div>
          ) : (
            <div className="">
              <div className="bg-blue-200 p-2 mb-2 text-lg font-medium">
                <span className="font-bold">Q{current}: </span>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores voluptatibus, ea soluta quisquam eveniet qui
                  numquam explicabo officia illum blanditiis iste quia animi
                  magnam, sint atque tempore necessitatibus corrupti quidem.
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-full bg-yellow-300 p-2">
                  <button>option 1</button>
                </div>
                <div className="w-full bg-yellow-300 p-2">
                  <button>option 1</button>
                </div>
                <div className="w-full bg-yellow-300 p-2">
                  <button>option 1</button>
                </div>
                <div className="w-full bg-yellow-300 p-2">
                  <button>option 1</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
