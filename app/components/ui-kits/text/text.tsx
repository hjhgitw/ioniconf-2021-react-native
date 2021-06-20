import * as React from "react"
import { Text as ReactNativeText } from "react-native"
import { presets } from "./text.presets"
import { TextProps } from "./text.props"
import { mergeAll, flatten } from "ramda"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Text(props: TextProps) {
  // grab the props
  const { preset = "default", text, children, style: styleOverride, mb: marginBottom, ...rest } = props

  // figure out which content to use
  const content = text || children
  const normalizedPreset = Array.isArray(preset) ? mergeAll(preset.map(p => presets[p])) : presets[preset];

  const style = mergeAll(flatten([ normalizedPreset || presets.default, styleOverride, marginBottom !== undefined ? {marginBottom} : null]))

  return (
    <ReactNativeText {...rest} style={style}>
      {content}
    </ReactNativeText>
  )
}
