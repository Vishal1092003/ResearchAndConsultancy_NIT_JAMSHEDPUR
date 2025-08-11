import React from "react";
import eventsData from "../Data/Events.json";
import Navbar from '@/components/Navbar/Navbar';

function EventCard({ sl_no, department, event, concerned_person, duration, status = "Active" }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-6 hover:shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col gap-3 min-w-[300px]">
      <div className="flex justify-between items-center mb-3">
        <span className="bg-blue-50 text-blue-800 text-xs font-semibold uppercase px-3 py-1 rounded-full tracking-wide">
          {department || "Other"}
        </span>
        <span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
          {status}
        </span>
      </div>
      <h3 className="text-xl font-extrabold text-gray-900 leading-snug">{`${sl_no}. ${event}`}</h3>
      <p className="text-gray-700 text-sm">
        <span className="font-semibold text-indigo-700">Concerned Person: </span>
        {concerned_person}
      </p>
      <p className="flex items-center text-indigo-600 font-medium text-sm mt-auto">
        <svg
          className="w-5 h-5 mr-2 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        {duration}
      </p>
    </div>
  );
}

export default function Events() {
  const allEvents = [...eventsData.Sheet];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF3E5] via-white to-[#F8F8F8]">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Header Banner */}
      <header className="bg-gradient-to-r  from-blue-600 to-orange-500 text-white p-6 shadow-lg mt-[175px]">
        <h1 className="text-4xl font-extrabold text-white text-center tracking-tight drop-shadow-lg">
          Upcoming Workshops & Conferences
        </h1>
        <p className="mt-2 text-indigo-200 text-center text-lg font-semibold">
          An overview of Workshops and Conferences
        </p>
      </header>

      {/* Cards Grid */}
      <main className="max-w-7xl mx-auto px-6 py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {allEvents.map((item) => (
          <EventCard key={`${item.sl_no}-${item.event}`} {...item} status="Active" />
        ))}
      </main>
    </div>
  );
}
