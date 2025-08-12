import React, { useState } from "react";
import eventsData from "../data/Events_workshopsProgram.json";
import Navbar from "@/components/Navbar/Navbar";
import Tab from "@/components/Tab/Tab";

const Events = () => {
  const maxPages = 4;

  // ✅ Sort events by sl_no
  const sortedEvents = [...eventsData.Sheet].sort(
    (a, b) => Number(a.sl_no) - Number(b.sl_no)
  );

  const totalItems = sortedEvents.length;
  const itemsPerPage = Math.ceil(totalItems / maxPages);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEvents = sortedEvents.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="bg-gradient-to-b from-indigo-50 via-white to-purple-50 min-h-screen">
      {/* ✅ Fixed Navbar + Tab */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
        <div className="bg-white shadow-md sticky top-[64px] z-40">
          <Tab />
        </div>
      </div>

      {/* ✅ Padding to avoid overlap */}
      <div className="pt-[195px] px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-indigo-600  to-orange-500 text-transparent bg-clip-text">
          Stay Updated with Our Events
        </h1>

        {/* Events Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currentEvents.map((event) => (
            <div
              key={event.sl_no}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 hover:shadow-xl hover:border-indigo-400 hover:scale-105 transition-all duration-300"
            >
              {/* ✅ Serial Number */}
              <span className="text-xs font-bold text-orange-500 bg-orange-100 px-2 py-1 rounded-md">
                #{event.sl_no}
              </span>

              <h2 className="text-lg font-semibold text-gray-800 mt-2 mb-3">
                {event.event}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-semibold">Department:</span>{" "}
                {event.department || "N/A"}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-semibold">Concerned Person:</span>{" "}
                {event.concerned_person}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Duration:</span>{" "}
                {event.duration || "Not specified"}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: maxPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                currentPage === index + 1
                  ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;