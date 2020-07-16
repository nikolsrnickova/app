import * as React from 'react';
import { Card } from './components/Card/Card';
import { Sidebar } from './components/Sidebar/Sidebar';
import {
    StyledDesktopLayout,
    StyledLeftContent,
    StyledRightContent,
    StyledContentHeader,
    StyledMobileLayout,
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
import { HeaderNav } from './components/HeaderNav';

export interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
    return (
        <AtlanticProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <Device devices={['desktop', 'laptop']}>
                    <StyledDesktopLayout>
                        <StyledLeftContent>
                            <Sidebar />
                        </StyledLeftContent>
                        <StyledRightContent>
                            <StyledContentHeader>
                                Seznam uživatelských účtů
                            </StyledContentHeader>
                            <Card />
                        </StyledRightContent>
                    </StyledDesktopLayout>
                </Device>
                <Device devices={['mobile']}>
                    <StyledMobileLayout>
                        <HeaderNav />
                    </StyledMobileLayout>
                </Device>
                <GlobalStyle />
            </ThemeProvider>
        </AtlanticProvider>
    );
};
