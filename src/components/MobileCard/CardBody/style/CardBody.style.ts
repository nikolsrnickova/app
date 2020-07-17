import { styled } from '../../../../utils/styled';

export const StyledCardBody = styled.div``;

export const StyledCardListRow = styled.dl`
    margin: 0;
    padding: ${(props) => props.theme.padding.md} 0;
    border-bottom: 1px solid ${(props) => props.theme.color.border};

    &:nth-last-child(1) {
        border-bottom: 0;
    }
`;

export const StyledCardListItem = styled.dt`
    display: inline-block;
    font-weight: 600;
`;
export const StyledCardListValue = styled.dd`
    display: inline-block;
`;
