import { BtnContatiner, Btn } from './Buttons.styled';
import goback from 'images/header/goback.svg';
import { useLocation, useNavigate } from 'react-router-dom';

export const Buttons = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const shouldShowSaveButton =
        location.pathname.includes('/dashboard/create') &&
        !location.pathname.includes('/impact/') &&
        !location.pathname.includes('/sectionA/') &&
        !location.pathname.includes('/sectionB/') &&
        !location.pathname.includes('/sectionC/') &&
        !location.pathname.includes('/sectionD/') &&
        !location.pathname.includes('/advisor/results/') 

    const handleNavigate = () => {
        navigate(-1);
    };
    return (
        <BtnContatiner className="dashboard">
            {shouldShowSaveButton && (
                <Btn onClick={handleNavigate}>
                    <img src={goback} alt="goback" style={{ marginRight: 8 }} />{' '}
                    Go Back
                </Btn>
            )}

            {/* {shouldShowSaveButton && <Btn>Save & Quit</Btn>} */}
        </BtnContatiner>
    );
};
