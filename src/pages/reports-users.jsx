import LeadsOverviewChart from "@/components/widgetsCharts/LeadsOverviewChart";
import UsersOverviewChart from "@/components/widgetsCharts/UsersOverviewChart";
import Progress from "@/components/widgetsList/Progress";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { FiUsers, FiTrendingUp } from "react-icons/fi";

// Example ApexChart configs
const activityChart = {
  series: [{ name: "Active Users", data: [120, 200, 150, 300, 250, 400, 350] }],
  options: {
    chart: { type: "bar", height: 300, toolbar: { show: false } },
    colors: ["#6366f1"],
    plotOptions: { bar: { borderRadius: 6, horizontal: false, columnWidth: "50%" } },
    xaxis: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
    tooltip: { theme: "dark" },
  },
};

const growthChart = {
  series: [44, 55, 41, 17, 15],
  options: {
    chart: { type: "donut" },
    labels: ["New", "Returning", "Inactive", "Guests", "Others"],
    colors: ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6"],
    legend: { position: "bottom" },
  },
};

const UserReports = () => {
  return (
    <div className="tab-pane fade active show p-4">
      <div className="row">
        {/* User Activity Bar Chart */}
        <div className="col-xl-8">
          <div className="card stretch stretch-full">
            <div className="card-header">
              <h4 className="mb-0 fw-bold d-flex align-items-center">
                <FiUsers className="me-2 text-primary" />
                User Activity (Weekly)
              </h4>
            </div>
            <div className="card-body">
              <ReactApexChart
                options={activityChart.options}
                series={activityChart.series}
                type="bar"
                height={300}
              />
            </div>
          </div>
        </div>

        {/* Growth Breakdown Donut Chart */}
        <UsersOverviewChart chartHeight={290} isFooterShow={true} />


        {/* KPI Cards */}
        <div className="col-xxl-3 col-xl-6 col-md-6">
          <div className="card stretch stretch-full">
            <div className="card-body">
              <div className="fw-semibold">Active Users</div>
              <div className="fs-24 fw-bold text-primary mt-2">3,245</div>
              <div className="progress mt-3 ht-5">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "70%" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-xxl-3 col-xl-6 col-md-6">
          <div className="card stretch stretch-full">
            <div className="card-body">
              <div className="fw-semibold">Returning Users</div>
              <div className="fs-24 fw-bold text-success mt-2">1,245</div>
              <div className="progress mt-3 ht-5">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "50%" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-xxl-3 col-xl-6 col-md-6">
          <div className="card stretch stretch-full">
            <div className="card-body">
              <div className="fw-semibold">Inactive Users</div>
              <div className="fs-24 fw-bold text-warning mt-2">678</div>
              <div className="progress mt-3 ht-5">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "30%" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-xxl-3 col-xl-6 col-md-6">
          <div className="card stretch stretch-full">
            <div className="card-body">
              <div className="fw-semibold">Guest Users</div>
              <div className="fs-24 fw-bold text-danger mt-2">412</div>
              <div className="progress mt-3 ht-5">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "20%" }}
                />
              </div>
            </div>
          </div>
        </div>

                  <Progress title={"Top Performers"} footerShow={false} />
        
      </div>
    </div>
  );
};

export default UserReports;
