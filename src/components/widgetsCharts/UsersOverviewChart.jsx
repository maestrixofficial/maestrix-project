import React from 'react'
import { Link } from 'react-router-dom'
import ReactApexChart from 'react-apexcharts'
import CardHeader from '@/components/shared/CardHeader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import CardLoader from '@/components/shared/CardLoader'
import { userOverviewChartOption } from '@/utils/chartsLogic/userOverviewChartoption'


const UsersOverviewChart = ({ chartHeight = 280, isFooterShow = true }) => {
  const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } =
    useCardTitleActions();

  if (isRemoved) {
    return null;
  }

  // List data under chart
  const usersOverview = [
    { id: 1, title: 'Active Users', number: 55 },
    { id: 2, title: 'Returning Users', number: 25 },
    { id: 3, title: 'Inactive Users', number: 15 },
    { id: 4, title: 'Guests', number: 5 }
  ];

  return (
    <div className="col-xxl-4">
      <div
        className={`card stretch stretch-full users-overview ${isExpanded ? 'card-expand' : ''
          } ${refreshKey ? 'card-loading' : ''}`}
      >
        <CardHeader
          title={'Users Overview'}
          refresh={handleRefresh}
          remove={handleDelete}
          expanded={handleExpand}
        />

        <div className="card-body custom-card-action">
          <ReactApexChart
            options={userOverviewChartOption}
            series={userOverviewChartOption.series}
            type="donut"
            height={chartHeight}
          />

          <div className="row g-2 pt-2">
            {usersOverview.map(({ id, number, title }) => (
              <div key={id} className="col-6">
                <Link
                  to="#"
                  className="p-2 hstack gap-2 rounded border border-dashed border-gray-5"
                >
                  <span
                    className="wd-7 ht-7 rounded-circle d-inline-block"
                    style={{ backgroundColor: userOverviewChartOption.colors[id - 1] }}
                  ></span>
                  <span>
                    {title}
                    <span className="fs-10 text-muted ms-1">({number}%)</span>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {isFooterShow && (
          <Link
            to="#"
            className="card-footer fs-11 fw-bold text-uppercase text-center"
          >
            Update: 10 Min Ago
          </Link>
        )}

        <CardLoader refreshKey={refreshKey} />
      </div>
    </div>
  );
};

export default UsersOverviewChart;
