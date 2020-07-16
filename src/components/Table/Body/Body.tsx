import React from 'react';
import { StyledBody } from './style/Body.style';
import { TableRow } from './../Row/Row';
import { StyledTableBodyColumn, TableDiv, TableSpan } from './style/Body.style';
import { Checkbox } from './../Checkbox/Checkbox';
import { Button } from 'react-atlantic';

export const Body: React.FC = () => {
    return (
        <StyledBody>
            <TableRow>
                <StyledTableBodyColumn>
                    <Checkbox />
                </StyledTableBodyColumn>
                <StyledTableBodyColumn>12345</StyledTableBodyColumn>
                <StyledTableBodyColumn>
                    slosar@atlasgroup.cz
                </StyledTableBodyColumn>
                <StyledTableBodyColumn>Martin Šlosár</StyledTableBodyColumn>
                <StyledTableBodyColumn>
                    <TableDiv>
                        <TableSpan>Licence 1, Licence 2</TableSpan>
                        <Button type={'default'}>Detail</Button>
                    </TableDiv>
                </StyledTableBodyColumn>
            </TableRow>
            <TableRow>
                <StyledTableBodyColumn>
                    <Checkbox />
                </StyledTableBodyColumn>
                <StyledTableBodyColumn>12345</StyledTableBodyColumn>
                <StyledTableBodyColumn>
                    slosar@atlasgroup.cz
                </StyledTableBodyColumn>
                <StyledTableBodyColumn>Martin Šlosár</StyledTableBodyColumn>
                <StyledTableBodyColumn>
                    <TableDiv>
                        <TableSpan>Licence 1, Licence 2</TableSpan>
                        <Button type={'default'}>Detail</Button>
                    </TableDiv>
                </StyledTableBodyColumn>
            </TableRow>
            <TableRow>
                <StyledTableBodyColumn>
                    <Checkbox />
                </StyledTableBodyColumn>
                <StyledTableBodyColumn>12345</StyledTableBodyColumn>
                <StyledTableBodyColumn>
                    slosar@atlasgroup.cz
                </StyledTableBodyColumn>
                <StyledTableBodyColumn>Martin Šlosár</StyledTableBodyColumn>
                <StyledTableBodyColumn>
                    <TableDiv>
                        <TableSpan>Licence 1, Licence 2</TableSpan>
                        <Button type={'default'}>Detail</Button>
                    </TableDiv>
                </StyledTableBodyColumn>
            </TableRow>
            <TableRow>
                <StyledTableBodyColumn>
                    <Checkbox />
                </StyledTableBodyColumn>
                <StyledTableBodyColumn>12345</StyledTableBodyColumn>
                <StyledTableBodyColumn>
                    slosar@atlasgroup.cz
                </StyledTableBodyColumn>
                <StyledTableBodyColumn>Martin Šlosár</StyledTableBodyColumn>
                <StyledTableBodyColumn>
                    <TableDiv>
                        <TableSpan>Licence 1, Licence 2</TableSpan>
                        <Button type={'default'}>Detail</Button>
                    </TableDiv>
                </StyledTableBodyColumn>
            </TableRow>
        </StyledBody>
    );
};
