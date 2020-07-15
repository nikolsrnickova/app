import { styled } from "./utils/styled";


export const StyledApp = styled.div`
    font-family: ${props => {
        console.log(props);
        
        return props.theme.font.family}};
    display: flex;
`;
