import * as React from 'react';
import { Card } from './components/Card/Card';
import { Sidebar } from './components/Sidebar/Sidebar';

import { StyledApp } from './App.style';
import { DeviceProvider, theme, AtlanticProvider } from 'react-atlantic';
import { ThemeProvider } from 'styled-components';
export interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
    return (
        <AtlanticProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <DeviceProvider>
                    <StyledApp>
                        <Sidebar />
                        <Card />
                    </StyledApp>
                </DeviceProvider>
            </ThemeProvider>
        </AtlanticProvider>
    );
};
