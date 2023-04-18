import { RotatingLines } from 'react-loader-spinner';
import { CenteredLoader } from './Loader.styled';
export const Loader = () => {
    return (
        <CenteredLoader>
            <RotatingLines
                strokeColor="green"
                strokeWidth="2"
                animationDuration="0.75"
                width="150"
                visible={true}
            />
        </CenteredLoader>
    );
};
