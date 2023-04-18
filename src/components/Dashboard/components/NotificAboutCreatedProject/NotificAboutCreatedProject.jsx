import { Wrapper, Text, NavLink, Img } from './NotificAboutCreatedProject.styled';
import cross from 'images/header/cross.svg';
import { useParams } from 'react-router-dom';

export const NotificAboutCreatedProject = ({ setIsMessageShown }) => {
    const {projectname} = useParams()

    return (
        <Wrapper>
            <Text>
                Project "{projectname}" saved to{' '}
                <NavLink to="myprojects">My Projects</NavLink>
            </Text>
            <Img
                src={cross}
                alt="cross"
                onClick={() => setIsMessageShown(false)}
            />
        </Wrapper>
    );
};
