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
        navigate(`/dashboard/create/sectionD/${projectname}`);
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
                            <Label>
                                Why is the project proponent choosing or to prioritize this specific
                                options/ intervention over others? (&lt;150 words)
                            </Label>
                            <TextArea {...register('purpose')} />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Describe the economic, technical and multi-criteria analyses
                                conducted to prioritize interventions (&lt;100 words)
                            </Label>
                            <TextArea {...register('challenges')} />
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
