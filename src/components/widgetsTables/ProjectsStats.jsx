import React from "react";
import CardHeader from "@/components/shared/CardHeader";
import useCardTitleActions from "@/hooks/useCardTitleActions";
import CardLoader from "@/components/shared/CardLoader";
import { FiArrowRight } from "react-icons/fi";

const projectPerformanceData = [
  {
    id: 1,
    name: "ArtConnect",
    logo: "/assets/images/projects/artconnect.png",
    status: "Active",
    successRate: 92,
    pickedRate: 75,
    droppedRate: 5,
    activeUsers: "45 / 60",
    progress: 85,
    badgeColor: "success",
  },
  {
    id: 2,
    name: "FloraShop",
    logo: "/assets/images/projects/florashop.png",
    status: "Completed",
    successRate: 98,
    pickedRate: 90,
    droppedRate: 2,
    activeUsers: "0 / 70",
    progress: 100,
    badgeColor: "info",
  },
  {
    id: 3,
    name: "RealRent",
    logo: "/assets/images/projects/realrent.png",
    status: "Dropped",
    successRate: 40,
    pickedRate: 30,
    droppedRate: 20,
    activeUsers: "5 / 25",
    progress: 40,
    badgeColor: "danger",
  },
];

const ProjectsStats = ({ title }) => {
  const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } =
    useCardTitleActions();

  if (isRemoved) return null;

  return (
    <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
      <CardHeader title={title} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} />

      <div className="card-body custom-card-action p-0">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Project</th>
                <th>Status</th>
                <th>Success Rate</th>
                <th>Picked</th>
                <th>Dropped</th>
                <th>Active Users</th>
                <th>Progress</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {projectPerformanceData.map((proj) => (
                <tr key={proj.id}>
                  <td>
                    <div className="hstack gap-3 align-items-center">
                      <img src={proj.logo} alt={proj.name} width="36" height="36" className="rounded" />
                      <span className="fw-bold text-dark">{proj.name}</span>
                    </div>
                  </td>
                  <td>
                    <span className={`badge bg-soft-${proj.badgeColor} text-${proj.badgeColor}`}>
                      {proj.status}
                    </span>
                  </td>
                  <td><strong>{proj.successRate}%</strong></td>
                  <td>{proj.pickedRate}%</td>
                  <td>{proj.droppedRate}%</td>
                  <td>{proj.activeUsers}</td>
                  <td>
                    <div className="progress" style={{ height: "6px", width: "100px" }}>
                      <div
                        className={`progress-bar bg-${proj.badgeColor}`}
                        style={{ width: `${proj.progress}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="text-end">
                    <a href="#" className="avatar-text avatar-md"><FiArrowRight /></a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <CardLoader refreshKey={refreshKey} />
    </div>
  );
};

export default ProjectsStats;
