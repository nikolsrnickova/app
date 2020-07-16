import { Devices } from './Devices';
export const Breakpoints = {
    mobile: `@media (min-width: ${Devices.mobile.from}px) and (max-width: ${Devices.mobile.to}px)`,
    tabletVertical: `@media (min-width: ${Devices.tabletVertical.from}px) and (max-width: ${Devices.tabletVertical.to}px)`,
    tabletHorizontal: `@media (min-width: ${Devices.tabletHorizontal.from}px) and (max-width: ${Devices.tabletHorizontal.to}px)`,
    laptop: `@media (min-width: ${Devices.laptop.from}px) and (max-width: ${Devices.laptop.to}px)`,
    desktop: `@media (min-width: ${Devices.desktop.from}px) and (max-width: ${Devices.desktop.to}px)`,
};
