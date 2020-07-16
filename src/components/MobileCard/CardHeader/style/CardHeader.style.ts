import { styled } from '../../../../utils/styled';

export const StyledCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: ${(props) => props.theme.font.size.lg};
`;

export const StyledCardHeaderEmail = styled.strong`
    color: #1990ea;
    padding-bottom: ${(props) => props.theme.padding.sm};
`;

export const StyledCardHeaderID = styled.span``;
