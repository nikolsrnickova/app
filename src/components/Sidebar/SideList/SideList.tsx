import React from 'react';
import {
    StyledSideList,
    StyledSideItem,
    StyledLink,
} from './style/SideList.style';

export const SideList: React.FC = () => {
    return (
        <StyledSideList>
            <StyledSideItem>
                <StyledLink>Uživatele</StyledLink>
                <StyledSideList>
                    <StyledSideItem>
                        <StyledLink> Vybrat uživatele</StyledLink>
                    </StyledSideItem>
                    <StyledSideItem>
                        <StyledLink> Hromadný import</StyledLink>
                    </StyledSideItem>
                </StyledSideList>
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
