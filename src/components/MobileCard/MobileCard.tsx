import React from 'react';
import { StyledMobileCard } from './style';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';

export const MobileCard: React.FC = () => {
    return (
        <StyledMobileCard>
            <CardHeader />
            <CardBody />
        </StyledMobileCard>
    );
};
