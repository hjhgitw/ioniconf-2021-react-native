import * as React from "react"
import {UiBadge} from "./ui-kits";
import {color, spacing} from "../theme";

/**
 * Describe your component here
 */
export function JobsSpecialityBadge(props: {
    title: string,
    acronym: string,
    color: string,
    group?: boolean,
}) {
    return (
        <UiBadge
            text={props.group ? props.acronym : props.title}
            style={{ backgroundColor: props.color, marginRight: props.group ? spacing[3] : 0 }}
            textStyle={{ color: color.palette.white}}
        />
    );
}
