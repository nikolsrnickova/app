import styled from 'styled-components';

export const StyledTable = styled.table`
    width: 100%;
    border: 1px solid ${(props) => props.theme.color.border};
    border-collapse: separate;
    border-spacing: 0;
    background: ${(props) => props.theme.color.background.alpha};
    color: ${(props) => props.theme.color.text.alpha};
`;
