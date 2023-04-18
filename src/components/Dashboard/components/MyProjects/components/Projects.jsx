import {
    TitleProject,
    ProjectContainer,
    NameContainer,
    NameProject,
    Folder,
    CriterionContainer,
    Criterion,
    Progress,
    ProgressText,
    TrashContainer,
    TrashEditContainer,
} from '../styles/Project.styled';
import folder from 'images/header/folder.svg';
import trash from 'images/header/trash.svg';
import edit from 'images/header/edit.svg';
import upload from 'images/header/upload.svg';
import { handleDownloadProject, projectsGet } from 'redux/projects/projectOperations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ReferenceDataContext } from 'components/Context/Context';
import { PopUpDeleteProject } from '../../PopUp/PopUpDeleteProject';
import { projectRemove } from 'redux/projects/projectOperations';
import { useState } from 'react';
import { Loader } from 'components/Loader/Loader';

export const Project = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [nameProjects, setNameProjects] = useState('');
    const { email } = useSelector(state => state.auth.user);
    const { getProject } = useSelector(state => state.projects);
    const [isLoading, setIsLoading] = useState(false);

    const handleProjectClick = projectname => {
        navigate(`/dashboard/create/impact/${projectname}`);
    };
    const { handleTogglePopup } = useContext(ReferenceDataContext);

    useEffect(() => {
        dispatch(projectsGet());
    }, [dispatch]);

    useEffect(() => {
        if (getProject) {
            const dataArray = Object.keys(getProject).map(name => ({
                name,
                count: getProject[name],
            }));
            setProjects(dataArray);
        }
    }, [getProject]);

    const handleDownload = (url, filename) => {
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleUploadProject = async name => {
        setIsLoading(true);
        console.log(name);
        try {
            const result = await dispatch(
                handleDownloadProject({
                    functionality: 'grading',
                    email: email,
                    project_name: name,
                })
            );
            handleDownload(result.payload.url, result.payload.filename);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGetNameOfProjectForRemove = name => {
        setNameProjects(name);
        handleTogglePopup();
    };

    const handleDeleteProject = async () => {
        setIsLoading(true);
        const deleteProject = { email, project: nameProjects };
        await dispatch(projectRemove(deleteProject));
        const updatedProjects = projects.filter(project => project.name !== nameProjects);
        setProjects(updatedProjects);
        setIsLoading(false);
        handleTogglePopup();
    };

    return (
        <>
            {isLoading && <Loader />}
            <div style={{ marginBottom: 50 }}>
                <div className="Grade">
                    <TitleProject>Grade a GCF Concept Note or Proposal</TitleProject>
                    {projects.map(({ name, count }) => (
                        <ProjectContainer key={name}>
                            <NameContainer>
                                <Folder src={folder} alt="folder" />
                                <NameProject onClick={() => handleProjectClick(name)}>
                                    {name}
                                </NameProject>
                            </NameContainer>
                            <CriterionContainer>
                                <Criterion>{count}/6 Criterion Areas Completed</Criterion>
                                <Progress className="inprogress">
                                    <ProgressText className="inprogressText">
                                        In progress
                                    </ProgressText>
                                </Progress>
                            </CriterionContainer>
                            <TrashEditContainer>
                                <TrashContainer>
                                    <img src={edit} alt="edit" />
                                </TrashContainer>
                                <TrashContainer
                                    onClick={() => handleGetNameOfProjectForRemove(name)}
                                >
                                    <img src={trash} alt="trash" />
                                </TrashContainer>
                                <TrashContainer
                                    onClick={() => handleUploadProject(name)}
                                    disabled={isLoading}
                                >
                                    <img src={upload} alt="upload" />
                                </TrashContainer>
                                <PopUpDeleteProject handleDeleteProject={handleDeleteProject} />
                            </TrashEditContainer>
                        </ProjectContainer>
                    ))}
                </div>

                {/* <div className="Climate">
                <TitleProject>Climate Rationale Advisor</TitleProject>

    
                <ProjectContainer>
                    <NameContainer>
                        <Folder src={folder} alt="folder" />
                        <NameProject>
                            Small Farmers of Morocco Solar Farm
                        </NameProject>
                    </NameContainer>
                    <CriterionContainer>
                        <Criterion>2/6 Criterion Areas Completed</Criterion>
                        <Progress className="inprogress">
                            <ProgressText className="inprogressText">
                                In progress
                            </ProgressText>
                        </Progress>
                    </CriterionContainer>
                    <TrashContainer>
                        <img src={trash} alt="trash" />
                    </TrashContainer>
                </ProjectContainer>

                <ProjectContainer>
                    <NameContainer>
                        <Folder src={folder} alt="folder" />
                        <NameProject>
                            Small Farmers of Morocco Solar Farm
                        </NameProject>
                    </NameContainer>
                    <CriterionContainer>
                        <Criterion>2/6 Criterion Areas Completed</Criterion>
                        <Progress className="complete">
                            <ProgressText className="completeText">
                                In progress
                            </ProgressText>
                        </Progress>
                    </CriterionContainer>
                    <TrashContainer>
                        <img src={trash} alt="trash" />
                    </TrashContainer>
                </ProjectContainer>
            </div> */}
            </div>
        </>
    );
};
