import { TextStyle } from "react-native"
import {color, sizing, typography} from "../../../theme"

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  fontSize: sizing[4],
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: {...BASE, color: color.text},

  /**
   * Large headers.
   */
  header: { ...BASE, color: color.text, fontSize: 24, fontWeight: "bold" } as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: { ...BASE, color: color.text, fontSize: 13 } as TextStyle,

  // Colors
  primary: { color: color.primary } as TextStyle,
  dark: { color: color.textDark } as TextStyle,
  tertiary: { color: color.textTertiary } as TextStyle,
  tertiaryDark: { color: color.textTertiaryDark } as TextStyle,
  // light100: { ...BASE, color: color.palette.white } as TextStyle,
  // light200: { ...BASE, color: color.palette.white } as TextStyle,

  // Sizes
  large: { ...BASE, fontSize: sizing[8] } as TextStyle,
  h1: { ...BASE, fontSize: sizing[7] } as TextStyle,
  h2: { ...BASE, fontSize: sizing[6] } as TextStyle,
  h3: { ...BASE, fontSize: sizing[5] } as TextStyle,
  h4: { ...BASE, fontSize: sizing[4] } as TextStyle,
  h5: { ...BASE, fontSize: sizing[3] } as TextStyle,
  h6: { ...BASE, fontSize: sizing[2] } as TextStyle,

  // Weight
  bold: { fontWeight: 'bold', fontFamily: typography.primaryBold } as TextStyle,
}

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets
