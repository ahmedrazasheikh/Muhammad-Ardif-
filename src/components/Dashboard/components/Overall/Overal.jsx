import { useSelector } from 'react-redux';
import { Buttons } from './components/Buttons';
import { Wrapper, Text,Score } from './styles/Overall.styled';

export const Overall = () => {
    const { score } = useSelector(state => state.projects.gradeProject);
    const { getResultsIndicatorsScore } = useSelector(state => state.projects);

    
    if (!score) {
        return 
     }
     
     let color;
 
     if (score === 'Low') {
         color = 'Red';
     }
     if (score === 'No') {
         color = 'Red';
     }
     if (score === 'Negative-Impact') {
         color = 'Red';
     }
     if (score === 'Not-Applicable' || score === 'On') {
         color = 'Red';
     }
     if (score === 'Medium') {
         color = 'orange';
     }
     if (score === 'Medium-Low') {
         color = 'orange';
     }
     if (score === 'Medium-High') {
         color = 'orange';
     }
     if (score === 'High') {
         color = 'green';
     }

     const scoreUpperCase = getResultsIndicatorsScore

     if (!scoreUpperCase) {
        return
     }
    return (
        <>
            <Wrapper>
                <Text>
                    The Overall Score For Financial Viability in the long run
                    sub-criteria is
                </Text>
                <Score style={{ color }}>{scoreUpperCase}</Score>
            </Wrapper>
            <div>
                <Buttons />
            </div>
        </>
    );
};
