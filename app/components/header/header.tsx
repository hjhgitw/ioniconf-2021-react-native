import React from "react"
import { View, ViewStyle, TextStyle, ImageStyle } from "react-native"
import { HeaderProps } from "./header.props"
import { Button } from "../button/button"
import { Text } from "../text/text"
import { Icon } from "../icon/icon"
import { color, spacing } from "../../theme"

// static styles
const ROOT: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: spacing[4],
  alignItems: "center",
  paddingTop: spacing[4],
  paddingBottom: spacing[4],
  justifyContent: "flex-start",
  backgroundColor: color.palette.white,
}
const TITLE: TextStyle = { textAlign: "center", color: color.accentDarker, fontWeight: "bold" }
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: "center" }
const LEFT: ViewStyle = { width: 32 }
const EDGE_WRAPPER: ViewStyle = { flexDirection: "row", alignItems: "center" }
const RIGHT: ViewStyle = { width: 32 }
const ICON_MARGIN: ImageStyle = { marginRight: spacing[2] }

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function Header(props: HeaderProps) {
  const {
    onLeftPress,
    onRightPress,
    rightIcon,
    rightText,
    leftIcon,
    leftText,
    headerText,
    style,
    titleStyle,
  } = props
  const header = headerText || ""

  return (
    <View style={{ ...ROOT, ...style }}>
      {leftIcon || leftText ? (
        <Button preset="link" onPress={onLeftPress}>
          <View style={EDGE_WRAPPER}>
            {leftIcon && <Icon icon={leftIcon} style={leftText ? ICON_MARGIN : undefined} />}
            {leftText && <Text text={leftText || ""} />}
          </View>
        </Button>
      ) : (
        <View style={LEFT} />
      )}
      <View style={TITLE_MIDDLE}>
        <Text style={{ ...TITLE, ...titleStyle }} text={header} />
      </View>
      {rightIcon || rightText ? (
        <Button preset="link" onPress={onRightPress}>
          <View style={EDGE_WRAPPER}>
            {rightIcon && <Icon icon={rightIcon} style={rightText ? ICON_MARGIN : undefined} />}
            {rightText && <Text text={rightText || ""} />}
          </View>
        </Button>
      ) : (
        <View style={RIGHT} />
      )}
    </View>
  )
}
