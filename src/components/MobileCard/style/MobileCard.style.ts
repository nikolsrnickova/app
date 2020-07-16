import { styled } from '../../../utils/styled';

export const StyledMobileCard = styled.div`
    background-color: ${(props) => props.theme.color.background.alpha};
    margin: ${(props) => props.theme.margin.xl};
    padding: ${(props) => props.theme.padding.md};
    box-shadow: ${(props) => props.theme.boxShadow.md};
`;
