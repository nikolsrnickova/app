import styled from 'styled-components';
import { StyledTableRow } from '../Row/Row.style';

export const StyledTableBodyColumn = styled.td`
    padding: 3px 11px;
    border: 0.5px solid #d9d9d9;
    :nth-child(1) {
        text-align: center;
    }
    :nth-of-type(3) {
        color: #1990ea;
    }
`;

export const TableDiv = styled.div`
    display: flex;
`;

export const TableSpan = styled.div`
    flex: 1;
    margin: auto 0;
`;

export const StyledBody = styled.tbody`
    ${StyledTableRow} {
        :nth-of-type(odd) {
            background: #f2f2f2;
        }
    }
`;
