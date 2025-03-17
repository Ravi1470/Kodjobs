import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (existingUsers.some((user) => user.username === username)) {
      alert("User already exists!");
      return;
    }

    const newUser = { username, password, dob, email, role: "user" };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    alert("Signup successful!");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zinc-900 to-gray-800 p-6 select-none">
      <div className="backdrop-blur-lg bg-zinc-900/80 border border-gray-700 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-200 mb-6">
          Create an Account
        </h2>
        <form
          onSubmit={handleSignup}
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
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-zinc-800/70 text-gray-200 placeholder-gray-400 rounded-lg border border-gray-700 focus:ring-2 focus:ring-gray-500 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
            <input
              type="date"
              className="w-full p-3 bg-zinc-800/70 text-gray-200 rounded-lg border border-gray-700 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
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
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-4">
          Already have an account?{" "}
          <span
            className="text-gray-300 cursor-pointer hover:underline"
            onClick={() => navigate("/")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
