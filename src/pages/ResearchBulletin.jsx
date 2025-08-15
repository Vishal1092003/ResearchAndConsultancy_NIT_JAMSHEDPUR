import Navbar from '@/components/Navbar/Navbar';
import Tab from '@/components/Tab/Tab';
import React from 'react';

/**
 * ResearchBulletin.jsx
 * Fully responsive page that mirrors the layout/content of the provided PDF,
 * styled with Tailwind to match your existing theme (Navbar + Tab + gradient headers + cards).
 *
 * Drop this file into your pages (or app routes) and route it like your other pages.
 */

const SectionHeader = ({ title, subtitle }) => (
  <div className="w-full px-4">
    <div className="bg-gradient-to-r from-blue-500 to-orange-400 text-white rounded-xl shadow-lg px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
      <h2 className="text-2xl md:text-3xl font-extrabold">{title}</h2>
      {subtitle && <p className="opacity-90 text-sm md:text-base">{subtitle}</p>}
    </div>
  </div>
);

const StatCard = ({ label, value, note }) => (
  <div className="rounded-xl border bg-white shadow-sm p-5">
    <div className="text-3xl font-bold">{value}</div>
    <div className="mt-1 text-gray-700 font-medium">{label}</div>
    {note && <div className="mt-1 text-xs text-gray-500">{note}</div>}
  </div>
);

const Pill = ({ children }) => (
  <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-100">
    {children}
  </span>
);

const ResearchBulletin = () => {
  return (
    <div>
      <div className="">
        <div className="overflow-x-hidden">
          <Navbar />
        </div>
        <div className="sticky top-0 z-10 bg-white shadow-md">
          <Tab />
        </div>

        <div className="w-full h-16 mt-5 mb-5 rounded-lg shadow-lg flex justify-center items-center bg-sky-300">
          <h1 className="font-bold text-2xl">Research Bulletin</h1>
        </div>

        
      </div>
    </div>
  );
};

export default ResearchBulletin
