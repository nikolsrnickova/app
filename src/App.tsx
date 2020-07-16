import * as React from 'react';
import { Card } from './components/Card/Card';
import { Sidebar } from './components/Sidebar/Sidebar';
import {
    StyledContainer,
    StyledLeftContent,
    StyledRightContent,
    StyledContentHeader,
} from './App.style';
import {
    theme,
    AtlanticProvider,
    /*Device,
    DeviceProvider,*/
} from 'react-atlantic';
import { GlobalStyle } from './Global.style';
import { ThemeProvider } from 'styled-components';
import { Device } from './utils/Device';

export interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
    return (
        <AtlanticProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <Device devices={['desktop', 'laptop']}>
                    <StyledContainer>
                        <StyledLeftContent>
                            <Sidebar />
                        </StyledLeftContent>
                        <StyledRightContent>
                            <StyledContentHeader>
                                Seznam uživatelských účtů
                            </StyledContentHeader>
                            <Card />
                        </StyledRightContent>
                    </StyledContainer>
                </Device>
                <Device devices={['mobile']}>
                    <p>scbsdbcsdbcs</p>
                </Device>
                <GlobalStyle />
            </ThemeProvider>
        </AtlanticProvider>
    );
};
