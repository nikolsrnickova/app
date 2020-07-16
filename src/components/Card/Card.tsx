import React from 'react';
import {
    StyledCard,
    StyledSelectText,
    StyledCardRow,
    StyledCardDiv,
} from './style/Card.style';
import { Select } from './Select/Select';
import { Table } from '../Table/Table';
import { Button } from 'react-atlantic';

export const Card: React.FC = () => {
    return (
        <StyledCard>
            <StyledCardRow>
                <StyledCardDiv>
                    <StyledSelectText>
                        Pro vybrané uživatele (2)
                    </StyledSelectText>
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
