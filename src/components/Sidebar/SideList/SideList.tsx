import React from 'react';
import {
    StyledSideList,
    StyledSideListIn,
    StyledSideItem,
    StyledLink,
} from './SideList.style';

export const SideList: React.FC = () => {
    return (
        <StyledSideList>
            <StyledSideItem>
                <StyledLink>Uživatele</StyledLink>
                <StyledSideListIn>
                    <StyledSideItem>
                        <StyledLink> Vybrat uživatele</StyledLink>
                        <StyledLink> Hromadný import</StyledLink>
                    </StyledSideItem>
                </StyledSideListIn>
            </StyledSideItem>
            <StyledSideItem>
                <StyledLink>Licence</StyledLink>
            </StyledSideItem>
            <StyledSideItem>
                <StyledLink>Export</StyledLink>
            </StyledSideItem>
            <StyledSideItem>
                <StyledLink>Nápověda</StyledLink>
            </StyledSideItem>
        </StyledSideList>
    );
};
