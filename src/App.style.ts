import { styled } from './utils/styled';

export const StyledApp = styled.div`
    font-family: ${(props) => props.theme.font.family};
`;

export const StyledAppAlt = styled(StyledApp)``;
