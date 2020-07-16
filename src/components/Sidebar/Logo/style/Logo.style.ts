import { styled } from '../../../../utils/styled';

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