import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const JobCard = ({ job, index }) => {
  if (!job) return null;

  const gradients = [
    "from-indigo-500 to-cyan-500",
    "from-rose-500 to-amber-500",
    "from-emerald-500 to-lime-500",
    "from-orange-500 to-red-500",
    "from-fuchsia-500 to-violet-500",
  ];

  const gradientClass = gradients[index % gradients.length];

  return (
    <div className="relative bg-opacity-80 backdrop-blur-lg border border-zinc-700 rounded-2xl shadow-lg w-full max-w-lg mx-auto p-6 hover:shadow-2xl transition-all duration-300 bg-zinc-800 flex flex-col justify-around">
      {/* Gradient Border Accent */}
      <div
        className={`absolute top-0 left-0 right-0 w-full h-3 px-1 rounded-t-3xl bg-gradient-to-r ${gradientClass}`}
      />

      {/* Header: Company & Location */}
      <div className="flex items-center gap-4 pb-4 border-b border-zinc-700 mb-4">
        <div
          className={`w-12 h-12  rounded-full flex items-center justify-center  bg-gradient-to-r ${gradientClass}`}>
          <span className="text-white font-bold text-lg ">
            {job.company.name.charAt(0)}
          </span>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-white">
            {job.company.name}
          </h2>
          <div className="text-sm text-gray-400 flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-500" />
            <span>{job.locations[0]?.name || "Remote"}</span>
          </div>
        </div>
      </div>

      {/* Job Title */}
      <h3 className="text-2xl font-semibold text-white mb-2">{job.name}</h3>

      {/* Job Level */}
      {job.levels && job.levels.length > 0 && (
        <p className="text-sm text-gray-300 mb-2">
          <span className="text-gray-400 font-semibold">Level:</span>{" "}
          {job.levels.map((level) => level.name).join(", ")}
        </p>
      )}

      {/* Job Tags */}
      {job.tags && job.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {job.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-zinc-700 text-gray-300 text-xs px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Apply Button */}
      {/* Apply Button */}
      <div className="mt-6">
        <a
          href={job.refs.landing_page}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-ful bg-purple-500 text-white px-5 py-2 rounded-lg text-sm font-medium text-center ">
          Apply Now ➝
        </a>
      </div>
    </div>
  );
};

export default JobCard;
