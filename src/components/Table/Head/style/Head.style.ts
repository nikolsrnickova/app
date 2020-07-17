import styled from 'styled-components';

export const StyledTableHeadColumn = styled.th`
    padding: ${(props) => props.theme.padding.md};
    text-align: left;
    border: 1px solid ${(props) => props.theme.color.border};

    &:nth-child(1) {
        text-align: center;
    }
`;

export const StyledTableHead = styled.thead`
    color: ${(props) => props.theme.color.text.gamma};
    background: #2b313c;
`;
