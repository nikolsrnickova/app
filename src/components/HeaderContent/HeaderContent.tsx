import React from 'react';
import {
    StyledHeaderContent,
    StyledHeaderContentText,
} from './style/HeaderContent.style';
import { Button } from 'react-atlantic';
import { Device } from '../../utils/Device';

export const HeaderContent: React.FC = () => {
    return (
        <StyledHeaderContent>
            <StyledHeaderContentText>
                Seznam uživatelských účtů
            </StyledHeaderContentText>
            <Device devices={['mobile']}>
                <Button type="success">+</Button>
            </Device>
        </StyledHeaderContent>
    );
};
