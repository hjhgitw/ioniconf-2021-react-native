import { ViewStyle, TextStyle } from "react-native"
import { color, spacing } from "../../../theme"

const size = [0, 4, 8, 12, 16, 24, 32, 48, 64]

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing[3],
  paddingHorizontal: spacing[3],
  borderRadius: 0,
  justifyContent: "center",
  alignItems: "center",
}

const BASE_TEXT: TextStyle = {
  paddingHorizontal: spacing[3],
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const baseViewPresets = {
  /**
   * A smaller piece of secondard information.
   */
  primary: { ...BASE_VIEW, backgroundColor: color.primary } as ViewStyle,

  clear: { ...BASE_VIEW, backgroundColor: color.transparent } as ViewStyle,

  /**
   * A button without extras.
   */
  link: {
    ...BASE_VIEW,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: "flex-start",
  } as ViewStyle,
}

// Todo: move size to separate prop: size="lg"
export const viewPresets = {
  ...baseViewPresets,
  "primary:sm": {
    ...baseViewPresets.primary,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[2],
  } as ViewStyle,
  "primary:md": { ...baseViewPresets.primary } as ViewStyle,
  "primary:lg": { ...baseViewPresets.primary } as ViewStyle,
}

export const baseTextPresets = {
  primary: {
    ...BASE_TEXT,
    fontSize: size[4],
    color: color.palette.white,
    fontWeight: "bold",
  } as TextStyle,
  link: {
    ...BASE_TEXT,
    color: color.text,
    paddingHorizontal: 0,
    paddingVertical: 0,
  } as TextStyle,
  clear: {
    ...BASE_TEXT,
    color: color.primary,
  } as TextStyle,
}

export const textPresets = {
  ...baseTextPresets,
  "primary:sm": {
    ...baseTextPresets.primary,
    fontSize: size[3],
  } as TextStyle,
  "primary:lg": {
    ...baseTextPresets.primary,
    fontSize: size[5],
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[3],
  } as TextStyle,
}

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets
