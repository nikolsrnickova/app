import { styled } from '../../../utils/styled';

export const StyledLogo = styled.div`
    height: 150px;
    margin: 30px 60px;
    background: #5b5f67;
    border-radius: ${(props) => props.theme.radius};
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledMobileLogo = styled.div`
    font-size: 20px;
    background: #5b5f67;
    text-align: left;
    width: 50%;
    border-radius: ${(props) => props.theme.radius};
    padding: ${(props) => props.theme.padding.md}
        ${(props) => props.theme.padding.xl};
    margin: ${(props) => props.theme.margin.md}
        ${(props) => props.theme.margin.xl};
`;
