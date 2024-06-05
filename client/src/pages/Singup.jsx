import { Link } from "react-router-dom";

function Singup() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Singup</h1>
      <form className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="username"
          className="my-2 bg-slate-100 rounded-lg p-3"
        />
        <input
          type="email"
          placeholder="email"
          className="my-2 bg-slate-100 rounded-lg p-3"
        />
        <input
          type="password"
          placeholder="password"
          className="my-2 bg-slate-100 rounded-lg p-3"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-slate-600 uppercase
        hover:text-white font-bold py-2 px-4 rounded"
        >
          Sing up
        </button>
      </form>
      <div className="mt-4 flex gap-2">
        <p>Already have an account..?</p>
        <Link to="/sign-in">
          <span className="text-blue-500 cursor-pointer">Sing in</span>
        </Link>
      </div>
    </div>
  );
}

export default Singup;
