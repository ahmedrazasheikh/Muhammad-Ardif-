import { ReferenceDataContext } from 'components/Context/Context';
import { Loader } from 'components/Loader/Loader';
import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createCriterion, getData } from 'redux/projects/projectOperations';
import { FuncBoxContainer, FuncBox, Title, Text } from '../styles/Impact.styled';
import { useEffect } from 'react';

export const ImactArea = () => {
    const { setCriterion } = useContext(ReferenceDataContext);

    const [loader, setLoader] = useState(false);
    const { projectname } = useParams();
    const dispatch = useDispatch();
    const { email } = useSelector(state => state.auth.user);
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();
    const { handleCheckIsCompletedSubcriteria, setHasMoreSubcriteria, setCriteria, handleNextCriteria } =
        useContext(ReferenceDataContext);
    const { criterions } = useSelector(state => state.projects.getDataResults);

    //Impact Potential S2_31_1_A
    const handleNavigateImpact =async (criteria) => {
        setLoader(true);
        setIsDisabled(true);
        setCriterion('impact potential');
        setCriteria(criteria);
        if (!email) {
            return;
        }

        try {
            const res = await dispatch(
                getData({
                    project_name: projectname,
                    email: email,
                    indicator: 'S2_31_1_A',
                    criterion: criteria,
                })
            );
            if (res.payload.data.score) {
                const submitCriteria = {
                    project_name: projectname,
                    criterion: criteria,
                    subcriteria: 'S2_31_1_A',
                    text: localStorage.getItem('subcriteria'),
                    email: email,
                };

                setLoader(true);

                await dispatch(createCriterion(submitCriteria));

                // if (criterions) {
                //     handleCheckIsCompletedSubcriteria();
                // }
                await setLoader(false);

                await navigate(`/dashboard/create/impact/${projectname}/${criteria}/response`);
                setHasMoreSubcriteria(true);
            } else {
                setIsDisabled(false);
                setLoader(false);
                navigate(`/dashboard/create/impact/${projectname}/${criteria}`);
            }
        } catch (err) {
            setLoader(false);
            setIsDisabled(false);
            console.log(err);
        }
    };


    

    //Paradigm Shift Potential S31_31_1_A
    const handleNavigateParadigm = async criteria => {
        setLoader(true);
        setIsDisabled(true);
        setCriterion('paradigm shift potential');
        setCriteria(criteria);
        if (!email) {
            return;
        }

        try {
            const res = await dispatch(
                getData({
                    project_name: projectname,
                    email: email,
                    indicator: 'S31_31_1_A',
                    criterion: criteria,
                })
            );
            if (res.payload.data.score) {
                const submitCriteria = {
                    project_name: projectname,
                    criterion: criteria,
                    subcriteria: 'S31_31_1_A',
                    text: localStorage.getItem('subcriteria'),
                    email: email,
                };

                setLoader(true);
                await dispatch(createCriterion(submitCriteria));

                // await handleCheckIsCompletedSubcriteria();
                await setLoader(false);

                await navigate(`/dashboard/create/impact/${projectname}/${criteria}/response`);
                setHasMoreSubcriteria(true);
            } else {
                setIsDisabled(false);
                setLoader(false);
                navigate(`/dashboard/create/impact/${projectname}/${criteria}`);
            }
        } catch (err) {
            setLoader(false);
            setIsDisabled(false);
            console.log(err);
        }
    };

    //Sustainable Development Potential S13_31_1
    const handleNavigateSustainable = async criteria => {
        setLoader(true);
        setIsDisabled(true);
        setCriterion('sustainable development');
        setCriteria(criteria);
        if (!email) {
            return;
        }

        try {
            const res = await dispatch(
                getData({
                    project_name: projectname,
                    email: email,
                    indicator: 'S13_31_1',
                    criterion: criteria,
                })
            );
            if (res.payload.data.score) {
                const submitCriteria = {
                    project_name: projectname,
                    criterion: criteria,
                    subcriteria: 'S13_31_1',
                    text: localStorage.getItem('subcriteria'),
                    email: email,
                };

                setLoader(true);
                await dispatch(createCriterion(submitCriteria));

                // await handleCheckIsCompletedSubcriteria();
                await setLoader(false);

                await navigate(`/dashboard/create/impact/${projectname}/${criteria}/response`);
                setHasMoreSubcriteria(true);
            } else {
                setIsDisabled(false);
                setLoader(false);
                navigate(`/dashboard/create/impact/${projectname}/${criteria}`);
            }
        } catch (err) {
            setLoader(false);
            setIsDisabled(false);
            console.log(err);
        }
    };

    //Needs of the Recepient S17_31_1_A
    const handleNavigateCreate = async criteria => {
        setLoader(true);
        setIsDisabled(true);
        setCriterion('needs of the recipient');
        setCriteria(criteria);
        if (!email) {
            return;
        }

        try {
            const res = await dispatch(
                getData({
                    project_name: projectname,
                    email: email,
                    indicator: 'S17_31_1_A',
                    criterion: criteria,
                })
            );
            if (res.payload.data.score) {
                const submitCriteria = {
                    project_name: projectname,
                    criterion: criteria,
                    subcriteria: 'S17_31_1_A',
                    text: localStorage.getItem('subcriteria'),
                    email: email,
                };

                setLoader(true);
                await dispatch(createCriterion(submitCriteria));

                // await handleCheckIsCompletedSubcriteria();
                await setLoader(false);

                await navigate(`/dashboard/create/impact/${projectname}/${criteria}/response`);
                setHasMoreSubcriteria(true);
            } else {
                setIsDisabled(false);
                setLoader(false);
                navigate(`/dashboard/create/impact/${projectname}/${criteria}`);
            }
        } catch (err) {
            setLoader(false);
            setIsDisabled(false);
            console.log(err);
        }
    };

    //Country Ownership S22_31_1
    const handleNavigateFunder = async criteria => {
        setLoader(true);
        setIsDisabled(true);
        setCriterion('country ownership');
        setCriteria(criteria);
        if (!email) {
            return;
        }

        try {
            const res = await dispatch(
                getData({
                    project_name: projectname,
                    email: email,
                    indicator: 'S22_31_1',
                    criterion: criteria,
                })
            );
            if (res.payload.data.score) {
                const submitCriteria = {
                    project_name: projectname,
                    criterion: criteria,
                    subcriteria: 'S22_31_1',
                    text: localStorage.getItem('subcriteria'),
                    email: email,
                };

                setLoader(true);
                await dispatch(createCriterion(submitCriteria));

                // await handleCheckIsCompletedSubcriteria();
                await setLoader(false);

                await navigate(`/dashboard/create/impact/${projectname}/${criteria}/response`);
                setHasMoreSubcriteria(true);
            } else {
                setIsDisabled(false);
                setLoader(false);
                navigate(`/dashboard/create/impact/${projectname}/${criteria}`);
            }
        } catch (err) {
            setLoader(false);
            setIsDisabled(false);
            console.log(err);
        }
    };

    //Efficiency and Effectiveness S30_31_1_A
    const handleNavigatePlayhouse = async criteria => {
        setLoader(true);
        setIsDisabled(true);
        setCriterion('efficiency and effectiveness');
        setCriteria(criteria);
        if (!email) {
            return;
        }

        try {
            const res = await dispatch(
                getData({
                    project_name: projectname,
                    email: email,
                    indicator: 'S30_31_1_A',
                    criterion: criteria,
                })
            );
            if (res.payload.data.score) {
                const submitCriteria = {
                    project_name: projectname,
                    criterion: criteria,
                    subcriteria: 'S30_31_1_A',
                    text: localStorage.getItem('subcriteria'),
                    email: email,
                };

                setLoader(true);

                
                await dispatch(createCriterion(submitCriteria));
                // await handleCheckIsCompletedSubcriteria();
                await setLoader(false);

                await navigate(`/dashboard/create/impact/${projectname}/${criteria}/response`);
                setHasMoreSubcriteria(true);
            } else {
                setIsDisabled(false);
                setLoader(false);
                navigate(`/dashboard/create/impact/${projectname}/${criteria}`);
            }
        } catch (err) {
            setLoader(false);
            setIsDisabled(false);
            console.log(err);
        }
    };

    return (
        <FuncBoxContainer>
            {loader && <Loader />}
            <FuncBox disabled={isDisabled} onClick={() => handleNavigateImpact('Impact Potential')}>
                <Title>Impact Potential</Title>
                <Text> Lorem ipsum dolor sit amet.</Text>
            </FuncBox>
            <FuncBox
                disabled={isDisabled}
                onClick={() => handleNavigateParadigm('Paradigm Shift Potential')}
            >
                <Title>Paradigm Shift Potential</Title>
                <Text> Lorem ipsum dolor sit amet.</Text>
            </FuncBox>
            <FuncBox
                disabled={isDisabled}
                onClick={() => handleNavigateSustainable('Sustainable Development')}
            >
                <Title>Sustainable Development Potential</Title>
                <Text> Lorem ipsum dolor sit amet.</Text>
            </FuncBox>
            <FuncBox
                disabled={isDisabled}
                onClick={() => handleNavigateCreate('Needs of the Recipient')}
            >
                <Title>Needs of the Recepient</Title>
                <Text> Lorem ipsum dolor sit amet.</Text>
            </FuncBox>
            <FuncBox
                disabled={isDisabled}
                onClick={() => handleNavigateFunder('Country Ownership')}
            >
                <Title>Country Ownership</Title>
                <Text> Lorem ipsum dolor sit amet.</Text>
            </FuncBox>
            <FuncBox
                disabled={isDisabled}
                onClick={() => handleNavigatePlayhouse('Efficiency and Effectiveness')}
            >
                <Title>Efficiency and Effectiveness</Title>
                <Text> Lorem ipsum dolor sit amet.</Text>
            </FuncBox>
        </FuncBoxContainer>
    );
};
