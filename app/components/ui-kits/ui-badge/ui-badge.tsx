import * as React from "react"
import { mergeAll, flatten } from "ramda"
import {UiBadgeProps} from "./ui-badge.props";
import {Badge as RneBadge} from 'react-native-elements';
import {textPresets, viewPresets} from "./ui-badge.presets";


export function UiBadge(props: UiBadgeProps) {
    // grab the props
    const {
        preset = "primary",
        text,
        style: styleOverride,
        textStyle: textStyleOverride,
        center,
        ...rest
    } = props

    const viewStyle = mergeAll(flatten([{alignSelf: center ? "center" : "flex-start"}, viewPresets[preset] || viewPresets.primary, styleOverride]))
    const textStyle = mergeAll(
        flatten([textPresets[preset] || textPresets.primary, textStyleOverride]),
    )

    return (
        <RneBadge value={text} badgeStyle={viewStyle} textStyle={textStyle} />
    )
}
