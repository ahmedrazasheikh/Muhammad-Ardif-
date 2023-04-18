import { IconContext } from 'react-icons';
import { AiOutlineClose } from 'react-icons/ai';
import { ReferenceDataContext } from 'components/Context/Context';
import React from 'react';
import { useContext } from 'react';
import ReactDOM from 'react-dom';
import {
    BackDrop,
    PopUp,
    Icon,
    Wrapper,
    InnerWrapper,
    Title,
    Text,
    BtnWrapper,
    BtnNoCalcel,
    BtnDelete,
    CloseIcon
} from './styles/PopUpDeleteProject.styled';
import deletePopupIcon from 'images/header/deletePopupIcon.svg';

export const PopUpDeleteProject = ({ handleDeleteProject }) => {
    const { showPopup, handleTogglePopup, handleCloseByClickOnBackDrop } =
        useContext(ReferenceDataContext);
    return (
        <div>
            {showPopup &&
                ReactDOM.createPortal(
                    <BackDrop onClick={handleCloseByClickOnBackDrop}>
                        <PopUp>
                            <CloseIcon onClick={handleTogglePopup}>
                                <IconContext.Provider value={{size: 24 }}><AiOutlineClose/></IconContext.Provider>
                            </CloseIcon>
                            <Wrapper>
                                <InnerWrapper>
                                    <Icon src={deletePopupIcon} alt="deletePopupIcon" />
                                    <div>
                                        <Title>Are you sure you want to delete this project?</Title>
                                        <Text>
                                            This action cannot be undone, and you run the risk of
                                            losing all your work that you have completed.
                                        </Text>
                                    </div>
                                </InnerWrapper>
                                <BtnWrapper>
                                    <BtnNoCalcel onClick={handleTogglePopup}>
                                        No, cancel
                                    </BtnNoCalcel>
                                    <BtnDelete onClick={handleDeleteProject}>
                                        Yes, delete
                                    </BtnDelete>
                                </BtnWrapper>
                            </Wrapper>
                        </PopUp>
                    </BackDrop>,
                    document.getElementById('popup-root')
                )}
        </div>
    );
};
