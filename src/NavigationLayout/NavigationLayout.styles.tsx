import styled, { css } from "styled-components"

import { parseCSSValue, type CSSValue } from "../styles/utils"

export const Card = styled.div`
    border: 1px solid ${p => p.theme.colors.gray40};
    border-radius: ${p => p.theme.radius.large};
`

export const NavCard = styled(Card)`
    padding: 8px;
    width: 316px;

    position: sticky;
    top: 24px;
`

export const ContentCard = styled(Card)`
    padding: 24px 24px 0;
    width: 660px;
`

export const NavList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

type NavLinkProps = {
    $active: boolean
}

export const NavLink = styled.button<NavLinkProps>`
    background-color: #fff;
    ${p => p.theme.typography.sizes.large};
    padding: 8px;
    width: 100%;
    color: ${p => p.theme.colors.gray100};
    text-decoration: none;
    text-align: left;
    border-radius: ${p => p.theme.radius.small};
    cursor: pointer;
    transition: all 0.15s ease-in-out;

    svg {
        transition: all 0.15s ease-in-out;
    }

    &:hover,
    &:hover svg {
        color: ${p => p.theme.colors.primary50};
        text-decoration: none;
    }

    ${p =>
        p.$active &&
        css`
            background: ${p => p.theme.colors.gray0};
            color: ${p => p.theme.colors.primary50};
        `}
`


export const Flex = styled.div`
        align-items: flex-start;
        display: flex;
        padding-top: 32px;
        padding-bottom: 16px;
        gap: 24px;
`

export const NavLinkContent = styled.div`
        align-items: center;
        display: flex;
        gap: 8px;
`

export const containerWidth = 1000
export const containerPadding = 16

type ContainerProps = {
    height?: CSSValue
    maxWidth?: number
    grow?: boolean
    position?: "relative" | "absolute" | "fixed"
    padding?: CSSValue
}


export const Container = styled.div<ContainerProps>`
    max-width: ${p => (p.maxWidth || containerWidth) + 2 * containerPadding}px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: ${p => (p.padding ? parseCSSValue(p.padding) : `0 ${containerPadding}px 45px ${containerPadding}px`)};
    flex-grow: ${p => (p.grow === undefined ? 1 : p.grow && 1)};
    height: ${p => p.height && parseCSSValue(p.height)};
    position: ${p => p.position};

    &:empty {
        margin: 0;
    }
`
