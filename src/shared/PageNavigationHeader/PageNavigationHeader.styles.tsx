import styled from "styled-components";

import type { Color } from "../../styles/theme";

import { mobileWidth } from "../../hooks/common/useDevice";

export enum Direction {
  Row = "Row",
  Column = "Column",
}

export enum Justify {
  SpaceBetween = "SpaceBetween",
  FlexStart = "FlexStart",
}

export enum Align {
  Center = "Center",
  FlexStart = "FlexStart",
}

export const StyledHeader = styled.header<{
  direction?: Direction;
  goBackUrl?: string;
  justify?: Justify;
  align?: Align;
  title?: string;
  hasBottomBorder?: boolean;
  isMobile?: boolean;
  backgroundColor?: Color | string;
  withoutTopPadding?: boolean;
  flexDirection?: "column" | "row";
}>`
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor
      ? backgroundColor in theme.colors
        ? theme.colors[backgroundColor as Color]
        : backgroundColor
      : theme.colors.transparent};
  align-items: ${({ align }) =>
    align === Align.FlexStart ? "flex-start" : "center"};
  border-bottom: ${({ hasBottomBorder, theme }) =>
    hasBottomBorder ? `1px solid ${theme.colors.gray5}` : "none"};
  display: flex;
  flex-direction: ${({ direction }) => (direction ? "column" : "row")};
  padding: ${({ isMobile, withoutTopPadding }) => {
    if (!isMobile) return "16px 32px";

    return `${withoutTopPadding ? "16px" : "70px"} 16px 16px 16px`;
  }};
  position: relative;
  justify-content: ${({ justify }) =>
    justify === Justify.SpaceBetween ? "space-between" : "flex-start"};
  gap: ${({ justify }) => justify === Justify.FlexStart && "48px"};

  @media screen and (max-width: ${mobileWidth}px) {
    ${({ direction, justify }) =>
      direction === Direction.Row
        ? `
                align-items: center;
                flex-direction: row;
                justify-content: ${
                  justify === Justify.SpaceBetween
                    ? "space-between"
                    : "flex-start"
                };
            `
        : `
                flex-direction: column;
                align-items: flex-start;
            `};
    gap: ${({ justify }) => justify === Justify.FlexStart && "8px"};
    border: none;
  }
`;

export const StyledMainContent = styled.div<{ useFullWidth?: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  width: ${({ useFullWidth }) => (useFullWidth ? "100%" : "auto")};

  @media screen and (max-width: ${mobileWidth}px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }
`;
