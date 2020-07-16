import styled from 'styled-components';

export const StyledSelectText = styled.strong`
    display: inline-block;
`;

export const StyledCardRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${(props) => props.theme.padding.sm};
`;

export const StyledCardDiv = styled.div`
    align-self: center;
`;

export const StyledCard = styled.div`
    max-width: 80%;
    padding: ${(props) => props.theme.padding.sm};
    margin: ${(props) => props.theme.margin.lg};
    border: 1px solid ${(props) => props.theme.color.border};
    border-radius: ${(props) => props.theme.radius};
    background: ${(props) => props.theme.color.background.alpha};
`;
