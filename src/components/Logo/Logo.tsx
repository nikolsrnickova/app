import React from 'react';
import { StyledLogo, StyledMobileLogo } from './style/Logo.style';

interface LogoProps {
    device?: string;
}

export const Logo: React.FC<LogoProps> = (props) => {
    const { device } = props;
    return device === 'mobile' ? (
        <StyledMobileLogo>LOGO</StyledMobileLogo>
    ) : (
        <StyledLogo>LOGO</StyledLogo>
    );
};
