import React, { Fragment } from 'react';
import { FiTrendingUp, FiTrendingDown} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const DashboardTopSectionStatistics = ({ title, metric, trend, progress, description, icon, color, link }) => {
  const trendIcon = trend.includes('+')
    ? <FiTrendingUp className="text-success fs-16 me-1" />
    : trend.includes('-')
      ? <FiTrendingDown className="text-danger fs-16 me-1" />
      : <FiTrendingDown className="text-warning fs-16 me-1" />;

  return (
    <Fragment>
      <div className="col-xl-3 col-md-6 col-sm-12">
        <Link to={link} className="text-decoration-none">
          <div className="card shadow-sm hover-card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className={`wd-40 ht-40 d-flex align-items-center justify-content-center rounded-circle text-white ${color}`}>
                  <span className="fs-20">{icon}</span>
                </div>
                <div className="d-flex align-items-center text-muted fs-12">
                  {trendIcon}
                  <span>{trend}</span>
                </div>
              </div>
              <h6 className="fw-semibold mb-1 text-dark">{title}</h6>
              <h4 className="fw-bold mb-2">{metric}</h4>
              <p className="text-muted fs-12 mb-2">{description}</p>
              <div className="progress ht-6">
                <div
                  className={`progress-bar ${color}`}
                  role="progressbar"
                  style={{ width: `${progress}%` }}
                  aria-valuenow={progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

export default DashboardTopSectionStatistics;
