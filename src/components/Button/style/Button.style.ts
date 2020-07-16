import styled from 'styled-components';
import { Size, Type } from 'react-atlantic';
import { ElementType } from '../../../utils/ElementType';

interface StyledButtonProps extends ElementType<HTMLButtonElement> {
    size?: Size;
    typeOfButton?: Type;
}

export const StyledButton = styled.button<StyledButtonProps>`
    position: relative;
    display: inline-block;
    cursor: pointer;
    vertical-align: middle;
    color: ${(props) => props.theme.color.text.alpha};
    border: 1px solid ${(props) => props.theme.color.border};
    border-radius: ${(props) => props.theme.padding.xs};
    padding: ${(props) => props.theme.padding.sm}
        ${(props) => props.theme.padding.md};
`;
