import React from 'react';
import {
    StyledFooterNav,
    StyledFooterList,
    StyledFooterListItem,
    StyledFooterListLink,
} from './style';

export const FooterNav: React.FC = () => {
    return (
        <StyledFooterNav>
            <StyledFooterList>
                <StyledFooterListItem isActive={true}>
                    <StyledFooterListLink>Uživatelé</StyledFooterListLink>
                </StyledFooterListItem>
                <StyledFooterListItem>
                    <StyledFooterListLink>Licence</StyledFooterListLink>
                </StyledFooterListItem>
                <StyledFooterListItem>
                    <StyledFooterListLink>Export</StyledFooterListLink>
                </StyledFooterListItem>
                <StyledFooterListItem>
                    <StyledFooterListLink>Nápověda</StyledFooterListLink>
                </StyledFooterListItem>
            </StyledFooterList>
        </StyledFooterNav>
    );
};
