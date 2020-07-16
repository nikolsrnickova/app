import styled from 'styled-components';

export const StyledSelect = styled.select`
    margin-left: ${(props) => props.theme.margin.xl};
    padding: ${(props) => props.theme.padding.sm} 80px
        ${(props) => props.theme.padding.sm}
        ${(props) => props.theme.padding.lg};
`;
