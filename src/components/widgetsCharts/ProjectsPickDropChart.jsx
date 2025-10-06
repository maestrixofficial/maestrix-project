import React from "react";
import CardHeader from "@/components/shared/CardHeader";
import ReactApexChart from "react-apexcharts";
import CardLoader from "@/components/shared/CardLoader";
import useCardTitleActions from "@/hooks/useCardTitleActions";

// Example data (replace later with API or DB data)
const projectPickData = [
  { name: "AI Chatbot", picked: 120 },
  { name: "E-commerce App", picked: 95 },
  { name: "Portfolio Builder", picked: 80 },
  { name: "Recipe Finder", picked: 60 },
  { name: "Library System", picked: 40 },
];

const MostPickedProjectsChart = () => {
  const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } =
    useCardTitleActions();

  if (isRemoved) return null;

  // Sort data by number of picks (highest → lowest)
  const sortedData = [...projectPickData].sort((a, b) => b.picked - a.picked);

  const chartOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 6,
        barHeight: "60%",
      },
    },
    colors: ["#6366f1"], // Indigo color
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val} Picks`,
      style: {
        colors: ["#fff"],
        fontSize: "12px",
        fontWeight: 600,
      },
    },
    xaxis: {
      categories: sortedData.map((item) => item.name),
      labels: { style: { colors: "#6b7280" } },
    },
    yaxis: { labels: { style: { colors: "#6b7280" } } },
    tooltip: {
      y: { formatter: (val) => `${val} students picked` },
    },
    series: [
      {
        name: "Picks",
        data: sortedData.map((item) => item.picked),
      },
    ],
  };

  return (
    <div className="col-xxl-6">
      <div
        className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""
          }`}
      >
        <CardHeader
          title={"Most Picked Projects"}
          refresh={handleRefresh}
          remove={handleDelete}
          expanded={handleExpand}
        />

        <div className="card-body custom-card-action">
          <ReactApexChart
            type="bar"
            height={360}
            options={chartOptions}
            series={chartOptions.series}
          />
          <CardLoader refreshKey={refreshKey} />
        </div>
      </div>
    </div>
  );
};

export default MostPickedProjectsChart;
