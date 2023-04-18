import { Title, SubTitle, Text } from '../styles/Content.styled';
import { Pictures } from './Pictures';
import { Delimeter } from './Delimeter';

export const ContentInput = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <Pictures />
            <Delimeter>3</Delimeter>
            <div>
                <Title>Generate Reports</Title>
                <SubTitle>
                    On screen reports i.e. (the tool’s grading or writing
                    narratives) can be saved and exported as reports for later
                    reference or to send to stakeholders.
                </SubTitle>
                <Text>
                    Once a grading project is complete, generate a report in PDF
                </Text>
                <Text>Once a writing project is complete or MSWord.</Text>
            </div>
        </div>
    );
};
