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

  const handleanswer = (index: number) => {
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

  const restart = () => {
    setcurrent(0);
    setscore(0);
    setshowresult(false);
  };

  return (
    <div>
      <div className="p-2 text-center bg-slate-800 text-white">
        <h1 className="text-3xl font-medium">Quiz Master V1</h1>
      </div>
      <div className="w-full h-screen bg-slate-700 text-white flex flex-col justify-center items-center px-10 sm:px-40">
        <div className=" p-5 w-full h-1/2  flex justify-center items-center  ">
          {showresult ? (
            <div className=" flex flex-col gap-8 h-full justify-center items-center ">
              <div className="text-3xl ">Your Score</div>
              <div className="text-5xl font-bold border p-4 rounded-4xl px-8">
                {score}/{questions.length}
              </div>
              <div>
                <button
                  onClick={() => restart()}
                  className="px-4 py-2 bg-blue-500 rounded-2xl text-white cursor-pointer hover:bg-blue-600"
                >
                  Restart
                </button>
              </div>
            </div>
          ) : (
            <div className="">
              <div className=" p-5 rounded-lg mb-8 text-xl font-medium bg-slate-800">
                <span className="font-bold">Q{current + 1}: </span>
                <span>{questions[current].question}</span>
              </div>
              <div className="flex flex-col gap-4">
                {questions[current].options.map((o, index) => (
                  <div
                    key={index}
                    className="w-full  p-2 border rounded-2xl hover:border-2 cursor-pointer"
                    onClick={() => handleanswer(index)}
                  >
                    <span>
                      {index + 1}: {o}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
