import React from 'react';
import {
    StyledCardListRow,
    StyledCardBody,
    StyledCardListItem,
    StyledCardListValue,
} from './style';

export const CardBody: React.FC = () => {
    return (
        <StyledCardBody>
            <StyledCardListRow>
                <StyledCardListItem>Jméno</StyledCardListItem>
                <StyledCardListValue>Martin Šlosar</StyledCardListValue>
            </StyledCardListRow>
            <StyledCardListRow>
                <StyledCardListItem>Licence</StyledCardListItem>
                <StyledCardListValue>Licence 1, Licence 2</StyledCardListValue>
            </StyledCardListRow>
        </StyledCardBody>
    );
};
