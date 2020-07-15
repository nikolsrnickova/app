import styled from 'styled-components';
import { StyledTableRow } from '../Row/Row.style';

export const StyledTableBodyColumn = styled.td`
    padding: ${(props) => props.theme.padding.sm};
    border: 1px solid #d9d9d9;
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
            background: ${(props) => props.theme.color.background.beta};
        }
    }
`;
