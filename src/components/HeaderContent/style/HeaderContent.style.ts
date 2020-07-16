import styled from 'styled-components';

export const StyledHeaderContent = styled.div`
    background: ${(props) => props.theme.color.background.alpha};
    padding: ${(props) => props.theme.padding.md}
        ${(props) => props.theme.padding.xl};
    border-bottom: 1px solid ${(props) => props.theme.color.border};
    display: flex;
    justify-content: space-between;
`;

export const StyledHeaderContentText = styled.strong`
    align-self: center;
`;
