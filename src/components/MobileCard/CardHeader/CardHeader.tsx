import React from 'react';
import {
    StyledCardHeader,
    StyledCardHeaderEmail,
    StyledCardHeaderID,
} from './style';

export const CardHeader: React.FC = () => {
    return (
        <StyledCardHeader>
            <StyledCardHeaderEmail>slosar@atlasgroup.cz</StyledCardHeaderEmail>
            <StyledCardHeaderID>ID 123456</StyledCardHeaderID>
        </StyledCardHeader>
    );
};
