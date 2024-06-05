import { Link } from "react-router-dom";
import { useState } from "react";
function Singup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Singup</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          placeholder="username"
          className="my-2 bg-slate-100 rounded-lg p-3"
          onChange={handleChange}
        />
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
          {loading ? "Loading..." : "Singup"}
        </button>
      </form>
      <div className="mt-4 flex gap-2">
        <p>Already have an account..?</p>
        <Link to="/sign-in">
          <span className="text-blue-500 cursor-pointer">Sing in</span>
        </Link>
      </div>
      <p className="text-red-500"> {error && "Something went wrong"}</p>
    </div>
  );
}

export default Singup;
