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

    const { setSelectAdvisor } = useContext(ReferenceDataContext);

    //Grade a GCF Proposal
    const handleNavigateProposal = () => {
        navigate(`/dashboard/create/advisor/projectname`);
        setSelectAdvisor('Grade a GCF Proposal');
    };

    //Grade a GCF Concept Note
    const handleNavigateConcept = () => {
        navigate(`/dashboard/create/advisor/projectname`);
        setSelectAdvisor('Grade a GCF Concept Note');
    };

    return (
        <FuncBoxContainer>
            <FuncBox onClick={handleNavigateProposal}>
                <Title>New Climate Rationale Project</Title>
                <Text> Lorem ipsum dolor sit amet.</Text>
            </FuncBox>
            <FuncBox onClick={handleNavigateConcept}>
                <Title>Open Existing Climate Rationale Project</Title>
                <Text> Lorem ipsum dolor sit amet.</Text>
            </FuncBox>
        </FuncBoxContainer>
    );
};
