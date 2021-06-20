import * as React from "react"
import {StyleProp, View, ViewStyle} from "react-native"
import {color, spacing} from "../../../theme"

const CONTAINER: ViewStyle = {
  padding: spacing[5],
  // elevation: 0,
  // shadowOpacity: 0,
  minHeight: 100,
  borderColor: color.primary, // Todo: replace with shadow
  borderWidth: 2,
  marginBottom: 15,
  borderRadius: 8,
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
