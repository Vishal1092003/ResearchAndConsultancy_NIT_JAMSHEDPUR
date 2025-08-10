import React from "react";

const DynamicTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data to display.</div>;
  }
  const columns = Object.keys(data[0]);

  return (
    <div
      style={{
        background: "#fff",
        overflow: "hidden",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        height: "auto", // Don't force full height
      }}
    >
      <div
        style={{
          flex: 1,
          overflowX: "auto",
          overflowY: "auto",
          background: "#fff",
          whiteSpace: "nowrap",
        }}
      >
        <table
          style={{
            borderCollapse: "collapse",
            background: "#fff",
            tableLayout: "fixed",
            width: columns.length * 150,
            minWidth: "100%",
            /* REMOVE: height: "100%", */
          }}
        >
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  style={{
                    border: "1px solid #000",
                    padding: "1px 4px",
                    background: "#fff",
                    color: "#000",
                    width: 150,
                    textAlign: "left",
                    whiteSpace: "nowrap",
                    lineHeight: 1,
                    fontSize: "0.8rem",
                  }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, ridx) => (
              <tr key={ridx}>
                {columns.map((col) => (
                  <td
                    key={col}
                    style={{
                      border: "1px solid #000",
                      padding: "1px 4px",
                      color: "#000",
                      background: "#fff",
                      width: 150,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      lineHeight: 1,
                      fontSize: "0.8rem",
                    }}
                    title={row[col]}
                  >
                    {row[col] != null ? row[col] : ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DynamicTable;
