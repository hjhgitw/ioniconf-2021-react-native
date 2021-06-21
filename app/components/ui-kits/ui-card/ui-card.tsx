import * as React from "react"
import {StyleProp, View, ViewStyle} from "react-native"
import {color, spacing} from "../../../theme"

const CONTAINER: ViewStyle = {
  padding: spacing[4],
  minHeight: 10,
  marginBottom: 15,
  borderRadius: 8,
  backgroundColor: color.background,

  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 12,
  elevation: 10
}

export interface UiCardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

/**
 * Describe your component here
 */
export function UiCard(props: UiCardProps) {
  const { style } = props

  return <View style={[CONTAINER, style]}>{props.children}</View>
}
