import { styled } from '../../../utils/styled';

const logoBackground = '#5b5f67';

export const StyledLogo = styled.div`
    height: 150px;
    margin: 30px 60px;
    background: ${logoBackground};
    border-radius: ${(props) => props.theme.radius};
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledMobileLogo = styled(StyledLogo)`
    font-size: 20px;
    text-align: left;
    width: 50%;
    display: inline-block;
    height: auto;
    padding: ${(props) => props.theme.padding.md}
        ${(props) => props.theme.padding.xl};
    margin: ${(props) => props.theme.margin.md}
        ${(props) => props.theme.margin.xl};
`;
