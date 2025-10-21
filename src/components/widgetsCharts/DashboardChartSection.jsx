import React from "react";
import ReactApexChart from "react-apexcharts";

const DashboardChartCard = ({ title, type, description, series, labels, color }) => {
  const chartOptions = {
    chart: { id: title, toolbar: { show: false }, zoom: { enabled: false } },
    colors: color,
    xaxis: {
      categories: labels || series[0]?.data.map((_, i) => i + 1), // fallback categories if labels missing
    },
    stroke: { curve: type === "line" || type === "area" ? "smooth" : undefined },
    plotOptions: {
      bar: { horizontal: false, columnWidth: "50%", distributed: false },
    },
    legend: { show: true },
    tooltip: { enabled: true },
  };

  return (
    <div className="col-xl-6 col-md-12 mb-6">
      <div className="card shadow-sm hover-card">
        <div className="card-body">
          <h6 className="fw-semibold mb-3">{title}</h6>
          <p className="text-muted fs-12 mb-3">{description}</p>
          <ReactApexChart options={chartOptions} series={series} type={type} height={250} />
        </div>
      </div>
    </div>
  );
};

export default DashboardChartCard;
