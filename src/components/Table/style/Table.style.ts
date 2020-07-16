import styled from 'styled-components';

export const StyledTable = styled.table`
    width: 100%;
    border: 1px solid #d9d9d9;
    border-collapse: separate;
    border-spacing: 0;
    background: #ffffff;
    color: ${(props) => props.theme.color.text.alpha};
`;
