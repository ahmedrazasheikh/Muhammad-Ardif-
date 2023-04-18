import { useNavigate, useParams } from 'react-router-dom';
import { ReferenceDataContext } from 'components/Context/Context';
import { useContext, useState } from 'react';
import { WrapperBtn, InnerWrapperBtn, NextBtn, RedoBtn } from '../styles/Buttons.styled';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getScore } from 'redux/projects/projectOperations';
import { createCriterion, getData } from 'redux/projects/projectOperations';
import { Success } from 'notifications/ToastSuccess';



export const Buttons = () => {
    const { getResultsCriterionsScore } = useSelector(state => state.projects);
    const { email } = useSelector(state => state.auth.user);
    const { message } = useSelector(state => state.projects.getDataResults);
    const {
        criterion,
        setIsCompletedSubCriteria,
        handleCheckIsCompletedSubcriteria,
        isCompletedCriterion,
    } = useContext(ReferenceDataContext);
    const dispatch = useDispatch();
    // const { email } = useSelector(state => state.auth.user);
    const { projectname, criteria } = useParams();
    const navigate = useNavigate();
    const { isCompletedSubCriteria, setPrevStateSubciteria, setSubCriteriaTextInput, creteriaIndicator, isLastValue, nextCriteriaIndicator } = useContext(ReferenceDataContext);
    const [loader, setLoader] = useState(false);

    const handleNext = async () => {
    
        setPrevStateSubciteria(false);
        setLoader(false);
        setIsCompletedSubCriteria(false);

        if (isLastValue) {
            await setLoader(true);
            await dispatch(getScore({ criterion: criterion, scores: getResultsCriterionsScore }));
            await setLoader(false);
            await navigate(`/dashboard/create/impact/${projectname}/${criteria}/overall`); //overallfinal if needed to change
            Success ("You completed criterion")
        }

        if (!isCompletedSubCriteria && !isLastValue) {
            handleCheckIsCompletedSubcriteria();
            
            await setLoader(true);
            await dispatch(
                getData({ project_name: projectname, email: email, indicator: nextCriteriaIndicator, criterion: criteria })
            );
            
            const scoreResult = message !== 'There is no data about this indicator in the database' || message !== '' || !message;

            if (scoreResult) {
                await setLoader(false);
                const submitCriteria = {
                    project_name: projectname,
                    criterion: criteria,
                    subcriteria: nextCriteriaIndicator,
                    text: localStorage.getItem('subcriteria'),
                    email: email,
                };
                await setSubCriteriaTextInput(localStorage.getItem('subcriteria'));
                await setLoader(true);
                await dispatch(createCriterion(submitCriteria));
                await setLoader(false);
                await navigate(`/dashboard/create/impact/${projectname}/${criteria}/response`);
            }
        }

        if (isCompletedCriterion) {
            await navigate(`/dashboard/create/impact/${projectname}/${criteria}/overallfinal`);
        }
    };

    const handleBackToRedoText = () => {
        navigate(`/dashboard/create/impact/${projectname}/${criteria}`);
    };

    return (
        <WrapperBtn>
            {loader && <Loader />}
            <InnerWrapperBtn>
                <NextBtn onClick={handleNext} disabled={loader}>
                    {!isCompletedCriterion ? 'Next Sub-Criteria' : 'Final Overall Score'}
                </NextBtn>
                <RedoBtn onClick={handleBackToRedoText}>Redo Entry</RedoBtn>
            </InnerWrapperBtn>
        </WrapperBtn>
    );
};
