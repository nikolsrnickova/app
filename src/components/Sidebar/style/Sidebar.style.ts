import { styled } from '../../../utils/styled';

export const StyledSidebar = styled.div`
    background: #2b313c;
    color: ${(props) => props.theme.color.text.gamma};
    font-size: 18px;
`;

export const StyledLogout = styled.div`
    padding: 200px 70px 30px;
`;

export const StyledLogoutLink = styled.a`
    cursor: pointer;
`;
