import styled, { css } from 'styled-components';
import { StyledHeaderContent } from '../../HeaderContent/style';

interface StyledFooterListItemProps {
    isActive?: boolean;
}

export const StyledFooterNav = styled(StyledHeaderContent)`
    border-top: 1px solid ${(props) => props.theme.color.border};
    padding: 0px;
`;

export const StyledFooterList = styled.ul`
    list-style-type: none;
    width: 100%;
    padding: 0;
    text-align: center;
`;

export const StyledFooterListItem = styled.li<StyledFooterListItemProps>`
    display: inline;
    padding: 0px ${(props) => props.theme.padding.lg};

    ${(props) =>
        props.isActive &&
        css`
            ${StyledFooterListLink} {
                color: #1990ea;
            }
        `}
`;

export const StyledFooterListLink = styled.a`
    cursor: pointer;
    color: #777777;
`;
