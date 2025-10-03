export const userOverviewChartOption = {
  series: [55, 25, 15, 5], // Example user distribution
  chart: {
    type: "donut",
    toolbar: { show: false },
  },
  labels: ["Active Users", "Returning Users", "Inactive Users", "Guests"],
  colors: ["#3454d1", "#1565c0", "#1976d2", "#1e88e5"],
  legend: {
    position: "bottom",
    fontFamily: "Inter",
    fontWeight: 500,
    // position: 'bottom'
    labels: {
      colors: "#A0ACBB",
      fontFamily: "Inter",
    },
    markers: {
      width: 10,
      height: 10,
    },
    itemMargin: {
      horizontal: 20,
      vertical: 5,
    },
  },
  stroke: {
    width: 0,
    lineCap: "round",
  },
  dataLabels: {
    enabled: false,
    style: {
      fontSize: "14px", // Font size for data labels
      fontFamily: "Courier New", // Font family for data labels
      fontWeight: "light",
      colors: ["#fff"], // Text color
    },
    formatter: (val) => `${val.toFixed(1)}%`,
  },
  plotOptions: {
    pie: {
      donut: {
        size: "80%",
        labels: {
          show: true,
          total: {
            show: true,
            label: "Users",
            formatter: () => "100%",
          },
        },
      },
    },
  },
};