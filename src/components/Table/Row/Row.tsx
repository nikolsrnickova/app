import React from 'react';
import { StyledTableRow } from './Row.style';

export const TableRow: React.FC = (props) => {
    return <StyledTableRow>{props.children}</StyledTableRow>;
};
