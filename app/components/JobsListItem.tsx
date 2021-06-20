import * as React from "react"
import {StyleProp, View, ViewStyle} from "react-native"
import {color, spacing} from "../theme"
import {UiCard} from "./ui-kits";

const CONTAINER: ViewStyle = {

}

export interface JobsListItemProps {
    /**
     * An optional style override useful for padding & margin.
     */
    style?: StyleProp<ViewStyle>
    children?: React.ReactNode
}

/**
 * Describe your component here
 */
export function JobsListItem(props: JobsListItemProps) {
    const { style } = props

    return <UiCard style={[CONTAINER, style]}>{props.children}</UiCard>
}
