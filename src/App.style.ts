import { styled } from './utils/styled';

export const StyledContainer = styled.div`
    font-family: ${(props) => props.theme.font.family};
    display: flex;
`;

export const StyledLeftContent = styled.div`
    flex: 1;
    background: #2b313c;
`;

export const StyledRightContent = styled.div`
    flex: 4;
    background: ${(props) => props.theme.color.background.gamma};
    border: 1px solid ${(props) => props.theme.color.border};
`;

export const StyledContentHeader = styled.div`
    background: ${(props) => props.theme.color.background.alpha};
    font-size: 18px;
    font-weight: 600;
    padding: ${(props) => props.theme.padding.md}
        ${(props) => props.theme.padding.xl};
    border-bottom: 1px solid ${(props) => props.theme.color.border};
`;
