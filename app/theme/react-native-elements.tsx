import {sizing, spacing} from "./sizing";
import {Theme, ThemeProvider} from "react-native-elements";
import React from "react";
import {color} from "./color";

export const theme: Theme = {
    colors: {
        primary: color.primary
    },
    Badge: {
        badgeStyle: {
            borderRadius: 5,
            padding: spacing[1],
            height: undefined,
            borderColor: color.transparent,
        },
        textStyle: {
            fontSize: sizing[3]
        }
    },
}

export function RneThemeProvider({ children }) {
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    );
}
