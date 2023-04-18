import { RenderExplanation } from 'hooks/useRenderExplanation';
import {  useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Wrapper, RequestText, ResponseText } from '../styles/Response.styled';

export const Response = () => {
    const { explanation} = useSelector(state => state.projects.gradeProject );
    const { text } = useSelector(state => state.projects.gradeProject);

    useEffect(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, []);
    

    const getWordStyle = word => {
        switch (word) {
            case 'Low':
                return { color: 'red', fontWeight: 700 };
            case 'Medium':
                return { color: 'orange', fontWeight: 700 };
            case 'Medium-Low':
                return { color: 'orange', fontWeight: 700 };
            case 'Medium-High':
                return { color: 'orange', fontWeight: 700 };
            case 'High':
                return { color: 'green', fontWeight: 700 };
            case 'No':
                return { color: 'red', fontWeight: 700 };
            case 'Not-Applicable':
                return { color: 'red', fontWeight: 700 };
            default:
                return {};
        }
    };

    return (
        <Wrapper>
            <RequestText>{text}</RequestText>
            <ResponseText>
                <RenderExplanation
                    storedExplanation={explanation}
                    getWordStyle={getWordStyle}
                />
            </ResponseText>
        </Wrapper>
    );
};
