import { Text } from '../styles/Title.styled';

export const Title = ({ loader }) => {
    return (
        <>
            {!loader ? (
                <Text>Let’s Get Started With The First Sub-criteria</Text>
            ) : (
                ''
            )}
        </>
    );
};
