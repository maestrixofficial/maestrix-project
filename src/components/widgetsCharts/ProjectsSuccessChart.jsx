import React from "react";
import CardHeader from "@/components/shared/CardHeader";
import ReactApexChart from "react-apexcharts";
import CardLoader from "@/components/shared/CardLoader";
import useCardTitleActions from "@/hooks/useCardTitleActions";

// Fake data
const projectSuccessData = [
  { name: "E-commerce App", success: 92 },
  { name: "Portfolio Site", success: 85 },
  { name: "Recipe Finder", success: 78 },
  { name: "Chat App", success: 67 },
  { name: "Library System", success: 59 },
];

// Chart Logic
const getProjectSuccessChartOptions = () => ({
  chart: {
    type: "bar",
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      borderRadius: 6,
      barHeight: "55%",
    },
  },
  colors: ["#34d399"], // green shade
  dataLabels: {
    enabled: true,
    formatter: (val) => `${val}%`,
    style: {
      colors: ["#fff"],
      fontSize: "12px",
      fontWeight: 600,
    },
  },
  xaxis: {
    categories: projectSuccessData.map((d) => d.name),
    labels: { style: { colors: "#6b7280" } },
  },
  yaxis: { labels: { style: { colors: "#6b7280" } } },
  tooltip: {
    y: { formatter: (val) => `${val}% success` },
  },
  series: [
    {
      name: "Success Rate",
      data: projectSuccessData.map((d) => d.success),
    },
  ],
});

const ProjectSuccessChart = () => {
  const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } =
    useCardTitleActions();

  if (isRemoved) return null;

  const chartOption = getProjectSuccessChartOptions();

  return (
    <div className="col-xxl-6">
      <div
        className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""
          }`}
      >
        <CardHeader
          title={"Most & Least Successful Projects"}
          refresh={handleRefresh}
          remove={handleDelete}
          expanded={handleExpand}
        />
        <div className="card-body custom-card-action">
          <ReactApexChart
            type="bar"
            height={360}
            options={chartOption}
            series={chartOption.series}
          />
          <CardLoader refreshKey={refreshKey} />
        </div>
      </div>
    </div>
  );
};

export default ProjectSuccessChart;
