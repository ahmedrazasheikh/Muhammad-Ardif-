import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReferenceDataContext } from 'components/Context/Context';
import {
    FuncBoxContainer,
    FuncBox,
    Title,
    Text,
} from '../styles/Functions.styled';

export const Functions = ({proposal}) => {
    const navigate = useNavigate();
    const { setProposal } = useContext(ReferenceDataContext);

    //Full Proposal
    const handleNavigateFull = () => {
        navigate(`/dashboard/create/proposal/projectname`);
        setProposal('Full Proposal');
    };

    //Simplified Approval Process (SAP) Proposal
    const handleNavigateSimplified = () => {
        navigate(`/dashboard/create/proposal/projectname`);
        setProposal('Simplified Approval Process (SAP) Proposal');
    };

    return (
        <FuncBoxContainer>
            <FuncBox className="popular" onClick={handleNavigateFull}>
                <Title>Full Proposal</Title>
                <Text> Lorem ipsum dolor sit amet.</Text>
            </FuncBox>
            <FuncBox onClick={handleNavigateSimplified}>
                <Title>Simplified Approval Process (SAP) Proposal</Title>
                <Text> Lorem ipsum dolor sit amet.</Text>
            </FuncBox>
        </FuncBoxContainer>
    );
};
