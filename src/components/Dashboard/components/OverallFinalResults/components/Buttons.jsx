import { useNavigate, useParams } from 'react-router-dom';
import { WrapperBtn, InnerWrapperBtn, NextBtn, RedoBtn } from '../styles/Buttons.styled';
import { Loader } from 'components/Loader/Loader';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getScore } from 'redux/projects/projectOperations';
import { useContext } from 'react';
import { ReferenceDataContext } from 'components/Context/Context';
import { useEffect } from 'react';

export const Buttons = () => {
    const [loader, setLoader] = useState(false);
    const { getResultsCriterionsScore, isCompletedCriterion } = useSelector(state => state.projects);
    const { criterion } = useContext(ReferenceDataContext);
    const { projectname, criteria } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isCompletedCriterion) {
            setLoader(true);
            dispatch(getScore({ criterion : criterion, scores: getResultsCriterionsScore }));
            setLoader(false);
            navigate(`/dashboard/create/impact/${projectname}/${criteria}/overallfinal`);
        }
    }, [criteria, criterion, dispatch, getResultsCriterionsScore, isCompletedCriterion, navigate, projectname]);

    const handleNext = async () => {
        await navigate(`/dashboard/create/impact/${projectname}`);
        await window.location.reload();
    };

    const handleBackToRedoText = () => {
        navigate(`/dashboard/create/impact/${projectname}/${criteria}`);
    };

    return (
        <WrapperBtn>
            {loader && <Loader />}
            <InnerWrapperBtn>
                <NextBtn onClick={handleNext}>Finish & Save</NextBtn>
                <RedoBtn onClick={handleBackToRedoText}>Redo Entry</RedoBtn>
            </InnerWrapperBtn>
        </WrapperBtn>
    );
};
