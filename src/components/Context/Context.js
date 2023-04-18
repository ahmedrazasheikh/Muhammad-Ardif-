import { createContext, useState } from 'react';
import { useSelector } from 'react-redux';

const impactCriteria = [
    {
        key: 'Contribution to Increased Climate-Resilient Sustainable Development',
        value: ['S2_31_1_A', 'S2_31_1_B'],
    },
];

const paradigmCriteria = [
    { key: 'Innovation', value: ['S31_31_1_A', 'S31_31_1_B'] },
    {
        key: 'Potential For Expanding The Scale And Impact of the Project',
        value: ['S5_31_1_A', 'S5_31_1_B'],
    },
    {
        key: 'Contribution to the Creation Or Strengthening of knowledge, Collective Learning',
        value: ['S7_31_1'],
    },
    { key: 'Market Development and Transformation ', value: ['S9_31_1'] },
    { key: 'Potential For Strengthening Regulatory Frameworks and Policies', value: ['S10_31_1'] },
];

const sustainableCriteria = [
    { key: 'Expected Positive Environmental impacts', value: ['S13_31_1', 'S14_31_1', 'S15_31_1'] },
    {
        key: 'Potential for Reduced Gender Inequalities in Climate change Impacts',
        value: ['S16_31_1'],
    },
];

const recipientCriteria = [
    { key: 'Scale and Intensity of Exposure', value: ['S17_31_1_A', 'S17_31_1_B'] },
    { key: 'Opportunities For the Fund to Overcome Specific Barriers', value: ['S20_31_1'] },
];

const countryCriteria = [
    {
        key: 'Objectives Are In Line With Priorities in the Countryâ€™s National Climate Strategy',
        value: ['S22_31_1'],
    },
    {
        key: 'Proposed Activity is Designed in Cognizance OF Other Country Policies',
        value: ['S23_31_1'],
    },
    {
        key: 'AE or EE experience working in the project country of implementation',
        value: [
            'S24_31_1_AE',
            'S24_31_1_EE',
            'S24_31_2_AE',
            'S24_31_2_EE',
            'S25_31_1',
            'S25_31_2_A',
            'S25_31_2_B',
            'S25_31_2_C',
            'S25_31_2_D',
            'S25_31_2_E',
            'S25_31_3_A',
            'S25_31_3_B',
            'S25_31_3_C',
        ],
    },
];

const efficiencyCriteria = [
    {
        key: 'Financial Viability in the Long Run',
        value: ['S30_31_1_A', 'S30_31_1_B', 'S30_31_3'],
    },
];

export const ReferenceDataContext = createContext('');

export const ReferenceDataContextProvider = ({ children }) => {
    const [selectFunction, setSelectFunction] = useState('');
    const [whatTodo, setWhatTodo] = useState('');
    const [selectAdvisor, setSelectAdvisor] = useState('');
    const [proposals, setProposal] = useState('');
    const [projectname, setProjectname] = useState('');
    const [creteria, setCriteria] = useState('');

    /*===================================================*/
    const [showPopup, setShowPopup] = useState(false);

    const handleTogglePopup = () => {
        setShowPopup(!showPopup);
    };
    const handleCloseByClickOnBackDrop = e => {
        if (e.target !== e.currentTarget) {
            return; // do not close popup if clicked inside popup
        }
        handleTogglePopup();
    };

    /*===================================================*/

    //Criteria name and criteria indicator
    const [creteriaName, setCreteriaName] = useState('');
    const [subCriteriaName, setSubCriteriaName] = useState('');
    const [subCriteriaIndicator, setSubCriteriaIndicator] = useState('');
    const [subCriteriaTextInput, setSubCriteriaTextInput] = useState('');

    const [subCriteriaNameIndex, setSubCriteriaNameIndex] = useState(0);
    const [subCriteriaIndicatorIndex, setSubCriteriaIndicatorIndex] = useState(0);

    const [isCompletedCriterion, setIsCompletedCriterion] = useState(false);
    const [isCompletedSubCriteria, setIsCompletedSubCriteria] = useState(false);

    const [scoreCount, setScoreCount] = useState(0);

    const [sum, setSum] = useState(0);
    const handleSumChange = newSum => {
        setSum(newSum);
    };

    const [criterion, setCriterion] = useState('');

    const [creteriaIndicator, setCreteriaIndicator] = useState(''); // transfer


    const [currentCriteriaIndex, setCurrentCriteriaIndex] = useState(0); //transfer
    const [currentCriteriaValueIndex, setCurrentCriteriaValueIndex] = useState(0); //transfer

    const [hasMoreSubcriteria, setHasMoreSubcriteria] = useState(false);
    const [prevStateSucriteria, setPrevStateSubciteria] = useState(false);

    const [isLastValue, setIsLastValue] = useState(false);
    const [lastValue, setLastValue] = useState({});
    const [counter, setCounter] = useState(0);
    const [counterImpact, setCounterImpact] = useState(0);

    const { criterions } = useSelector(state => state.projects.getDataResults);

    let criteriaList = [];

        switch (criterions) {
            case 'Impact Potential':
                criteriaList = [...impactCriteria];
                break;
            case 'Paradigm Shift Potential':
                criteriaList = [...paradigmCriteria];
                break;
            case 'Sustainable Development':
                criteriaList = [...sustainableCriteria];
                break;
            case 'Needs of the Recipient':
                criteriaList = [...recipientCriteria];
                break;
            case 'Country Ownership':
                criteriaList = [...countryCriteria];
                break;
            case 'Efficiency and Effectiveness':
                criteriaList = [...efficiencyCriteria];
                break;
            default:
                break;
        }
     const [nextCriteriaIndicator, setNextCriteriaIndicator] = useState(null);

    const handleNextCriteria = () => {
        if (criteriaList.length > 0) {
            setIsCompletedCriterion(false);
            setIsCompletedSubCriteria(false);

            const currentCriteria = criteriaList[currentCriteriaIndex];
            const currentCriteriaValue = currentCriteria.value[currentCriteriaValueIndex];

            // setCreteriaIndicator(currentCriteriaValue);
            
            setCurrentCriteriaValueIndex(currentCriteriaValueIndex + 1);

            if (currentCriteriaValueIndex >= currentCriteria.value.length - 1) {
                setCurrentCriteriaValueIndex(0);
                setCurrentCriteriaIndex(currentCriteriaIndex + 1);
            
                if (currentCriteriaIndex >= criteriaList.length - 1) {
                  setCurrentCriteriaIndex(0);
                  setCurrentCriteriaValueIndex(0);
                  setIsCompletedCriterion(true);
            
                  setIsLastValue(true); // set isLastValue state to true when it is the last value
                } else {
                  setNextCriteriaIndicator(criteriaList[currentCriteriaIndex + 1].value[0]);
                }
              } else {
                setNextCriteriaIndicator(currentCriteria.value[currentCriteriaValueIndex + 1]);
              }
     
        }
    };

    const handleCheckIsCompletedSubcriteria = async () => {
        const currentObject = criteriaList[currentCriteriaIndex];
        const numSubCriteria = await currentObject.value.length;
        let nextSubCriteriaIndex = subCriteriaIndicatorIndex + 1;
        if (nextSubCriteriaIndex >= numSubCriteria) {
            nextSubCriteriaIndex = numSubCriteria;
        }

        // const currentCriteriaValue = currentObject.value[currentCriteriaValueIndex];
        // setCreteriaIndicator(currentCriteriaValue);
console.log('nextCriteriaIndicator', currentObject.value[currentCriteriaValueIndex + 1])
        setNextCriteriaIndicator(currentObject.value[currentCriteriaValueIndex + 1])

        const hasMoreSubCriteria = nextSubCriteriaIndex < numSubCriteria;
        setHasMoreSubcriteria(hasMoreSubCriteria);

        if (counter + 1 === numSubCriteria) {
            setHasMoreSubcriteria(false);
            setCounter(0);
        } else {
            setCounter(counter + 1);
            setCounterImpact(counterImpact + 1);
            setHasMoreSubcriteria(hasMoreSubCriteria);
            setSubCriteriaIndicatorIndex(nextSubCriteriaIndex);
        }

        // update sub-criteria index and completion status
        if (hasMoreSubCriteria) {
            setSubCriteriaIndicatorIndex(nextSubCriteriaIndex);
            setIsCompletedSubCriteria(false); // set to false if there are more sub-criteria
        } else {
            if (currentCriteriaValueIndex === currentObject.value.length - 1) {
                setIsCompletedSubCriteria(true);
                setCounter(0);
            } else {
                setSubCriteriaNameIndex(subCriteriaNameIndex + 1);
                setSubCriteriaIndicatorIndex(0);
                setIsCompletedSubCriteria(true);
                setLastValue({
                    criteria: currentObject.key,
                    subcriteria: currentObject.value[currentCriteriaValueIndex],
                });
            }
        }
    };

    return (
        <ReferenceDataContext.Provider
            value={{
                showPopup,
                setShowPopup,
                handleTogglePopup,
                handleCloseByClickOnBackDrop,
                selectFunction,
                setSelectFunction,
                whatTodo,
                setWhatTodo,
                proposals,
                setProposal,
                projectname,
                setProjectname,
                setSelectAdvisor,
                selectAdvisor,

                impactCriteria,
                paradigmCriteria,
                sustainableCriteria,
                recipientCriteria,
                countryCriteria,
                efficiencyCriteria,

                setCreteriaName,
                creteriaName,

                setSubCriteriaTextInput,
                subCriteriaTextInput,
                subCriteriaName,

                setSubCriteriaName,
                setSubCriteriaIndicator,
                subCriteriaIndicator,

                setSubCriteriaNameIndex,
                setSubCriteriaIndicatorIndex,
                subCriteriaNameIndex,
                subCriteriaIndicatorIndex,

                isCompletedSubCriteria,
                isCompletedCriterion,

                setCriteria,
                creteriaIndicator,
                setCreteriaIndicator,
                currentCriteriaIndex,
                currentCriteriaValueIndex,
                handleNextCriteria,

                setScoreCount,
                scoreCount,
                handleSumChange,
                sum,
                setCriterion,
                criterion,
                handleCheckIsCompletedSubcriteria,
                setIsCompletedSubCriteria,
                hasMoreSubcriteria,
                setHasMoreSubcriteria,

                setPrevStateSubciteria,
                prevStateSucriteria,
                isLastValue,
                lastValue,
                setCounter,
                criterions,
                nextCriteriaIndicator
            }}
        >
            {children}
        </ReferenceDataContext.Provider>
    );
};
