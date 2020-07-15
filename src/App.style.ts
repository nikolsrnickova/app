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
`;
