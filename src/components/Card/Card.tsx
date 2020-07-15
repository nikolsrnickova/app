import React from 'react';
import {
    StyledCard,
    StyledText,
    StyledCardRow,
    StyledCardDiv,
} from './Card.style';
import { Select } from './Select/Select';
import { Table } from '../Table/Table';
import { Button } from 'react-atlantic';

export const Card: React.FC = () => {
    return (
        <StyledCard>
            <StyledCardRow>
                <StyledCardDiv>
                    <StyledText>Pro vybrané uživatele (2)</StyledText>
                    <Select />
                </StyledCardDiv>
                <StyledCardDiv>
                    <Button type={'success'}>+ Vytvořit uživatele</Button>
                </StyledCardDiv>
            </StyledCardRow>
            <Table />
        </StyledCard>
    );
};
