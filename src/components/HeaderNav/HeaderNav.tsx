import React from 'react';
import { StyledHeaderNav } from './style/HeaderNav.style';
import { Logo } from '../Logo/Logo';

export const HeaderNav: React.FC = () => {
    return (
        <StyledHeaderNav>
            <Logo device={'mobile'} />
        </StyledHeaderNav>
    );
};
