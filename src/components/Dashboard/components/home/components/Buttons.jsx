import { useNavigate } from 'react-router-dom';
import { BtnWrapper, CreateBtn, TextBtn } from '../styles/Buttons.styled';

export const Buttons = () => {
    const navigate = useNavigate();
    
    const handleNavigateToCreateNewProject = () => {
        navigate('/dashboard/create');
    };
    const handleNavigateToMyProjects = () => {
        navigate('/dashboard/myprojects');
    };

    return (
        <BtnWrapper>
            <CreateBtn onClick={handleNavigateToCreateNewProject}>
                <TextBtn>New Project</TextBtn>
            </CreateBtn>
            <CreateBtn onClick={handleNavigateToMyProjects}>
                <TextBtn>Open Existing Project</TextBtn>
            </CreateBtn>
        </BtnWrapper>
    );
};
