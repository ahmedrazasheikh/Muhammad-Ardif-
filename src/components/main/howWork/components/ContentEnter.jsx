import { Title, SubTitle, Text } from '../styles/Content.styled';
import { Pictures } from './Pictures';
import { Delimeter } from './Delimeter';

export const ContentEnter = () => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: 30,
            }}
        >
            <Pictures />
            <Delimeter>1</Delimeter>
            <div>
                <Title>Select a Function You Want to Use</Title>
                <SubTitle>
                    The tools to choose from range from specific research to
                    writing tools. All leverage AI technology to deliver the
                    best possible result in seconds.
                </SubTitle>
                <Text>Select the tool you want to use.</Text>
                <Text>Start a new project or open an existing file.</Text>
                <Text>
                    Depending on the tool, either enter the narratives you want
                    to grade or answer a research questionnaire.
                </Text>
            </div>
        </div>
    );
};
