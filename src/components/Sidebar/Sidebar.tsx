import React from 'react';
import {
    StyledSidebar,
    StyledLogout,
    StyledLogoutLink,
} from './style/Sidebar.style';
import { Logo } from './Logo/Logo';
import { SideList } from './SideList/SideList';

export const Sidebar: React.FC = () => {
    return (
        <StyledSidebar>
            <Logo />
            <SideList />
            <StyledLogout>
                <StyledLogoutLink> Odhlásit se</StyledLogoutLink>
            </StyledLogout>
        </StyledSidebar>
    );
};
