import { useNavigate, useParams } from 'react-router-dom';
import { ReferenceDataContext } from 'components/Context/Context';
import { useCallback, useContext, useEffect, useState } from 'react';
import {
    WrapperBtn,
    InnerWrapperBtn,
    NextBtn,
    RedoBtn,
    BackToCriterionBtn,
} from '../styles/Buttons.styled';
import { useDispatch, useSelector } from 'react-redux';
import { createCriterion, getData, getScore } from 'redux/projects/projectOperations';
import { Loader } from 'components/Loader/Loader';
import { Success } from 'notifications/ToastSuccess';

const scores = [
    'Low',
    'Not-Applicable',
    'Medium',
    'Medium-Low',
    'Medium-High',
    'High',
    'Negative-Impact',
];

export const Buttons = () => {
    const {
        isCompletedCriterion,
        isCompletedSubCriteria,
        criterion,
        handleNextCriteria,
        hasMoreSubcriteria,
        creteriaIndicator,
        setSubCriteriaTextInput,
        setCreteriaIndicator,
        handleCheckIsCompletedSubcriteria,
        nextCriteriaIndicator,        // creteria,
        criterions,
    } = useContext(ReferenceDataContext);

    const [loader, setLoader] = useState(false);
    const dispatch = useDispatch();
    const { email } = useSelector(state => state.auth.user);
    const { message } = useSelector(state => state.projects.getDataResults);
    const { projectname, criteria } = useParams();
    const navigate = useNavigate();

    const handleCheckIsCompletedSubcriteriaCallback = useCallback(handleCheckIsCompletedSubcriteria, []);
    useEffect(() => {
        if (criterions) {
            handleCheckIsCompletedSubcriteriaCallback();
        }
    }, [criterions, handleCheckIsCompletedSubcriteriaCallback]);

    // useEffect(() => {
    //     if (nextCriteriaIndicator !== null) {
    //       setCreteriaIndicator(nextCriteriaIndicator);
    //     }
    //   }, [nextCriteriaIndicator, setCreteriaIndicator]);


    const handleNext = async () => {         
        await setLoader(false);
        await handleCheckIsCompletedSubcriteria();

        if (isCompletedSubCriteria) {
            handleNextCriteria();
        }

        if (!hasMoreSubcriteria) {
            isSubcriteriaCompleted();
        }
        console.log("nextCriteriaIndicatorFROMRESPONSE", nextCriteriaIndicator)

        if (hasMoreSubcriteria) {
            await setLoader(true);
            handleNextCriteria();
            await dispatch(
                getData({ project_name: projectname, email: email, indicator: nextCriteriaIndicator, criterion: criteria, })
            );
            const scoreResult =
                message !== 'There is no data about this indicator in the database' ||
                message !== '' ||
                !message;

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
    };

    const isSubcriteriaCompleted = async () => {
        await setLoader(true);
        await dispatch(getScore({ criterion, scores }));
        await setLoader(false);
        await navigate(`/dashboard/create/impact/${projectname}/${criteria}/overall`); //overallfinal if needed to change
        await handleNextCriteria();
        Success('You completed all indicators');
    };
    

    useEffect(() => {
        if (isCompletedCriterion) {
            navigate(`/dashboard/create/impact/${projectname}/${criteria}/overall`); //overallfinal if needed to change
        }
    }, [criteria, isCompletedCriterion, isCompletedSubCriteria, navigate, projectname]);

    const handleBackToRedoText = () => {
        navigate(`/dashboard/create/impact/${projectname}/${criteria}`);
    };

    const handleBackToCriterionList = () => {
        navigate(`/dashboard/create/impact/${projectname}`);
        window.location.reload();
    };

    return (
        <WrapperBtn>
            {loader && <Loader />}

            <InnerWrapperBtn>
                <NextBtn onClick={handleNext} disabled={loader}>
                    {!hasMoreSubcriteria ? 'Next Subcriteria' : 'Next Indicator'}
                </NextBtn>
                <RedoBtn onClick={handleBackToRedoText}>Redo Entry</RedoBtn>
                <BackToCriterionBtn onClick={handleBackToCriterionList}>
                    Back to Criterion List
                </BackToCriterionBtn>
            </InnerWrapperBtn>
        </WrapperBtn>
    );
};
