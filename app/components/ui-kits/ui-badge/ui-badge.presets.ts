import { ViewStyle, TextStyle } from "react-native"
import {color} from "../../../theme"

export const viewPresets = {
  primary: { backgroundColor: color.primaryLighter } as ViewStyle,
  success: { backgroundColor: color.palette.successLighter } as ViewStyle,
  greenDark: { backgroundColor: color.palette.greenDark } as ViewStyle,
}

export const textPresets = {
  primary: {color: color.primary} as TextStyle,
  success: {color: color.palette.success} as TextStyle,
  greenDark: {color: color.palette.white} as TextStyle,
}

/**
 * A list of preset names.
 */
export type UiBadgePresetNames = keyof typeof viewPresets
