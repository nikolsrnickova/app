import * as React from 'react';
import { Card } from './components/Card/Card';
import { Sidebar } from './components/Sidebar/Sidebar';
import {
    StyledDesktopLayout,
    StyledPanel,
    StyledContent,
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
import { HeaderContent } from './components/HeaderContent';

export interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
    return (
        <AtlanticProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <Device devices={['desktop', 'laptop']}>
                    <StyledDesktopLayout>
                        <StyledPanel>
                            <Sidebar />
                        </StyledPanel>
                        <StyledContent>
                            <HeaderContent />
                            <Card />
                        </StyledContent>
                    </StyledDesktopLayout>
                </Device>
                <Device devices={['mobile']}>
                    <StyledMobileLayout>
                        <HeaderNav />
                        <StyledContent>
                            <HeaderContent />
                        </StyledContent>
                    </StyledMobileLayout>
                </Device>
                <GlobalStyle />
            </ThemeProvider>
        </AtlanticProvider>
    );
};
