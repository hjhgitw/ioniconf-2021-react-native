import * as React from "react"
import {View, ViewStyle} from "react-native"
import {color, spacing} from "../../theme"

const CONTAINER: ViewStyle = {
  padding: spacing[5],
  elevation: 0,
  shadowOpacity: 0,
  minHeight: 100,
  borderColor: color.primary,
  borderWidth: 2,
  marginBottom: 15,
}

export interface UiCardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
  children?: React.ReactNode
}

/**
 * Describe your component here
 */
export function UiCard(props: UiCardProps) {
  const { style } = props

  return <View style={[CONTAINER, style]}>{props.children}</View>
}
