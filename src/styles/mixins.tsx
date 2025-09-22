import { css } from "styled-components"


import type { Color } from "./theme"
import { type CSSValue, getSpaceWithDirections, parseCSSValue, type Space } from "./utils"
import { isMobile } from "../hooks/common/useDevice"

export const linkStyles = css`
    display: inline-block;
    text-decoration: none;
    color: ${p => p.theme.colors.primary50};
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

export const cleanLinkStyles = css`
    color: inherit;

    &,
    &:hover {
        text-decoration: none;
    }
`

// https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/
export const visuallyHidden = css`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    color: transparent;
`

export const backdrop = css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${p => p.theme.colors.gray100};
    opacity: 0.8;
    z-index: -1;
`

export const nowrapWithDots = css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export const aspectRatio16x9Padding = css`
    padding-bottom: 56.25%;
`

export const aspectRatioSquarePadding = css`
    padding-bottom: 100%;
`

export type HandleMarginProps = {
    margin?: Space
    marginM?: Space
}

export const handleMargin = css<HandleMarginProps>`
    ${p => p.margin && getSpaceWithDirections("margin")(p.margin)};
    ${p =>
        isMobile(p.theme.device) &&
        css`
            ${p.marginM && getSpaceWithDirections("margin")(p.marginM)};
        `}
`

export type HandlePaddingProps = {
    padding?: Space
    paddingM?: Space
}

export const handlePadding = css<HandlePaddingProps>`
    ${p => p.padding && getSpaceWithDirections("padding")(p.padding)};
    ${p =>
        isMobile(p.theme.device) &&
        css`
            ${p.paddingM && getSpaceWithDirections("padding")(p.paddingM)};
        `}
`

export type HandleOffsetProps = {
    offset?: Space
    offsetM?: Space
}

export const handleOffset = css<HandleOffsetProps>`
    ${p => p.offset && getSpaceWithDirections("offset")(p.offset)};
    ${p =>
        isMobile(p.theme.device) &&
        css`
            ${p.offsetM && getSpaceWithDirections("offset")(p.offsetM)};
        `}
`

export type HandleHideOnDeviceProps = {
    hideM?: boolean
    hideD?: boolean
}

export const handleHideOnDevice = css<HandleHideOnDeviceProps>`
    display: ${p => (isMobile(p.theme.device) ? p.hideM && "none" : p.hideD && "none")};
`

export type HandleWidthProps = {
    width?: CSSValue
    maxWidth?: CSSValue
}

export const handleWidth = css<HandleWidthProps>`
    width: ${p => p.width && parseCSSValue(p.width)};
    max-width: ${p => p.maxWidth && parseCSSValue(p.maxWidth)};
`

export type HandleHeightProps = {
    height?: CSSValue
    maxHeight?: CSSValue
}

export const handleHeight = css<HandleHeightProps>`
    height: ${p => p.height && parseCSSValue(p.height)};
    max-height: ${p => p.maxHeight && parseCSSValue(p.maxHeight)};
`

export type HandleBorderProps = {
    border?: {
        width: number
        color: Color
        radius?: string
    }
}

export const handleBorder = css<HandleBorderProps>`
    border: ${p => p.border && `${p.border.width}px solid ${p.theme.colors[p.border.color]}`};
    border-radius: ${p => p.border?.radius};
`

export type HandleBackgroundProps = {
    background?: {
        color: Color
    }
}

export const handleBackground = css<HandleBackgroundProps>`
    background-color: ${p => p.background && p.theme.colors[p.background.color]};
`


