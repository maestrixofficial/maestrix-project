import React from 'react'
import LeadsOverviewChart from '@/components/widgetsCharts/LeadsOverviewChart'
import LatestLeads from '@/components/widgetsTables/LatestLeads'
import Schedule from '@/components/widgetsList/Schedule'
import Project from '@/components/widgetsList/Project'
import TeamProgress from '@/components/widgetsList/Progress'
import PaymentRecordChart from '@/components/widgetsCharts/PaymentRecordChart'
import SiteOverviewStatistics from '@/components/widgetsStatistics/SiteOverviewStatistics'
import TasksOverviewChart from '@/components/widgetsCharts/TasksOverviewChart'
import SalesMiscellaneous from '@/components/widgetsMiscellaneous/SalesMiscellaneous'
import PageHeaderDate from '@/components/shared/pageHeader/PageHeaderDate'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import Todos from '@/components/widgetsList/Todos'

import Footer from '@/components/shared/Footer'
import { projectsDataTwo } from '@/utils/fackData/projectsDataTwo'
import Users from '@/components/widgetsTables/Users'
import DashboardTopSectionStatistics from '@/components/widgetsStatistics/DashboardTopSectionStatistics'
import { dashboardMetricsData } from '@/utils/dynamicData/dashboardTopSection'
import DashboardChartSection from '@/components/widgetsCharts/DashboardChartSection'
import { dashboardChartsData } from '@/utils/dynamicData/dashboardChartSection'

import { staticActivity } from '@/utils/dynamicData/dashboardActivityData'
import DashboardBottomSection from "../components/widgetsStatistics/dashboardBottomSection";
const Home = () => {
    return (
        <>
            <PageHeader >
                <PageHeaderDate />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6" > */}
                        {dashboardMetricsData.map((item) => (
                            <DashboardTopSectionStatistics key={item.id} {...item} />
                        ))}
                    {/* </div> */}
                    {dashboardChartsData.map(chart => (
                        <DashboardChartSection key={chart.id} {...chart} />
                    ))}
                    {/* <div className="col-xl-4 col-md-12"><RecentActivityFeed activities={staticActivity.recentActivities} /></div>
                    <div className="col-xl-4 col-md-12"><TopProjectsTable projects={staticActivity.topProjects} /></div>
                    <div className="col-xl-4 col-md-12"><SupportTicketsTable tickets={staticActivity.supportTickets} /></div> */}
                    <DashboardBottomSection/>
                    {/* <SiteOverviewStatistics />
                    <PaymentRecordChart />
                    <SalesMiscellaneous isFooterShow={true} dataList={projectsDataTwo} />
                    <Todos title={"Todos"} /> */}
                    {/* <TasksOverviewChart /> */}
                    {/* <LeadsOverviewChart chartHeight={315} /> */}
                    {/* <LatestLeads title={"Latest Leads"} /> */}
                    {/* <Schedule title={"Upcoming Schedule"} />
                    <Project cardYSpaceClass="hrozintioal-card" borderShow={true} title="Project Status" />
                    <Users title={"New Users"} /> */}
                    {/* <TeamProgress title={"Team Progress"} footerShow={true} /> */} 

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home