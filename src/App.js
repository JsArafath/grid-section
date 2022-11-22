import "./App.css";
import img from "./image/Vector.png";
import img1 from "./image/coolicon.png";

function App() {
  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <div className=" rounded-lg lg:max-w-lg shadow-xl colorrrrrr">
        {/* ----------Image-------- */}
        <div className="flex flex-wrap justify-center px-10 pt-5">
          <div className="w-6/12 sm:w-4/12 px-4">
            <img
              src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
              alt="..."
              className="shadow rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>
        {/* ------------percent----------- */}
        <div>
          <p className="color-1 text-gray-900 bg-white font-bold inline text-xs py-1 px-2  rounded-lg my-1 absolute top-1 left-2">
            80% Match
          </p>
        </div>

        <div className="card-body items-center text-center">
          <h2 className="card-title text-white">Anamika</h2>
          <p className="text-white">Age : 28 </p>
          <p className="text-white">Dhaka , Bangladesh </p>
          <div className="card-actions justify-end pt-5 gap-10">
            <button className="btn bg-white rounded-full ">
              <img src={img} alt="" />
            </button>
            <button className="btn bg-white rounded-full">
              <img src={img1} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className=" rounded-lg lg:max-w-lg shadow-xl colorrrrrr">
        {/* ----------Image-------- */}
        <div className="flex flex-wrap justify-center px-10 pt-5">
          <div className="w-6/12 sm:w-4/12 px-4">
            <img
              src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
              alt="..."
              className="shadow rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>
        {/* ------------percent----------- */}
        <div>
          <p className="color-1 text-gray-900 bg-white font-bold inline text-xs py-1 px-4  rounded-lg my-1 absolute top-1  ">
            80% Match
          </p>
        </div>

        <div className="card-body items-center text-center">
          <h2 className="card-title text-white">Anamika</h2>
          <p className="text-white">Age : 28 </p>
          <p className="text-white">Dhaka , Bangladesh </p>
          <div className="card-actions justify-end pt-5 gap-10">
            <button className="btn bg-white rounded-full ">
              <img src={img} alt="" />
            </button>
            <button className="btn bg-white rounded-full">
              <img src={img1} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className=" rounded-lg lg:max-w-lg shadow-xl colorrrrrr">
        {/* ----------Image-------- */}
        <div className="flex flex-wrap justify-center px-10 pt-5">
          <div className="w-6/12 sm:w-4/12 px-4">
            <img
              src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
              alt="..."
              className="shadow rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>
        {/* ------------percent----------- */}
        <div>
          <p className="color-1 text-gray-900 bg-white font-bold inline text-xs py-1 px-2  rounded-lg my-1 absolute top-1 ">
            80% Match
          </p>
        </div>

        <div className="card-body items-center text-center">
          <h2 className="card-title text-white">Anamika</h2>
          <p className="text-white">Age : 28 </p>
          <p className="text-white">Dhaka , Bangladesh </p>
          <div className="card-actions justify-end pt-5 gap-10">
            <button className="btn bg-white rounded-full ">
              <img src={img} alt="" />
            </button>
            <button className="btn bg-white rounded-full">
              <img src={img1} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
