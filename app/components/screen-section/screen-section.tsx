import * as React from "react"
import { View, ViewStyle } from "react-native"
import { spacing } from "../../theme"
import { flatten, mergeAll } from "ramda"

const spacer = spacing[3]
const presets = {
  main: {
    paddingHorizontal: spacer,
    paddingVertical: spacer,
  } as ViewStyle,
  content: {
    paddingHorizontal: spacer,
  } as ViewStyle,
  top: {
    paddingTop: spacer,
    paddingHorizontal: spacer,
  } as ViewStyle,
  bottom: {
    paddingBottom: spacer,
    paddingHorizontal: spacer,
  } as ViewStyle,
}

export interface ScreenSectionProps {
  preset: keyof typeof presets
  style?: ViewStyle
  children?: React.ReactNode
}

/**
 * A padded section of the screen
 * useful for adding consistent spacing between content and header, footer and/or screen edges.
 *
 * Why not style the screen itself?
 * - We need to have this spacing consistent
 * - Not all sections of a screen may be padded, some might span the entire width.
 * So this is a convenient wrapper for spacing the entire screen or only a few sections
 */
export function ScreenSection(props: ScreenSectionProps) {
  const { children, style: styleOverride, preset = "main" } = props
  const viewStyle = mergeAll(flatten([presets[preset] || presets.main, styleOverride]))

  return <View style={viewStyle}>{children}</View>
}
