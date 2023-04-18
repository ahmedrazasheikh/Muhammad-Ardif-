import { ReferenceDataContext } from 'components/Context/Context';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { TitleText } from '../styles/Title.styled';

export const Title = () => {
    const { creteriaIndicator } = useContext(ReferenceDataContext);
    const { score } = useSelector(state => state.projects.gradeProject);
    
    if (!score) {
       return 
    }
    const scoreUpperCase = score.toUpperCase()
    
    let color;

    if (scoreUpperCase === 'LOW') {
        color = 'Red';
    }
    if (scoreUpperCase === 'NO') {
        color = 'Red';
    }
    if (scoreUpperCase === 'NEGATIVE_IMPACT') {
        color = 'Red';
    }
    if (scoreUpperCase === 'NOT-APPLICABLE' || scoreUpperCase === 'ON') {
        color = 'Red';
    }
    if (scoreUpperCase === 'MEDIUM') {
        color = 'orange';
    }
    if (scoreUpperCase === 'MEDIUM-LOW') {
        color = 'orange';
    }
    if (scoreUpperCase === 'MEDIUM-HIGH') {
        color = 'orange';
    }
    if (scoreUpperCase === 'HIGH') {
        color = 'green';
    }

    switch (creteriaIndicator) {
        case 'S2_31_1_A':
            return (
                <TitleText>
                Contribution to Increased Climate-Resilient Sustainable Development is {' '}
                <span style={{ color }}>{scoreUpperCase}</span>
              </TitleText>
            );
        case 'S2_31_1_B':
            return (
                <TitleText>
                    Contribution to Increased Climate-Resilient Sustainable Development is {' '}
                    <span style={{ color }}>{scoreUpperCase}</span>
                </TitleText>
            );
        case 'S31_31_1_A':
            return (
                <TitleText>
                    Innovation is {' '}
                    <span style={{ color }}>{scoreUpperCase}</span>
                </TitleText>
            );
            case 'S31_31_1_B':
                return (
                    <TitleText>
                        Innovation is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S5_31_1_A':
                return (
                    <TitleText>
                  Potential For Expanding The Scale And Impact of the Project is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S5_31_1_B':
                return (
                    <TitleText>
                  Potential For Expanding The Scale And Impact of the Project is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S7_31_1':
                return (
                    <TitleText>
                  Contribution to the Creation Or Strengthening of knowledge, Collective Learning is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S9_31_1':
                return (
                    <TitleText>
                  Market Development and Transformation is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S10_31_1':
                return (
                    <TitleText>
                  Potential For Strengthening Regulatory Frameworks and Policies is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S13_31_1':
                return (
                    <TitleText>
                  Expected Positive Environmental impacts is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S14_31_1':
                return (
                    <TitleText>
                  Expected Positive Environmental impacts is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S15_31_1':
                return (
                    <TitleText>
                  Expected Positive Environmental impacts is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S16_31_1':
                return (
                    <TitleText>
                  Potential for Reduced Gender Inequalities in Climate change Impacts is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S17_31_1_A':
                return (
                    <TitleText>
                  Scale and Intensity of Exposure is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S17_31_1_B':
                return (
                    <TitleText>
                  Scale and Intensity of Exposure is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S20_31_1':
                return (
                    <TitleText>
                  Opportunities For the Fund to Overcome Specific Barriers is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S22_31_1':
                return (
                    <TitleText>
                  Objectives Are In Line With Priorities in the Countryâ€™s National Climate Strategy is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S23_31_1':
                return (
                    <TitleText>
                  Proposed Activity is Designed in Cognizance OF Other Country Policies is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S24_31_1_AE':
                return (
                    <TitleText>
                  AE or EE experience working in the project country of implementation is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S24_31_1_EE':
                return (
                    <TitleText>
                  AE or EE experience working in the project country of implementation is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S24_31_2_AE':
                return (
                    <TitleText>
                  AE or EE experience working in the project country of implementation is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S24_31_2_EE':
                return (
                    <TitleText>
                  AE or EE experience working in the project country of implementation is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S25_31_1':
                return (
                    <TitleText>
                  AE or EE experience working in the project country of implementation is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S25_31_2_A':
                return (
                    <TitleText>
                  AE or EE experience working in the project country of implementation is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S25_31_2_B':
                return (
                    <TitleText>
                  AE or EE experience working in the project country of implementation is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S25_31_2_C':
                return (
                    <TitleText>
                  AE or EE experience working in the project country of implementation is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S25_31_2_D':
                return (
                    <TitleText>
                  AE or EE experience working in the project country of implementation is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S25_31_2_E':
                return (
                    <TitleText>
                  AE or EE experience working in the project country of implementation is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S25_31_3_A':
                return (
                    <TitleText>
                  AE or EE experience working in the project country of implementation is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S25_31_3_B':
                return (
                    <TitleText>
                  AE or EE experience working in the project country of implementation is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S25_31_3_C':
                return (
                    <TitleText>
                  AE or EE experience working in the project country of implementation is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S30_31_1_A':
                return (
                    <TitleText>
                  Financial Viability in the Long Run is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S30_31_1_B':
                return (
                    <TitleText>
                 Financial Viability in the Long Run is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
            case 'S30_31_3':
                return (
                    <TitleText>
                  Financial Viability in the Long Run is {' '}
                        <span style={{ color }}>{scoreUpperCase}</span>
                    </TitleText>
                );
        default:
            return 'Unknown';
    }
};
