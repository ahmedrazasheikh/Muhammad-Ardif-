import { Header } from './components/Header/Header';
import { UpgradePlan } from './components/UpdragePlan/UpgradePlan';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { ProjectInfo } from './components/ProjectInfo/ProjectInfo';
import { Buttons } from './components/Buttons/Buttons';
import { LeftSidebar } from './components/LeftSidebar/LeftSidebar';
import { useState } from 'react';
import { NotificAboutCreatedProject } from './components/NotificAboutCreatedProject/NotificAboutCreatedProject';
import { RightSidebar } from './components/RightSidebar/RightSidebar';
import { ProjectInfoAdvisor } from './components/ProjectInfo/ProjectInfoAdvisor';
import { useSelector } from 'react-redux';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export const Dashboard = () => {
    const [isLeftSidebarShown, setIsLeftSidebarShown] = useState(true);
    const [isMessageShown, setIsMessageShown] = useState(true);
    const { projectname, criteria } = useParams();
    const location = useLocation();

    const { score } = useSelector(state => state.projects.gradeProject);

    const shouldShowLeftSideBarAnfSaveBtn =
        location.pathname === `/dashboard/create/sectionA/${projectname}`.replaceAll(' ', '%20') ||
        location.pathname === `/dashboard/create/sectionB/${projectname}`.replaceAll(' ', '%20') ||
        location.pathname === `/dashboard/create/sectionC/${projectname}`.replaceAll(' ', '%20') ||
        location.pathname === `/dashboard/create/sectionD/${projectname}`.replaceAll(' ', '%20') ||
        location.pathname ===
            `/dashboard/create/advisor/results/${projectname}`.replaceAll(' ', '%20') ||
        location.pathname === `/dashboard/create/impact/${projectname}`.replaceAll(' ', '%20') ||
        location.pathname ===
            `/dashboard/create/impact/${projectname}/${criteria}`.replaceAll(' ', '%20') ||
        location.pathname ===
            `/dashboard/create/impact/${projectname}/${criteria}/response`.replaceAll(' ', '%20') ||
        location.pathname ===
            `/dashboard/create/impact/${projectname}/${criteria}/overall`.replaceAll(' ', '%20') ||
        location.pathname ===
            `/dashboard/create/impact/${projectname}/${criteria}/overallfinal`.replaceAll(
                ' ',
                '%20'
            );

    const shouldShowProjectInfo =
        location.pathname === `/dashboard/create/impact/${projectname}`.replaceAll(' ', '%20') ||
        location.pathname ===
            `/dashboard/create/impact/${projectname}/${criteria}`.replaceAll(' ', '%20') ||
        location.pathname ===
            `/dashboard/create/impact/${projectname}/${criteria}/response`.replaceAll(' ', '%20') ||
        location.pathname ===
            `/dashboard/create/impact/${projectname}/${criteria}/overall`.replaceAll(' ', '%20');

    const shouldShowProjectInfoAdvisor =
        location.pathname === `/dashboard/create/sectionA/${projectname}`.replaceAll(' ', '%20') ||
        location.pathname === `/dashboard/create/sectionB/${projectname}`.replaceAll(' ', '%20') ||
        location.pathname === `/dashboard/create/sectionC/${projectname}`.replaceAll(' ', '%20') ||
        location.pathname === `/dashboard/create/sectionD/${projectname}`.replaceAll(' ', '%20') ||
        location.pathname ===
            `/dashboard/create/advisor/results/${projectname}`.replaceAll(' ', '%20');

    const shouldNotificationShown =
        location.pathname === `/dashboard/create/impact/${projectname}`.replaceAll(' ', '%20') ||
        location.pathname === `/dashboard/create/sectionA/${projectname}`.replaceAll(' ', '%20');

    const shouldShowRightSideBar =
        (location.pathname ===
            `/dashboard/create/impact/${projectname}/${criteria}/response`.replaceAll(' ', '%20') &&
            score !== 'High') ||
        (location.pathname ===
            `/dashboard/create/advisor/results/${projectname}`.replaceAll(' ', '%20') &&
            score !== 'High');

    return (
        <div style={{ position: 'relative' }}>
            <Header />
            <UpgradePlan />
            {shouldShowProjectInfo && <ProjectInfo />}
            {shouldShowProjectInfoAdvisor && <ProjectInfoAdvisor />}
            <div
                className="dashboard"
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch' }}
            >
                {shouldShowLeftSideBarAnfSaveBtn && (
                    <div>
                        {isLeftSidebarShown ? (
                            <LeftSidebar setIsLeftSidebarShown={setIsLeftSidebarShown} />
                        ) : (
                            <IconContext.Provider value={{ size: 30 }}>
                                <BsArrowsFullscreen onClick={() => setIsLeftSidebarShown(true)} />
                            </IconContext.Provider>
                        )}
                    </div>
                )}

                <Outlet />
                {shouldNotificationShown && (
                    <div>
                        {isMessageShown && (
                            <NotificAboutCreatedProject setIsMessageShown={setIsMessageShown} />
                        )}
                    </div>
                )}
                {shouldShowRightSideBar && <RightSidebar />}
            </div>
            <Buttons />
        </div>
    );
};
