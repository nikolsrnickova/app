import React from 'react';
import { StyledSelect } from './Select.style';

export const Select: React.FC = () => {
    return (
        <StyledSelect>
            <option value="" hidden>
                Nastavit roli
            </option>
            <option value="1">Role 1</option>
            <option value="2">Role 2</option>
            <option value="3">Role 3</option>
            <option value="4">Role 4</option>
        </StyledSelect>
    );
};
