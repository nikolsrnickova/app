import { styled } from '../../../utils/styled';

export const StyledSidebar = styled.div`
    height: 100%;
    background: #2b313c;
    color: ${(props) => props.theme.color.text.gamma};
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const StyledLogout = styled.div`
    padding-left: 30px;
    padding-bottom: 30px;
    margin-top: auto;
`;

export const StyledLogoutLink = styled.a`
    cursor: pointer;
`;
