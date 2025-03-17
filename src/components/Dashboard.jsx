import { useEffect, useState } from "react";
import JobList from "./JobList";
import { TbLogout } from "react-icons/tb";

export default function Dashboard() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://www.themuse.com/api/public/jobs?category=Software%20Engineering&page=1&descending=false"
    )
      .then((res) => res.json())
      .then((data) => {
        setList(data?.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-zinc-900 to-gray-800 text-gray-200">
      <div className="w-full flex justify-between items-center p-4 rounded-2xl">
        {/* Logo / Branding */}
        <h1 className="text-2xl font-extrabold text-white">
          Welcome to{" "}
          <span className="text-yellow-400">
            Kod<span className="text-zinc-600">jobs</span>
          </span>
        </h1>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition flex items-center gap-2 font-medium cursor-pointer">
          Logout
        </button>
      </div>

      <div className="mt-6">
        {loading ? (
          <p className="text-center text-gray-400">Loading</p>
        ) : (
          <JobList list={list} />
        )}
      </div>
    </div>
  );
}
