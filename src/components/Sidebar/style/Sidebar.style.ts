import { styled } from '../../../utils/styled';

export const StyledSidebar = styled.div`
    background: #2b313c;
    color: ${(props) => props.theme.color.text.gamma};
    font-size: 18px;
`;

export const StyledLogout = styled.div`
    height: 500px;
    padding-left: 30px;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
`;

export const StyledLogoutLink = styled.a`
    cursor: pointer;
`;
