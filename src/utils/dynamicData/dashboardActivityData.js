// src/services/dashboardActivityService.js

export const staticActivity = {
  recentActivities: [
    {
      id: 1,
      actor: "Admin",
      action: "Blueprint published",
      entity: "SQL Sales Dashboard",
      time: "2h ago",
    },
    {
      id: 2,
      actor: "John Doe",
      action: "New dataset uploaded",
      entity: "Ecommerce Data",
      time: "5h ago",
    },
    {
      id: 3,
      actor: "Alice",
      action: "User upgraded plan",
      entity: "Pro Plan",
      time: "1d ago",
    },
    {
      id: 4,
      actor: "Support",
      action: "Ticket assigned",
      entity: "#002 Login Bug",
      time: "2d ago",
    },
  ],
  topProjects: [
    {
      id: 1,
      project: "SQL Sales Dashboard",
      views: 10210,
      completions: 8920,
      completionRate: "87%",
    },
    {
      id: 2,
      project: "Power BI Ecommerce",
      views: 8430,
      completions: 6340,
      completionRate: "75%",
    },
    {
      id: 3,
      project: "React Dashboard",
      views: 7560,
      completions: 5600,
      completionRate: "74%",
    },
  ],
  supportTickets: [
    {
      id: "#001",
      subject: "Billing Issue",
      priority: "High",
      status: "Open",
      assignee: "Alex",
    },
    {
      id: "#002",
      subject: "Login Bug",
      priority: "Medium",
      status: "In Progress",
      assignee: "Sam",
    },
    {
      id: "#003",
      subject: "API Error",
      priority: "High",
      status: "Resolved",
      assignee: "Mia",
    },
  ],
};

// export const getDashboardActivity = async () => {
//   try {
    // Future API:
    // const response = await fetch("/api/dashboard/activity");
    // if (!response.ok) throw new Error("Failed to fetch activity data");
    // return await response.json();

//     return staticActivity;
//   } catch (error) {
//     console.error("Error fetching dashboard activity:", error);
//     return staticActivity;
//   }
// };
