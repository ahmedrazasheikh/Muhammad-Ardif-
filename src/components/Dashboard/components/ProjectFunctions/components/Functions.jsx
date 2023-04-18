import {  useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReferenceDataContext } from 'components/Context/Context';

import {
    FuncBoxContainer,
    FuncBox,
    Title,
    Text,
    Avability,
    AvabilityText,
} from '../styles/Functions.styled';

export const Functions = () => {
    const navigate = useNavigate();
    const {setSelectFunction} = useContext(ReferenceDataContext)

    //Grade a GCF Concept Note or Proposal
    const handleNavigateGrade = () => {
        navigate('todo');
        setSelectFunction('Grade a GCF Concept Note or Proposal');
    };

    //Draft a GCF Concept Note Or Proposal
    const handleNavigateDraft = () => {
        // navigate('todo');
        setSelectFunction('Draft a GCF Concept Note Or Proposal');
    };

    //Climate Rationale Advisor
    const handleNavigateClimate = () => {
        navigate('advisor');
        setSelectFunction('Climate Rationale Advisor');
    };

    //Create Project Structure Plan
    const handleNavigateCreate = () => {
        // navigate('todo');
        setSelectFunction('Create Project Structure Plan');
    };

    //Funder Matchmake
    const handleNavigateFunder = () => {
        // navigate('todo');
        setSelectFunction('Funder Matchmake');
    };

    //AI Playhouse
    const handleNavigatePlayhouse = () => {
        // navigate('todo');
        setSelectFunction('AI Playhouse');
    };

    return (
  
            <FuncBoxContainer>
                <FuncBox className="commingSoon" onClick={handleNavigateDraft}>
                    <Avability className="comesoon">
                    <AvabilityText>Comming Soon</AvabilityText>
                    </Avability>
                    <Title>Draft a GCF Concept Note Or Proposal</Title>
                    <Text> Lorem ipsum dolor sit amet.</Text>
                </FuncBox>
                <FuncBox
                    className="commingSoon"
                    onClick={handleNavigateClimate}
                >
                    <Avability className="available">
                        <AvabilityText>Available</AvabilityText>
                    </Avability>
                    <Title>Climate Rationale Advisor</Title>
                    <Text> Lorem ipsum dolor sit amet.</Text>
                </FuncBox>
                <FuncBox className="popular" onClick={handleNavigateGrade}>
                    <Avability className="mostpopular">
                        <AvabilityText className="mostpopularText">
                            Most Popular
                        </AvabilityText>
                    </Avability>
                    <Title>Grade a GCF Concept Note or Proposal</Title>
                    <Text> Lorem ipsum dolor sit amet.</Text>
                </FuncBox>
                <FuncBox className="commingSoon" onClick={handleNavigateCreate}>
                    <Avability className="comesoon">
                    <AvabilityText>Comming Soon</AvabilityText>
                    </Avability>
                    <Title>Create Project Structure Plan</Title>
                    <Text> Lorem ipsum dolor sit amet.</Text>
                </FuncBox>
                <FuncBox className="commingSoon" onClick={handleNavigateFunder}>
                    <Avability className="comesoon">
                    <AvabilityText>Comming Soon</AvabilityText>
                    </Avability>
                    <Title>Funder Matchmaker</Title>
                    <Text> Lorem ipsum dolor sit amet.</Text>
                </FuncBox>
                <FuncBox
                    className="commingSoon"
                    onClick={handleNavigatePlayhouse}
                >
                    <Avability className="comesoon">
                        <AvabilityText>Comming Soon</AvabilityText>
                    </Avability>
                    <Title>AI Playhouse</Title>
                    <Text> Lorem ipsum dolor sit amet.</Text>
                </FuncBox>
            </FuncBoxContainer>
    
    );
};
