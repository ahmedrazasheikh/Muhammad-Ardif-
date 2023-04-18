import {
    Wrapper,
    InnerWrapper,
    FormContainer,
    FormGroup,
    Label,
    InputContainer,
    Input,
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
        navigate(`/dashboard/create/sectionB/${projectname}`);
    };

    const handleNavigateBack = () => {
        navigate(-1);
    };

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <Wrapper>
                <InnerWrapper>
                    <InputContainer>
                        <FormGroup>
                            <Label>Region or country name:</Label>
                            <Input type="text" {...register('region')} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Name of the project/programme:</Label>
                            <Input
                                type="text"
                                defaultValue={projectname}
                                {...register('project')}
                            />
                        </FormGroup>
                    </InputContainer>
                    <FormGroup>
                        <Label>
                            Describe the purpose of the intervention/programme; the target
                            beneficiaries, and expected results (&lt;150 words):
                        </Label>
                        <TextArea {...register('purpose')} />
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            What are the relevant climate challenges and risks the sector faces?
                            (&lt;150 words):
                        </Label>
                        <TextArea {...register('challenges')} />
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Describe target populations and explain how the interventions benefit
                            these groups. (&lt;100 words):
                        </Label>
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
    );
};
