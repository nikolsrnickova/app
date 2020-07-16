import styled from 'styled-components';

export const StyledText = styled.p`
    font-weight: 600;
    display: inline-block;
`;

export const StyledCardRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyledCardDiv = styled.div`
    align-self: center;
`;

export const StyledCard = styled.div`
    max-width: 80%;
    padding: ${(props) => props.theme.padding.sm};
    margin: ${(props) => props.theme.padding.lg};
    border: 1px solid ${(props) => props.theme.color.border};
    border-radius: ${(props) => props.theme.padding.sm};
    background: ${(props) => props.theme.color.background.alpha};
`;
