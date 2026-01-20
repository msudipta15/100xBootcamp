import "./App.css";

function App() {
  return (
    <>
      <div className="w-full fixed bottom-0 left-0 text-white">
        <div className="flex w-full justify-center gap-10 mb-10">
          <button className="py-2 px-5 rounded-md border bg-red-500">
            red
          </button>
          <button className="py-2 px-5 rounded-md border bg-yellow-300">
            yellow
          </button>
          <button className="py-2 px-5 rounded-md border bg-blue-500">
            blue
          </button>
          <button className="py-2 px-5 rounded-md border bg-green-600">
            green
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
