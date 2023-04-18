// import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useProjectName } from 'hooks/useProjectName';
import { projectsPost, projectsAdvisorPost } from 'redux/projects/projectOperations';
import { ReferenceDataContext } from 'components/Context/Context';
import { Form, Label, Input, SubmitButton } from '../styles/NameProjectInput.styled';
import { Loader } from 'components/Loader/Loader';

export const NameProjectInput = () => {
    const { register, handleSubmit, watch, reset } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [hasFocus, setHasFocus] = useState(false);
    const { email } = useSelector(state => state.auth.user);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputFocus = () => {
        setHasFocus(true);
    };

    const handleInputBlur = () => {
        setHasFocus(false);
    };

    const location = useLocation();
    const isProposalProjectNamePage = location.pathname.includes(
        '/dashboard/create/proposal/projectname'
    );
    const isAdvisorProjectNamePage = location.pathname.includes(
        '/dashboard/create/advisor/projectname'
    );

    const { selectFunction } = useContext(ReferenceDataContext);
    const { proposals } = useContext(ReferenceDataContext);
    const { whatTodo } = useContext(ReferenceDataContext);
    const { selectAdvisor } = useContext(ReferenceDataContext);

    const onSubmit = async data => {
        if (!data) {
            return;
        }
        setIsLoading(true);
        const createProject = {
            email: email,
            projectname: data.projectname,
            proposal: proposals,
            whatTodo: whatTodo,
            selectFunction: selectFunction,
            selectAdvisor: selectAdvisor,
        };

        if (isAdvisorProjectNamePage) {
            await dispatch(projectsAdvisorPost(createProject));
            await setIsLoading(false);
            await navigate(`/dashboard/create/sectionA/${createProject.projectname}`);
        }
        if (isProposalProjectNamePage) {
            await dispatch(projectsPost(createProject));
            await setIsLoading(false);
            await navigate(`/dashboard/create/impact/${createProject.projectname}`);
        }
        reset();
        
    };

    const hasProjectNameValue = useProjectName(watch);

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {isLoading && <Loader />}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor="projectname">Enter Project Name</Label>
                <Input
                    placeholder="Small Farmers of Morocco Solar Farm Concept"
                    type="text"
                    id="projectname"
                    {...register('projectname', { required: true })}
                    hasValue={hasProjectNameValue}
                    hasFocus={hasFocus}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />

                <SubmitButton type="submit" disabled={isLoading}>Next</SubmitButton>
            </Form>
        </div>
    );
};
