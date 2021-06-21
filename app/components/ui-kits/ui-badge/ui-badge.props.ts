import { ViewStyle, TextStyle, TouchableOpacityProps } from "react-native"
import { UiBadgePresetNames } from "./ui-badge.presets"

export interface UiBadgeProps extends TouchableOpacityProps {
  /**
   * The text to display.
   */
  text?: string

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle | ViewStyle[]

  /**
   * An optional style override useful for the button text.
   */
  textStyle?: TextStyle | TextStyle[]

  /**
   * One of the different types of text presets.
   */
  preset?: UiBadgePresetNames

  center?: boolean
}
