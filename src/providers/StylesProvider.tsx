import React from "react";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

import { linkStyles } from "../styles/mixins";
import { theme as baseTheme } from "../styles/theme";
import { useDevice } from "../hooks/common/useDevice";

// In case of problems with RTL:
// https://rtlstyling.com/posts/rtl-styling
// https://css-tricks.com/building-multi-directional-layouts/

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background-color: #fff;
    }

    body, html {
        font-family: ${(p) => p.theme.typography.fontFamily};
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: ${(p) => p.theme.colors.gray100};
        position: relative;
        height: 100%;
        margin: 0;
        padding: 0;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: none;
    }

    #root {
        display: flex;
        min-height: 100%;
    }

    input, button, textarea {
        font-family: ${(p) => p.theme.typography.fontFamily};
        margin: 0;
    }

    button {
        color: inherit;
        &:active {
            color: inherit;
        }
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5 {
        margin: 0;
    }

    a {
        ${linkStyles}
    }
`;

type StylesProviderProps = React.PropsWithChildren<unknown>;

export function StylesProvider({ children }: StylesProviderProps) {
  const device = useDevice();

  React.useEffect(() => {
    document.dir = "ltr";
  }, []);

  const theme = React.useMemo(
    () => ({ ...baseTheme, device, rtl: false }),
    [device]
  );

  return (
    // There is some typing issue, https://github.com/styled-components/stylis-plugin-rtl/issues/38
    // Update to styled-components v6 and stylis-plugin-rtl to v2 would probably resolve this

    <StyleSheetManager>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  );
}
