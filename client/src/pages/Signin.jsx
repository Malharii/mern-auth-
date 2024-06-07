import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Singin() {
  const [formData, setFormData] = useState({});
  const { error, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sing In </h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          placeholder="email"
          className="my-2 bg-slate-100 rounded-lg p-3"
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          onChange={handleChange}
          className="my-2 bg-slate-100 rounded-lg p-3"
        />
        <button
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-slate-600 uppercase
        hover:text-white font-bold py-2 px-4 rounded"
        >
          {loading ? "Loading..." : "Singin"}
        </button>
      </form>
      <div className="mt-4 flex gap-2">
        <p>Don&apos;t have an account ?</p>
        <Link to="/sign-up">
          <span className="text-blue-500 cursor-pointer">Sing Up</span>
        </Link>
      </div>
      <p className="text-red-500">
        {error ? error.message || "Something went wrong" : ""}
      </p>
    </div>
  );
}

export default Singin;
