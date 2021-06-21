import { ViewStyle, TextStyle } from "react-native"
import {color, sizing} from "../../../theme"

export const viewPresets = {
  primary: { backgroundColor: color.primaryLighter } as ViewStyle,
  success: { backgroundColor: color.palette.successLighter } as ViewStyle,
}

export const textPresets = {
  primary: {color: color.primary} as TextStyle,
  success: {color: color.palette.success} as TextStyle,
}

/**
 * A list of preset names.
 */
export type UiBadgePresetNames = keyof typeof viewPresets
