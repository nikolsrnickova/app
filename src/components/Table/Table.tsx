import React from 'react';
import { StyledTable } from './style/Table.style';
import { Head } from './Head/Head';
import { Body } from './Body/Body';

export const Table: React.FC = () => {
    return (
        <StyledTable>
            <Head />
            <Body />
        </StyledTable>
    );
};
