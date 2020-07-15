import React, { FC } from 'react';
import { StyledButton } from './style';

export const Button: FC = (props) => {
    return <StyledButton>{props.children}</StyledButton>;
};
