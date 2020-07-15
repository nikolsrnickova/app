import React from 'react';
import { StyledSidebar } from './Sidebar.style';
import { Logo } from './Logo/Logo';
import { SideList } from './SideList/SideList';

export const Sidebar: React.FC = () => {
    return (
        <StyledSidebar>
            <Logo />
            <SideList />
        </StyledSidebar>
    );
};
