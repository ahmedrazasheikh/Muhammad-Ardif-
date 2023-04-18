import { useNavigate, useParams } from 'react-router-dom';
import {
    WrapperBtn,
    InnerWrapperBtn,
    NextBtn,
    RedoBtn,
    BtnsContainer,
    BtnsSaveAndBack,
    BtnsText,
    GobackSvg,
} from '../styles/Buttons.styled';
import goback from 'images/header/goback.svg';

export const Buttons = () => {
    const { projectname } = useParams();
    const navigate = useNavigate();

    const handleFinish = () => {
        // navigate(`/dashboard/create/impact/${projectname}/${criteria}/overall`);
    };

    const handleBackToRedoText = () => {
        navigate(`/dashboard/create/sectionA/${projectname}`);
    };

    const handleNavigateBack = () => {
        navigate(-1);
    };

    return (
        <WrapperBtn>
            <InnerWrapperBtn>
                <div>
                    <NextBtn onClick={handleFinish}>Finish</NextBtn>
                    <RedoBtn onClick={handleBackToRedoText}>Redo Entry</RedoBtn>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <BtnsContainer>
                        <BtnsSaveAndBack onClick={handleNavigateBack}>
                            <GobackSvg src={goback} alt="goback" />
                            <BtnsText>Go Back</BtnsText>
                        </BtnsSaveAndBack>
                        <BtnsSaveAndBack>
                            <BtnsText>Save & Quit</BtnsText>
                        </BtnsSaveAndBack>
                    </BtnsContainer>
                </div>
            </InnerWrapperBtn>
        </WrapperBtn>
    );
};
