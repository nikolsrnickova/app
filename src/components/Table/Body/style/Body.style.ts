import styled from 'styled-components';
import { StyledTableRow } from '../../Row/style/Row.style';

export const StyledTableBodyColumn = styled.td`
    padding: ${(props) => props.theme.padding.sm};
    border: 1px solid ${(props) => props.theme.color.border};

    &:nth-child(1) {
        text-align: center;
    }

    &:nth-of-type(3) {
        color: #1990ea;
    }
`;

export const StyledTableColumnTwo = styled.div`
    display: flex;
`;

export const StyledTableColumnText = styled.div`
    flex: 1;
    margin: auto 0;
`;

export const StyledBody = styled.tbody`
    ${StyledTableRow} {
        &:nth-of-type(odd) {
            background: ${(props) => props.theme.color.background.beta};
        }
    }
`;
