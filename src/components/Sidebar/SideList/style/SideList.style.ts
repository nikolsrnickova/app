import { styled } from '../../../../utils/styled';

export const StyledSideList = styled.ul`
    padding: 30px 20px;
    border-top: 1px solid #777777;
    list-style-type: none;
`;

export const StyledSideListIn = styled(StyledSideList)`
    padding: 0px 40px;
    border-top: 0px;
`;

export const StyledSideItem = styled.li``;

export const StyledLink = styled.a`
    cursor: pointer;
    display: block;
    padding: ${(props) => props.theme.padding.sm};
    &:hover {
        background: #5b5f67;
        border-radius: ${(props) => props.theme.padding.xs};
    }
`;
