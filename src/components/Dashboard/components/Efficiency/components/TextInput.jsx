import { useNavigate, useParams } from 'react-router-dom';
import {
    Form,
    TextArea,
    WordCount,
    InputWrapper,
    BackgroundCounter,
    BtnSubmit,
    BtnsSaveAndBack,
    GobackSvg,
    BtnsContainer,
    BtnsText,
    LoaderContainer,
    LoaderImg,
    LoaderText,
} from '../styles/TextInput.styled';
import { useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import goback from 'images/header/goback.svg';
import loaderImg from 'images/header/loader.png';
import { ReferenceDataContext } from 'components/Context/Context';
import { useDispatch, useSelector } from 'react-redux';
import { createCriterion } from 'redux/projects/projectOperations';
import { ErrorMessage } from 'notifications/ToastError';

export const TextInput = ({ loader, setLoader }) => {
    const { register, handleSubmit } = useForm({ mode: 'onBlur' });
    const [wordCount, setWordCount] = useState(0);
    const navigave = useNavigate();
    const dispatch = useDispatch();
    const { score } = useSelector(state => state.projects.getDataResults);

    const { projectname, criteria } = useParams();
    const { creteriaIndicator, setSubCriteriaTextInput, handleCheckIsCompletedSubcriteria } =
        useContext(ReferenceDataContext);
    const { email } = useSelector(state => state.auth.user);

    const updateWordCount = event => {
        const inputText = event.target.value;
        const count = inputText.trim().split(/\s+/).filter(Boolean).length;
        if (count <= 1000) {
            setWordCount(count);
        } else {
            // Optionally show an error message
            ErrorMessage("You've reached the word limit");
            event.target.value = inputText.slice(0, inputText.lastIndexOf(' ', 999)) + ' ';
        }
    };

    const onSubmit = async data => {
        const submitCriteria = {
            project_name: projectname,
            criterion: criteria,
            subcriteria: creteriaIndicator,
            text: data.message,
            email: email,
        };

        setSubCriteriaTextInput(data.message);
        setLoader(true);
        await dispatch(createCriterion(submitCriteria));
        await setLoader(false);

        await navigave(`/dashboard/create/impact/${projectname}/${criteria}/response`);
        await handleCheckIsCompletedSubcriteria();
        // await handleNextCriteria()
    };

    const handleNavigateBack = () => {
        navigave(-1);
    };

    return (
        <>
            {!loader ? (
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputWrapper style={{ textAlign: 'start' }}>
                        <TextArea
                            type="text"
                            {...register('message', {
                                required: true,
                            })}
                            onChange={updateWordCount}
                        />
                        <BackgroundCounter>
                            <WordCount>Word Count: {wordCount}</WordCount>
                        </BackgroundCounter>
                    </InputWrapper>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <BtnSubmit type="submit" disabled={loader}>
                            Submit
                        </BtnSubmit>
                        <BtnsContainer>
                            <BtnsSaveAndBack onClick={handleNavigateBack}>
                                <GobackSvg src={goback} alt="goback" />
                                <BtnsText>Go Back</BtnsText>
                            </BtnsSaveAndBack>
                            {/* <BtnsSaveAndBack>
                                <BtnsText>Save & Quit</BtnsText>
                            </BtnsSaveAndBack> */}
                        </BtnsContainer>
                    </div>
                </Form>
            ) : (
                <LoaderContainer>
                    <LoaderImg src={loaderImg} alt="loaderImg" />
                    <LoaderText>Analyzing your proposal...</LoaderText>
                </LoaderContainer>
            )}
        </>
    );
};
