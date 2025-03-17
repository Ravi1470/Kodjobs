import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zinc-900 to-gray-800 p-6 select-none">
      <div className="backdrop-blur-lg bg-zinc-900/80 border border-gray-700 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-200 mb-6">
          Login
        </h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form
          onSubmit={handleLogin}
          className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 bg-zinc-800/70 text-gray-200 placeholder-gray-400 rounded-lg border border-gray-700 focus:ring-2 focus:ring-gray-500 focus:outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-zinc-800/70 text-gray-200 placeholder-gray-400 rounded-lg border border-gray-700 focus:ring-2 focus:ring-gray-500 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-gray-600 text-white p-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition shadow-md">
            Login
          </button>
        </form>
        <p className="text-sm mt-4 text-center text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-gray-300 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
