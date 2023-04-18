import { useEffect, useState } from 'react';

export const RenderExplanation = ({ storedExplanation, getWordStyle }) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayedWords, setDisplayedWords] = useState([]);

    useEffect(() => {
        if (!storedExplanation) {
            return;
        }
        const words = storedExplanation.split(' ');
        if (wordIndex < words.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedWords(prevWords => [...prevWords, words[wordIndex]]);
                setWordIndex(prevIndex => prevIndex + 1);
            }, 50);
            return () => clearTimeout(timeoutId);
        }
    }, [storedExplanation, wordIndex]);

    useEffect(() => {
        setDisplayedWords([]);
        setWordIndex(0);
    }, [storedExplanation]);

    return displayedWords.map((word, index) => {
        const style = getWordStyle(word);

        return (
            <span key={index} style={style}>
                {word}{' '}
            </span>
        );
    });
};
