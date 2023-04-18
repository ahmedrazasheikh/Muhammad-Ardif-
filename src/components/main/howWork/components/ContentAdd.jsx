import { Title, SubTitle, Text } from '../styles/Content.styled';
import { Pictures } from './Pictures';
import { Delimeter } from './Delimeter';

export const ContentAdd = () => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: 30,
            }}
        >
            <Pictures />
            <Delimeter>2</Delimeter>
            <div>
                <Title>Submit Your Entries</Title>
                <SubTitle>
                    Your entries will either be cut and pasted from your
                    proposal writing products outside of the tool, or your typed
                    in responses to questionnaire.
                </SubTitle>
                <Text>Follow the prompts and make you entries.</Text>
                <Text>
                    Amplifying guidance is provided on the left of the screen.
                </Text>
                <Text>
                    Select submit and watch the tool generate your onscreen
                    report in seconds.
                </Text>
            </div>
        </div>
    );
};
