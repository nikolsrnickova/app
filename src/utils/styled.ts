import originialStyled, { ThemedStyledInterface } from "styled-components";
import { theme } from "react-atlantic";

export const styled = originialStyled as ThemedStyledInterface<typeof theme>