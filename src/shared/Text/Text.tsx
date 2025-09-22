import * as React from "react"
import styled, { css } from "styled-components"

import { handleHideOnDevice, type HandleHideOnDeviceProps, nowrapWithDots } from "../../styles/mixins"
import type { Color, FontSize } from "../../styles/theme"
import { type CSSValue, getSpaceWithDirections, parseCSSValue, type Space } from "../../styles/utils"

export type TextProps = {
    $size?: FontSize
    $color?: Color
    $inline?: boolean
    margin?: Space
    textTransform?: "lowercase" | "uppercase" | "capitalize"
    textDecoration?: "none" | "underline"
    preline?: boolean
    $wrap?: boolean
    nowrap?: boolean
    align?: "center" | "left" | "right"
    shadow?: string
    onClick?: (event: React.MouseEvent<HTMLParagraphElement>) => void
} & HandleHideOnDeviceProps

export const Text = styled.p.attrs({ dir: "auto" })<TextProps>`
    display: ${p => p.$inline && "inline-block"};
    color: ${p => p.$color && p.theme.colors[p.$color]};
    text-transform: ${p => p.textTransform};
    text-decoration: ${p => p.textDecoration};
    text-align: ${p => p.align || "left"};
    ${p => p.shadow && `text-shadow: ${p.shadow};`}
    ${p => p.margin && getSpaceWithDirections("margin")(p.margin)};
    ${p => p.$size && p.theme.typography.sizes[p.$size]};
    ${p =>
        p.preline &&
        css`
            white-space: pre-line;
        `}
    ${p =>
        p.$wrap &&
        css`
            word-break: break-word;
        `}
    ${p => p.nowrap && nowrapWithDots}
    ${handleHideOnDevice}
    ${p =>
        p.onClick &&
        css`
            &:hover {
                color: ${p.theme.colors.primary50};
                cursor: pointer;
            }
        `}
`

type TextSkeletonProps = {
    $width?: CSSValue
    maxWidth?: CSSValue
} & Pick<TextProps, "$size"> &
    HandleHideOnDeviceProps
export const TextSkeleton = styled.div<TextSkeletonProps>`
    width: ${p => parseCSSValue(p.$width) ?? "100%"};
    max-width: ${p => parseCSSValue(p.maxWidth)};

    ${p => {
        const sizes = p.theme.typography.rawSizes[p.$size ?? "large"]
        return css`
            height: ${sizes.lineHeight}px;
        `
    }}
    ${handleHideOnDevice}
`
