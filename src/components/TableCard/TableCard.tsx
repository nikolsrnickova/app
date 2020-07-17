import React from 'react';
import {
    StyledTableCard,
    StyledSelectText,
    StyledCardRow,
    StyledCardBlock,
} from './style/TableCard.style';
import { Select } from './Select/Select';
import { Table } from '../Table/Table';
import { Button } from 'react-atlantic';

export const TableCard: React.FC = () => {
    return (
        <StyledTableCard>
            <StyledCardRow>
                <StyledCardBlock>
                    <StyledSelectText>
                        Pro vybrané uživatele (2)
                    </StyledSelectText>
                    <Select />
                </StyledCardBlock>
                <StyledCardBlock>
                    <Button type={'success'}>+ Vytvořit uživatele</Button>
                </StyledCardBlock>
            </StyledCardRow>
            <Table />
        </StyledTableCard>
    );
};
