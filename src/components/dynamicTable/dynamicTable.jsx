import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DynamicTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No data to display.
      </div>
    );
  }

  const columns = Object.keys(data[0]);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider"
                >
                  {col.replace(/_/g, " ")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentData.map((row, ridx) => (
              <tr
                key={ridx}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                {columns.map((col) => (
                  <td
                    key={col}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-600"
                    title={row[col]}
                  >
                    {row[col] != null ? String(row[col]) : ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="text-sm text-gray-600">
            Showing <span className="font-semibold">{startIndex + 1}</span> to{" "}
            <span className="font-semibold">
              {Math.min(endIndex, data.length)}
            </span>{" "}
            of <span className="font-semibold">{data.length}</span> results
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-md bg-white border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="text-sm font-medium text-gray-700">
              Page {currentPage} of {totalPages}
            </div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-md bg-white border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicTable;




