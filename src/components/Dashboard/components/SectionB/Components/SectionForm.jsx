import {
    Wrapper,
    InnerWrapper,
    FormContainer,
    FormGroup,
    Label,
    TextArea,
    SubmitButton,
    BtnsContainer,
    BtnsSaveAndBack,
    BtnsText,
    GobackSvg,
} from '../styles/SectionForm.styled';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import goback from 'images/header/goback.svg';

export const SectionForm = () => {
    const { projectname } = useParams();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        navigate(`/dashboard/create/sectionC/${projectname}`);
    };

    const handleNavigateBack = () => {
        navigate(-1);
    };

    return (
        <>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <Wrapper>
                    <InnerWrapper>
                        <FormGroup>
                            <Label>How does the intervention respond directly to climate change challenges/risks? (&lt;150 words)</Label>
                            <TextArea {...register('purpose')} />
                        </FormGroup>
                        <FormGroup>
                            <Label>What are the reasons the project proponent believes the intervention will have the desired outcomes? (&lt;100 words)</Label>
                            <TextArea {...register('challenges')} />
                        </FormGroup>
                        <FormGroup>
                            <Label>How does the intervention address sensitivity and/or adaptive capacity? (&lt;100 words) </Label>
                            <TextArea {...register('target')} />
                        </FormGroup>
                    </InnerWrapper>
                </Wrapper>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <SubmitButton type="submit">Next</SubmitButton>{' '}
                    <BtnsContainer>
                        <BtnsSaveAndBack onClick={handleNavigateBack}>
                            <GobackSvg src={goback} alt="goback" />
                            <BtnsText>Go Back</BtnsText>
                        </BtnsSaveAndBack>
                        <BtnsSaveAndBack>
                            <BtnsText>Save & Quit</BtnsText>
                        </BtnsSaveAndBack>
                    </BtnsContainer>
                </div>
            </FormContainer>
        </>
    );
};
