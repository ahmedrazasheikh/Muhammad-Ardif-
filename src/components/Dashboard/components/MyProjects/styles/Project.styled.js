import styled from 'styled-components';

export const TitleProject = styled.h2`
    font-weight: 500;
    font-size: 16px;
    line-height: 1;
    color: #000000;
    margin-bottom: 20px;
`;

export const ProjectContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 40px;
    padding-top: 15px;
    padding-bottom: 15px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    &:last-of-type {
        margin-bottom: 40px;
    }
`;

export const NameContainer = styled.div`
    display: flex;
    align-items: center;
    width: 400px;
`;

export const NameProject = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.2;
    color: #000000;
    cursor: pointer;
    &:hover {
        color: #00b840;
    }
`;

export const Folder = styled.img`
    margin-right: 30px;
`;
export const CriterionContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Criterion = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.2;
    color: #2e2e2e;
    margin-right: 140px;
`;

export const Progress = styled.div`
    &.inprogress {
        background: #ffebc5;
        border-radius: 32px;
    }
    &.complete {
        background: #c7fec6;
        border-radius: 32px;
    }
`;

export const ProgressText = styled.p`
    &.inprogressText {
        line-height: 2;
        padding-left: 12px;
        padding-right: 12px;
        font-weight: 500;
        font-size: 12px;

        color: #ea7e00;
    }
    &.completeText {
        line-height: 2;
        padding-left: 12px;
        padding-right: 12px;
        font-weight: 500;
        font-size: 12px;
        color: #039700;
    }
`;

export const TrashContainer = styled.div`
    cursor: pointer;
    &:not(:last-of-type) {
        margin-right: 15px;
    }
    opacity: ${props => (props.disabled ? 0.5 : 1)};
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
    pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
`;

export const TrashEditContainer = styled.div`
    display: flex;
`;
