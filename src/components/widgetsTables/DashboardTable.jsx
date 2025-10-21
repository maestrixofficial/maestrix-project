import React from "react";
import CardHeader from "@/components/shared/CardHeader";
import Pagination from "@/components/shared/Pagination";
import CardLoader from "@/components/shared/CardLoader";
import useCardTitleActions from "@/hooks/useCardTitleActions";

const DashboardTableCard = ({ title, description, columns, data }) => {
  const {
    refreshKey,
    isRemoved,
    isExpanded,
    handleRefresh,
    handleExpand,
    handleDelete,
  } = useCardTitleActions();

  if (isRemoved) return null;

  // Normalize column names to match keys in data
  const normalizeKey = (col) =>
    col
      .replace(/\s+/g, "") // remove spaces
      .replace(/[^\w]/g, "") // remove special chars
      .replace(/^\w/, (c) => c.toLowerCase()); // lowercase first letter

  // Helper to color completion rates dynamically
  const getCompletionColor = (value) => {
    if (!value) return "text-muted";
    const num = parseInt(value.replace("%", ""), 10);
    if (isNaN(num)) return "text-muted";
    if (num >= 85) return "text-success";
    if (num >= 70) return "text-warning";
    return "text-danger";
  };

  return (
    <div className="col-lg-6">
      <div
        className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""
          } ${refreshKey ? "card-loading" : ""}`}
      >
        <CardHeader
          title={title}
          refresh={handleRefresh}
          remove={handleDelete}
          expanded={handleExpand}
        />

        <div className="card-body custom-card-action p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead>
                <tr>
                  {columns.map((col, i) => (
                    <th key={i} scope="col" className="text-muted fw-semibold fs-13">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {data.map((row, i) => (
                  <tr key={i}>
                    {columns.map((col, j) => {
                      const key = normalizeKey(col);
                      const value = row[key];

                      // Badge styling for "status", "priority", etc.
                      if (
                        key.includes("status") ||
                        key.includes("priority") ||
                        key.includes("level")
                      ) {
                        const color =
                          value === "High"
                            ? "danger"
                            : value === "Medium"
                              ? "warning"
                              : value === "Low"
                                ? "success"
                                : value === "Resolved"
                                  ? "success"
                                  : value === "InProgress"
                                    ? "primary"
                                    : "secondary";
                        return (
                          <td key={j}>
                            <span
                              className={`badge bg-soft-${color} text-${color}`}
                            >
                              {value || "-"}
                            </span>
                          </td>
                        );
                      }

                      // Percentage color logic (for Completion Rate etc.)
                      if (typeof value === "string" && value.includes("%")) {
                        const colorClass = getCompletionColor(value);
                        return (
                          <td key={j} className={`fw-semibold ${colorClass}`}>
                            {value}
                          </td>
                        );
                      }

                      // Numeric columns (align right)
                      if (typeof value === "number") {
                        return (
                          <td key={j} className="text-end text-muted fs-13">
                            {value.toLocaleString()}
                          </td>
                        );
                      }

                      // Default
                      return (
                        <td key={j} className="text-muted fs-13 align-middle">
                          {value || "-"}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card-footer">
          <Pagination />
        </div>
        <CardLoader refreshKey={refreshKey} />
      </div>
    </div>
  );
};

export default DashboardTableCard;
