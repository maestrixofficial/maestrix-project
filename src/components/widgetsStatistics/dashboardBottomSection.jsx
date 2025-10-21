import React from "react";
import DashboardTableCard from "../widgetsTables/DashboardTable";
// import { profileActivityData } from "@/utils/fackData/profileActivityData";
import { staticActivity } from "@/utils/dynamicData/dashboardActivityData";


const DashboardBottomSection = () => {
  // const activityData = [
  //   { actor: "John", action: "Published Blueprint", entity: "Marketing Plan", time: "2h ago" },
  //   { actor: "Sara", action: "Upgraded Plan", entity: "Pro", time: "5h ago" },
  // ];

  // const topProjects = [
  //   { project: "SQL Sales Dashboard", views: "10,210", completions: "8,920", "completion rate": "87%" },
  //   { project: "Power BI Ecommerce", views: "8,430", completions: "6,340", "completion rate": "75%" },
  // ];

  // const tickets = [
  //   { ticketid: "#001", subject: "Billing Issue", priority: "High", status: "Open", assignee: "Alex" },
  //   { ticketid: "#002", subject: "Login Bug", priority: "Medium", status: "In Progress", assignee: "Sam" },
  // ];

  return (
    <div className="row">
      <DashboardTableCard
        title="Recent Activity"
        description="Latest updates from users and system events"
        columns={["Actor", "Action", "Entity", "Time"]}
        data={staticActivity.recentActivities}
      />
      <DashboardTableCard
        title="Top Performing Projects"
        description="Most used blueprints ranked by engagement"
        columns={["Project", "Views", "Completions", "Completion Rate"]}
        data={staticActivity.topProjects}
      />
      <DashboardTableCard
        title="Support Tickets"
        description="Current customer issues and their status"
        columns={["TicketID", "Subject", "Priority", "Status", "Assignee"]}
        data={staticActivity.supportTickets}
      />
    </div>
  );
};

export default DashboardBottomSection;
