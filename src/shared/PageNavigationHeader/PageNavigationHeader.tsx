import React from "react";

import { Text } from "../../shared/Text";

import type { Color } from "../../styles/theme";

import { StyledHeader, StyledMainContent } from "./PageNavigationHeader.styles";

interface IPageNavigationHeaderProps {
  additionalContent?: React.ReactNode | React.ReactNode[];
  direction?: Direction;
  getShouldUseFallback?: ({
    current,
    from,
  }: {
    current: string;
    from: string;
  }) => boolean;
  goBackUrl?: string | null;
  goBackReplace?: boolean;
  justify?: Justify;
  align?: Align;
  title?: string | null;
  titleDataCy?: string;
  hasBottomBorder?: boolean;
  backgroundColor?: Color | string;
  withoutTopPadding?: boolean;
  useFullWidth?: boolean;
}

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

export const PageNavigationHeader = ({
  additionalContent,
  direction = Direction.Row,
  goBackUrl,
  justify = Justify.SpaceBetween,
  align = Align.Center,
  title,
  titleDataCy,
  hasBottomBorder = true,
  backgroundColor,
  withoutTopPadding,
  useFullWidth = false,
}: IPageNavigationHeaderProps) => (
  <StyledHeader
    withoutTopPadding={withoutTopPadding}
    backgroundColor={backgroundColor}
    direction={direction}
    goBackUrl={goBackUrl || undefined}
    justify={justify}
    align={align}
    title={title || undefined}
    hasBottomBorder={hasBottomBorder}
    isMobile={false}
  >
    <StyledMainContent useFullWidth={useFullWidth}>
      {title ? (
        <Text data-cy={titleDataCy} $size={"H500"}>
          {title}
        </Text>
      ) : null}
    </StyledMainContent>

    {additionalContent}
  </StyledHeader>
);
