import React from 'react';
import {
    StyledTableCard,
    StyledSelectText,
    StyledCardRow,
    StyledCardDiv,
} from './style/TableCard.style';
import { Select } from './Select/Select';
import { Table } from '../Table/Table';
import { Button } from 'react-atlantic';

export const TableCard: React.FC = () => {
    return (
        <StyledTableCard>
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
        </StyledTableCard>
    );
};
