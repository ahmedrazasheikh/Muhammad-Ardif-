import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReferenceDataContext } from 'components/Context/Context';
import {
    FuncBoxContainer,
    FuncBox,
    Title,
    Text,
} from '../styles/Functions.styled';

export const Functions = () => {
    const navigate = useNavigate();

    const { setWhatTodo } = useContext(ReferenceDataContext);

    //Grade a GCF Proposal
    const handleNavigateProposal = () => {
        navigate('/dashboard/create/proposal');
        setWhatTodo('Grade a GCF Proposal');
    };

    //Grade a GCF Concept Note
    const handleNavigateConcept = () => {
        navigate('/dashboard/create/proposal');
        setWhatTodo('Grade a GCF Concept Note');
    };

    return (
        <FuncBoxContainer>
            <FuncBox onClick={handleNavigateProposal}>
                <Title>Grade a GCF Proposal</Title>
                <Text> Lorem ipsum dolor sit amet.</Text>
            </FuncBox>
            <FuncBox onClick={handleNavigateConcept}>
                <Title>Grade a GCF Concept Note</Title>
                <Text> Lorem ipsum dolor sit amet.</Text>
            </FuncBox>
        </FuncBoxContainer>
    );
};
