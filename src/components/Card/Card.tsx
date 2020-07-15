import React from 'react';
import {
    StyledCard,
    StyledText,
    StyledCardRow,
    StyledCardDiv,
} from './Card.style';
import { Button } from './Button/Button';
import { Select } from './Select/Select';
import { Table } from '../Table/Table';

export const Card: React.FC = () => {
    return (
        <StyledCard>
            <StyledCardRow>
                <StyledCardDiv>
                    <StyledText>Pro vybrané uživatele (2)</StyledText>
                    <Select />
                </StyledCardDiv>
                <StyledCardDiv>
                    <Button />
                </StyledCardDiv>
            </StyledCardRow>
            <Table />
        </StyledCard>
    );
};
