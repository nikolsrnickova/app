import styled from 'styled-components';

export const StyledTableHeadColumn = styled.th`
    padding: ${(props) => props.theme.padding.md};
    text-align: left;
    border: 1px solid #d9d9d9;
    :nth-child(1) {
        text-align: center;
    }
`;

export const StyledHead = styled.thead`
    color: ${(props) => props.theme.color.text.gamma};
    background: #2b313c;
`;
