import { useLocation, useParams } from 'react-router-dom';
import {
    ProjectNameText,
    InnerWrapper,
    Creteria,
    CreteriaContainer,
    HelpSvg,
    CreteriaHelper,
    CreteriaHelperWrapper,
    CreteriaHelperText,
    CreteriaHelperIndicator,
} from './styles/ProjectInfo.styled';
import help from 'images/header/help.svg';
import { useContext, useEffect, useState } from 'react';
import { ReferenceDataContext } from 'components/Context/Context';

export const ProjectInfo = () => {
    const location = useLocation();

    const {
        impactCriteria,
        paradigmCriteria,
        sustainableCriteria,
        recipientCriteria,
        countryCriteria,
        efficiencyCriteria,
        setSubCriteriaName,
        setSubCriteriaIndicator,
        setSubCriteriaNameIndex,
        setSubCriteriaIndicatorIndex,
        setCriteria,

        creteriaIndicator,
        setCreteriaIndicator,

        currentCriteriaIndex,
        currentCriteriaValueIndex,

        creteriaName,
        setCreteriaName,
        isCompletedCriterion,
    } = useContext(ReferenceDataContext);

    const { projectname, criteria } = useParams();

    const [isHelperCretiria, setIsHelperCretiria] = useState(false);
    const [isHelperCretiriaIndocator, setIsHelperCretiriaIndicator] = useState(false);

    useEffect(() => {
        setSubCriteriaName(currentCriteriaIndex);
        setSubCriteriaIndicator(currentCriteriaValueIndex[0]);

        setSubCriteriaNameIndex(currentCriteriaIndex);
        setSubCriteriaIndicatorIndex(currentCriteriaValueIndex);

        setCriteria(criteria);
    }, [
        criteria,
        currentCriteriaIndex,
        currentCriteriaValueIndex,
        setCriteria,
        setSubCriteriaIndicator,
        setSubCriteriaIndicatorIndex,
        setSubCriteriaName,
        setSubCriteriaNameIndex,
    ]);

    const handleHelperCriteria = () => {
        setIsHelperCretiria(!isHelperCretiria);
    };

    const handleHelperCriteriaIndicator = () => {
        setIsHelperCretiriaIndicator(!isHelperCretiriaIndocator);
    };

    const changeCriteriaIndicatorName = indicator => {
        switch (indicator) {
            case 'S2_31_1_A':
                return 'S2/31.1 A';
            case 'S2_31_1_B':
                return 'S2/31.1 B';
            case 'S31_31_1_A':
                return 'S31/31.1 A';
            case 'S31_31_1_B':
                return 'S31/31.1 B';
            case 'S5_31_1_A':
                return 'S5/31.1 A';
            case 'S5_31_1_B':
                return 'S5/31.1 B';
            case 'S7_31_1':
                return 'S7/31.1';
            case 'S9_31_1':
                return 'S9/31.1';
            case 'S10_31_1':
                return 'S10/31.1';
            case 'S13_31_1':
                return 'S13/31.1';
            case 'S14_31_1':
                return 'S14/31.1';
            case 'S15_31_1':
                return 'S15/31.1';
            case 'S16_31_1':
                return 'S16/31.1';
            case 'S17_31_1_A':
                return 'S17/31.1 A';
            case 'S17_31_1_B':
                return 'S17/31.1 B';
            case 'S20_31_1':
                return 'S20/31.1';
            case 'S22_31_1':
                return 'S22/31.1';
            case 'S23_31_1':
                return 'S23/31.1';
            case 'S24_31_1_AE':
                return 'S24/31.1 AE';
            case 'S24_31_1_EE':
                return 'S24/31.1 EE';
            case 'S24_31_2_AE':
                return 'S24/31.2 AE';
            case 'S24_31_2_EE':
                return 'S24/31.2 EE';
            case 'S25_31_1':
                return 'S25/31.1';
            case 'S25_31_2_A':
                return 'S25/31.2 A';
            case 'S25_31_2_B':
                return 'S25/31.2 B';
            case 'S25_31_2_C':
                return 'S25/31.2 C';
            case 'S25_31_2_D':
                return 'S25/31.2 D';
            case 'S25_31_2_E':
                return 'S25/31.2 E';
            case 'S25_31_3_A':
                return 'S25/31.3 A';
            case 'S25_31_3_B':
                return 'S25/31.3 B';
            case 'S25_31_3_C':
                return 'S25/31.3 C';
            case 'S30_31_1_A':
                return 'S30/31.1 A';
            case 'S30_31_1_B':
                return 'S30/31.1 B';
            case 'S30_31_3':
                return 'S30/31.3';
            default:
                return 'Unknown';
        }
    };

    const pathPattern = /^\/dashboard\/create\/impact\/[^/]+\/[^/]+(?:\/[^/]+)?$/;
    const shouldShowSaveButton = location.pathname.match(pathPattern);

    useEffect(() => {
        /* Impact Potential Overall Score */
        if (criteria === 'Impact Potential') {
            impactCriteria.forEach(() => {
                setCreteriaName(impactCriteria[currentCriteriaIndex].key);
                setCreteriaIndicator(
                    impactCriteria[currentCriteriaIndex].value[currentCriteriaValueIndex]
                );
            });
        }
    }, [
        criteria,
        currentCriteriaIndex,
        currentCriteriaValueIndex,
        impactCriteria,
        setCreteriaIndicator,
        setCreteriaName,
    ]);

    useEffect(() => {
        /* Paradigm Shift Potential Overall Score */
        if (criteria === 'Paradigm Shift Potential') {
            paradigmCriteria.forEach(() => {
                setCreteriaName(paradigmCriteria[currentCriteriaIndex].key);
                setCreteriaIndicator(
                    paradigmCriteria[currentCriteriaIndex].value[currentCriteriaValueIndex]
                );
            });
        }
    }, [
        criteria,
        currentCriteriaIndex,
        currentCriteriaValueIndex,
        paradigmCriteria,
        setCreteriaIndicator,
        setCreteriaName,
    ]);

    useEffect(() => {
        /* Sustainable Development Overall Score */
        if (criteria === 'Sustainable Development') {
            sustainableCriteria.forEach(() => {
                setCreteriaName(sustainableCriteria[currentCriteriaIndex].key);
                setCreteriaIndicator(
                    sustainableCriteria[currentCriteriaIndex].value[currentCriteriaValueIndex]
                );
            });
        }
    }, [
        criteria,
        currentCriteriaIndex,
        currentCriteriaValueIndex,
        setCreteriaIndicator,
        setCreteriaName,
        sustainableCriteria,
    ]);

    useEffect(() => {
        /* Needs of the Recipient Overall Score */
        if (criteria === 'Needs of the Recipient') {
            recipientCriteria.forEach(() => {
                setCreteriaName(recipientCriteria[currentCriteriaIndex].key);
                setCreteriaIndicator(
                    recipientCriteria[currentCriteriaIndex].value[currentCriteriaValueIndex]
                );
            });
        }
    }, [
        criteria,
        currentCriteriaIndex,
        currentCriteriaValueIndex,
        recipientCriteria,
        setCreteriaIndicator,
        setCreteriaName,
    ]);

    useEffect(() => {
        /* Country Ownership Overall Score */
        if (criteria === 'Country Ownership') {
            countryCriteria.forEach(() => {
                setCreteriaName(countryCriteria[currentCriteriaIndex].key);
                setCreteriaIndicator(
                    countryCriteria[currentCriteriaIndex].value[currentCriteriaValueIndex]
                );
            });
        }
    }, [
        countryCriteria,
        criteria,
        currentCriteriaIndex,
        currentCriteriaValueIndex,
        setCreteriaIndicator,
        setCreteriaName,
    ]);

    useEffect(() => {
        /* Efficiency and Effectiveness Overall Score */
        if (criteria === 'Efficiency and Effectiveness') {
            efficiencyCriteria.forEach(() => {
                setCreteriaName(efficiencyCriteria[currentCriteriaIndex].key);
                setCreteriaIndicator(
                    efficiencyCriteria[currentCriteriaIndex].value[currentCriteriaValueIndex]
                );
            });
        }
    }, [
        criteria,
        currentCriteriaIndex,
        currentCriteriaValueIndex,
        efficiencyCriteria,
        setCreteriaIndicator,
        setCreteriaName,
    ]);

    return (
        <div style={{ borderBottom: '1px solid #dde2e4' }}>
            <InnerWrapper className="dashboard">
                <div>
                    <ProjectNameText>
                        Project Name:{' '}
                        <span style={{ color: '#000', marginLeft: 8 }}>{projectname}</span>
                    </ProjectNameText>
                    {shouldShowSaveButton && (
                        <>

                        {!isCompletedCriterion &&  <ProjectNameText>
                            Sub-criteria:{' '}
                            <CreteriaContainer>
                                <Creteria>
                                    {' '}
                                    <span>{creteriaName}</span>
                                </Creteria>
                                <HelpSvg src={help} alt="help" onClick={handleHelperCriteria} />
                                {isHelperCretiria && (
                                    <CreteriaHelper>
                                        <CreteriaHelperWrapper>
                                            <CreteriaHelperText>
                                                {`The ${creteriaName} is the sub-criteria part of the ${changeCriteriaIndicatorName(
                                                    creteriaIndicator
                                                )} criterion which...`}
                                            </CreteriaHelperText>
                                        </CreteriaHelperWrapper>
                                    </CreteriaHelper>
                                )}
                            </CreteriaContainer>
                            <span style={{ color: '#000' }}></span>
                        </ProjectNameText>}
                        </>
                       
                    )}
                </div>
                {shouldShowSaveButton && (
                    <div style={{ textAlign: 'end' }}>
                        <ProjectNameText>
                            Criterion:{' '}
                            <span style={{ color: '#000', marginLeft: 8 }}>{criteria}</span>
                        </ProjectNameText>
                        {!isCompletedCriterion && <ProjectNameText>
                            Indicator:{' '}
                            <CreteriaContainer>
                                <Creteria>
                                    {' '}
                                    {changeCriteriaIndicatorName(creteriaIndicator)}
                                </Creteria>
                                <HelpSvg
                                    src={help}
                                    alt="help"
                                    onClick={handleHelperCriteriaIndicator}
                                />
                                {isHelperCretiriaIndocator && (
                                    <CreteriaHelperIndicator>
                                        <CreteriaHelperWrapper>
                                            <CreteriaHelperText>
                                                {` The ${changeCriteriaIndicatorName(
                                                    creteriaIndicator
                                                )} Indicator is part of the sub-criteria grading....`}
                                            </CreteriaHelperText>
                                        </CreteriaHelperWrapper>
                                    </CreteriaHelperIndicator>
                                )}
                            </CreteriaContainer>
                        </ProjectNameText>}
                        
                    </div>
                )}
            </InnerWrapper>
        </div>
    );
};
