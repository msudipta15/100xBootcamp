import "./App.css";

function App() {
  return (
    <div>
      <div className="p-2 text-center">
        <h1 className="text-3xl font-medium">Quiz Master V1</h1>
      </div>
      <div className="w-full h-screen bg-amber-50 flex flex-col justify-center items-center px-10 sm:px-40">
        <div className="bg-amber-200 p-5 w-full h-1/2 ">
          <div className="bg-blue-200 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            voluptatibus, ea soluta quisquam eveniet qui numquam explicabo
            officia illum blanditiis iste quia animi magnam, sint atque tempore
            necessitatibus corrupti quidem.
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full bg-yellow-300 p-2">
              <button>option 1</button>
            </div>
            <div>
              <button>option 1</button>
            </div>
            <div>
              <button>option 1</button>
            </div>
          </div>
          <div>buttons</div>
        </div>
      </div>
    </div>
  );
}

export default App;
