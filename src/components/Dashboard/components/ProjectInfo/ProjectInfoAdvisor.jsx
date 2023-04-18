import { useParams } from 'react-router-dom';
import { ProjectNameText, InnerWrapper } from './styles/ProjectInfo.styled';

export const ProjectInfoAdvisor = () => {
    const { projectname } = useParams();

    return (
        <div style={{ borderBottom: '1px solid #dde2e4' }}>
            <InnerWrapper className="dashboard">
                <ProjectNameText>
                    Project Name: <span style={{ color: '#000', marginLeft: 8 }}>{projectname}</span>
                </ProjectNameText>
            </InnerWrapper>
        </div>
    );
};
