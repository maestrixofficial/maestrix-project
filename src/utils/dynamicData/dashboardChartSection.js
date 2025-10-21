// src/services/dashboardChartsService.js

export const dashboardChartsData = [
  {
    id: 1,
    title: "User Growth",
    type: "line",
    description: "New users per day/week/month",
   series: [
  { name: "Users", data: [120, 200, 150, 300, 250, 400, 350] }
],
labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    color: "#3b82f6",
  },
  {
    id: 2,
    title: "Subscription Trends",
    type: "area",
    description: "Paid vs Trial vs Canceled",
    series: [
      { name: "Paid", data: [50, 60, 55, 70, 65, 80, 75] },
      { name: "Trial", data: [30, 25, 40, 35, 45, 40, 50] },
      { name: "Canceled", data: [5, 10, 7, 12, 8, 15, 10] },
    ],
    color: ["#10b981", "#fbbf24", "#ef4444"],
  },
  {
    id: 3,
    title: "Project Engagement",
    type: "bar",
    description: "Top 5 most used Projects",
    series: [
      { name: "Views", data: [10210, 8430, 7560, 6340, 5800] },
      { name: "Completions", data: [8920, 6340, 5600, 4900, 4300] },
    ],
    labels: [
      "SQL Sales Dashboard",
      "Power BI Ecommerce",
      "React Dashboard",
      "Analytics API",
      "Node CRM",
    ],
    color: ["#6366f1", "#f97316"],
  },
  {
    id: 4,
    title: "Churn & Retention",
    type: "donut",
    description: "% of users who canceled vs retained",
    series: [25, 75],
    labels: ["Canceled", "Retained"],
    color: ["#ef4444", "#10b981"],
  },
  {
    id: 5,
    title: "Revenue Breakdown",
    type: "bar", // stacked bar
    description: "Revenue split by plan (Free, Pro, Premium)",
    series: [
      { name: "Free", data: [500, 700, 600, 800, 750, 900, 850] },
      { name: "Pro", data: [300, 400, 350, 500, 450, 550, 500] },
      { name: "Premium", data: [100, 150, 120, 180, 160, 200, 190] },
    ],
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    color: ["#3b82f6", "#10b981", "#f97316"],
  },
];

// Service function
// export const getDashboardCharts = async () => {
//   try {
    // Future API: Replace URL with actual endpoint
    // const response = await fetch("/api/dashboard/charts");
    // if (!response.ok) throw new Error("Failed to fetch charts");
    // return await response.json();

//     return staticCharts;
//   } catch (error) {
//     console.error("Error fetching dashboard charts:", error);
//     return staticCharts;
//   }
// };
