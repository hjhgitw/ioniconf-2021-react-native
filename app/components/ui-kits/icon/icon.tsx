import * as React from "react"
import {View, Image, ImageStyle} from "react-native"
import { IconProps } from "./icon.props"
import { icons } from "./icons"

const ROOT: ImageStyle = {
  resizeMode: "contain",
}

export function Icon(props: IconProps) {
  const { style: styleOverride, icon, containerStyle } = props

  const shortHandStyle: ImageStyle = ['width', 'height'].reduce((acc, cur) => {
    if (props[cur] !== undefined) {
      acc[cur] = props[cur];
    }
    return acc;
  }, {} as ImageStyle);

  const style: ImageStyle = { ...ROOT, ...styleOverride, ...shortHandStyle }

  return (
    <View style={containerStyle}>
      <Image style={style} source={icons[icon]} />
    </View>
  )
}
