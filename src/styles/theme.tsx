import { css } from "styled-components"

export enum Device {
    Mobile,
    Desktop,
}

declare module "styled-components" {
    export interface DefaultTheme {
        colors: typeof colors
        shadows: typeof shadows
        typography: typeof typography
        zIndexes: typeof zIndexes
        device: Device
        // Be careful with this as some CSS (like "direction") is flipped by stylis-plugin-rtl
        rtl: boolean
        radius: typeof radius
    }
}

export const colors = {
    white: "#FFF",
    black: "#000",
    transparent: "#00000000",
    gray100: "#272727",
    gray80: "#6E7079",
    gray60: "#B7B9BF",
    gray40: "#D6D9E4",
    gray5: "#E7EBF6",
    gray0: "#F4F6FB",
    primary100: "#C34736",
    primary50: "#EA4F3A",
    primary20: "#EE7261",
    primary10: "#F29589",
    primary5: "#FFCDC7",
    primary0: "#FFEFED",
    green100: "#285C43",
    green80: "#285C43",
    green50: "#3F926F",
    green20: "#54B98E",
    green10: "#A5EECF",
    yellow100: "#D69D14",
    yellow50: "#F6B720",
    yellow20: "#FFD265",
    yellow10: "#FFEBBD",
    red100: "#A91419",
    red50: "#DE1C22",
    red20: "#E86064",
    red10: "#F5BBBD",
    // Content themes colors, used in designs
    careerDark: "#52A0CC",
    careerLight: "#EEF6FA",
    careerMedium: "#CBE3F0",
    crisisDark: "#5C5575",
    crisisLight: "#EFEEF1",
    crisisMedium: "#CECCD6",
    healthDark: "#0E855C",
    healthLight: "#E7F3EF",
    healthMedium: "#B7DACE",
    managementDark: "#F29589",
    managementLight: "#FEF4F3",
    managementMedium: "#FBDFDC",
    mindfulnessDark: "#5C60BA",
    mindfulnessLight: "#EFEFF8",
    mindfulnessMedium: "#CECFEA",
    relationsDark: "#E5B031",
    relationsLight: "#FCF7EA",
    relationsMedium: "#F7E7C1",
    stressDark: "#D394BB",
    stressLight: "#FBF4F8",
    stressMedium: "#F2DFEB",
    medicalDark: "#00C3A5",
    medicalLight: "#D4F7F2",
    medicalMedium: "#A4F4E9",
    medicalExtraDark: "#007563",
    chatDark: "#1A1C66",
    chatMedium: "#8284CA",
    beige: "#C9B9A3",
    beigeLight: "#E0D7CD",
    beigeDark: "#332E28",
    mindgramLight: "#E7F2F9",
    mindgramDark: "#B9D3DF",
    mindgramExtraDark: "#2F604F",
    mindgramStrong: "#1F3F34",
} as const

export type Color = keyof typeof colors

export const shadows = {
    small: "0px 4px 6px rgba(26, 26, 26, 0.08)",
    medium: "0px 8px 12px rgba(26, 26, 26, 0.08)",
    large: "0px 16px 32px rgba(26, 26, 26, 0.08)",
    dropShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    actionButtonShadow: "0px -4px 6px 0px rgba(26, 26, 26, 0.08)",
    textShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
}

export type Shadow = keyof typeof shadows

const typographyRawSizes = {
    extraSmall: {
        fontWeight: 400,
        fontSize: 10,
        lineHeight: 16,
    },
    small: {
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 20,
    },
    medium: {
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 20,
    },
    large: {
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 24,
    },
    extraLarge: {
        fontWeight: 400,
        fontSize: 20,
        lineHeight: 34,
    },
    H1200: {
        fontWeight: 700,
        fontSize: 160,
        lineHeight: 160,
    },
    H1100: {
        fontWeight: 700,
        fontSize: 120,
        lineHeight: 120,
    },
    H1050: {
        fontWeight: 700,
        fontSize: 96,
        lineHeight: 96,
    },
    H1000: {
        fontWeight: 700,
        fontSize: 80,
        lineHeight: 80,
    },
    H900: {
        fontWeight: 700,
        fontSize: 72,
        lineHeight: 94,
    },
    H800: {
        fontWeight: 700,
        fontSize: 56,
        lineHeight: 84,
    },
    H700: {
        fontWeight: 700,
        fontSize: 40,
        lineHeight: 60,
    },
    H600: {
        fontWeight: 700,
        fontSize: 28,
        lineHeight: 44,
    },
    H500: {
        fontWeight: 700,
        fontSize: 24,
        lineHeight: 36,
    },
    H400: {
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 28,
    },
    H300: {
        fontWeight: 700,
        fontSize: 16,
        lineHeight: 24,
    },
    H200: {
        fontWeight: 700,
        fontSize: 14,
        lineHeight: 20,
    },
    H100: {
        fontWeight: 700,
        fontSize: 12,
        lineHeight: 16,
    },
} as const

export const typography = {
    fontFamily: "Sora, Helvetica, Arial, sans-serif",
    rawSizes: typographyRawSizes,
    sizes: (Object.keys(typographyRawSizes) as Array<keyof typeof typographyRawSizes>).reduce<
        Record<keyof typeof typographyRawSizes, ReturnType<typeof css>>
    >((prev, curr) => {
        prev[curr] = css`
            font-weight: ${typographyRawSizes[curr].fontWeight};
            font-size: ${typographyRawSizes[curr].fontSize}px;
            line-height: ${typographyRawSizes[curr].lineHeight}px;
        `;
        return prev;
    }, {} as any),
}

export type FontSize = keyof typeof typography.sizes

export const zIndexes = {
    // 1 is reserved for local modifications
    inputOverlay: 2,
    audioPlayer: 2,
    header: 2,
    bottomContainer: 6,
    bottomBar: 12,
    chat: 4,
    navigationMenu: 7,
    dropdown: 8,
    globalMessage: 9,
    modal: 10,
    toast: 11,
    mobileNotificationsAndCalendar: 100,
}

export type ZIndex = keyof typeof zIndexes

export const radius = {
    xxLarge: "48px",
    xLarge: "24px",
    large: "16px",
    medium: "12px",
    small: "8px",
    full: "100%",
}

export const theme = {
    colors,
    shadows,
    typography,
    zIndexes,
    device: Device.Desktop,
    rtl: false,
    radius,
}

