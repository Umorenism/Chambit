import { Link } from "react-router-dom";

export const Finalwithdrawal = () => {
  return (
    <div className="flex justify-center items-center bg-gray-950 text-white overflow-y-auto">
      <div className="w-full max-w-sm min-h-screen h-auto">
        <div className="bg-gray-950 py-3 fixed top-0 w-full left-0 right-0">
          <div className="text-center ">
            <div className="flex gap-4"></div>
            <button>Crypto</button>
            <button>Fiat</button>
          </div>
          <hr />
        </div>

        <div className="min-h-screen overflow-y-auto w-full max-w-sm h-auto mt-5">
          <div className="mt-4">
            <div className="flex items-center gap-1 p-2">
              <input type="checkbox" className="" />
              <span className="text-slate-400">
                Hide Zero balance yyyyyyyyyyyyyyyyyyyyyy
              </span>
            </div>
          </div>

          <div className=" p-2 cursor-pointer">
            <div className="flex mt-5 flex-col ">
              <Link to="/finalwithdrawal">
                <div className="flex items-center mb-4 gap-1">
                  <p className="w-5 h-5 rounded-full bg-blue-500 mb-4 flex justify-center items-center text-sm"></p>
                  <p>
                    <h2 className="text-sm text-slate-500"></h2>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
