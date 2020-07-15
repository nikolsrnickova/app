import React from 'react';
import { StyledHead } from './Head.style';
import { TableRow } from './../Row/Row';
import { StyledTableHeadColumn } from './Head.style';
import { Checkbox } from './../Checkbox/Checkbox';

export const Head: React.FC = () => {
    return (
        <StyledHead>
            <TableRow>
                <StyledTableHeadColumn>
                    <Checkbox />
                </StyledTableHeadColumn>
                <StyledTableHeadColumn>ID</StyledTableHeadColumn>
                <StyledTableHeadColumn>Email</StyledTableHeadColumn>
                <StyledTableHeadColumn>Jméno</StyledTableHeadColumn>
                <StyledTableHeadColumn>Licence</StyledTableHeadColumn>
            </TableRow>
        </StyledHead>
    );
};
