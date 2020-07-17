import React from 'react';
import {
    StyledBody,
    StyledTableBodyColumn,
    StyledTableColumnTwo,
    StyledTableColumnText,
} from './style/Body.style';
import { TableRow } from './../Row/Row';
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
                    <StyledTableColumnTwo>
                        <StyledTableColumnText>
                            Licence 1, Licence 2
                        </StyledTableColumnText>
                        <Button type={'default'}>Detail</Button>
                    </StyledTableColumnTwo>
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
                    <StyledTableColumnTwo>
                        <StyledTableColumnText>
                            Licence 1, Licence 2
                        </StyledTableColumnText>
                        <Button type={'default'}>Detail</Button>
                    </StyledTableColumnTwo>
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
                    <StyledTableColumnTwo>
                        <StyledTableColumnText>
                            Licence 1, Licence 2
                        </StyledTableColumnText>
                        <Button type={'default'}>Detail</Button>
                    </StyledTableColumnTwo>
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
                    <StyledTableColumnTwo>
                        <StyledTableColumnText>
                            Licence 1, Licence 2
                        </StyledTableColumnText>
                        <Button type={'default'}>Detail</Button>
                    </StyledTableColumnTwo>
                </StyledTableBodyColumn>
            </TableRow>
        </StyledBody>
    );
};
