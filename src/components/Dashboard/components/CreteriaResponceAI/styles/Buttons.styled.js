import styled from 'styled-components';

export const WrapperBtn = styled.div`
margin-bottom: 100px;
`
export const InnerWrapperBtn = styled.div`

`

export const NextBtn = styled.button`
    min-width: 92px;
    height: 50px;
    background: #00b840;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    color: #fff;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.8;
    margin-right: 10px;
    opacity: ${props => (props.disabled ? 0.5 : 1)};
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
    pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
`;

export const RedoBtn = styled.button`
    width: 134px;
    height: 50px;
    background: #e6e6e6;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    color: #808080;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.8;
    margin-right: 10px;
`;
export const BackToCriterionBtn = styled.button`
    width: 180px;
    height: 50px;
    background: #e6e6e6;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    color: #808080;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.8;
    margin-right: 10px;
`;
