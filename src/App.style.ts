import { styled } from './utils/styled';

export const StyledDesktopLayout = styled.div`
    font-family: ${(props) => props.theme.font.family};
    height: 100%;
    display: flex;
`;

export const StyledPanel = styled.div`
    flex: 1;
    background: #2b313c;
`;

export const StyledContent = styled.div`
    flex: 4;
    background: ${(props) => props.theme.color.background.gamma};
    border: 1px solid ${(props) => props.theme.color.border};
`;

export const StyledMobileLayout = styled(StyledDesktopLayout)`
    height: auto;
    width: 100%;
    display: block;
`;
