import * as React from 'react';
import { TableCard } from './components/TableCard/TableCard';
import { Sidebar } from './components/Sidebar/Sidebar';
import {
    StyledDesktopLayout,
    StyledPanel,
    StyledContent,
    StyledMobileLayout,
} from './App.style';
import { theme, AtlanticProvider } from 'react-atlantic';
import { GlobalStyle } from './Global.style';
import { ThemeProvider } from 'styled-components';
import { Device } from './utils/Device';
import { HeaderNav } from './components/HeaderNav';
import { HeaderContent } from './components/HeaderContent';
import { MobileCard } from './components/MobileCard';
import { FooterNav } from './components/FooterNav';

export interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
    return (
        <AtlanticProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <Device devices={['desktop', 'laptop', 'tabletHorizontal']}>
                    <StyledDesktopLayout>
                        <StyledPanel>
                            <Sidebar />
                        </StyledPanel>
                        <StyledContent>
                            <HeaderContent />
                            <TableCard />
                        </StyledContent>
                    </StyledDesktopLayout>
                </Device>
                <Device devices={['mobile', 'tabletVertical']}>
                    <StyledMobileLayout>
                        <HeaderNav />
                        <StyledContent>
                            <HeaderContent />
                            <MobileCard />
                            <MobileCard />
                            <MobileCard />
                            <MobileCard />
                            <FooterNav />
                        </StyledContent>
                    </StyledMobileLayout>
                </Device>
                <GlobalStyle />
            </ThemeProvider>
        </AtlanticProvider>
    );
};
