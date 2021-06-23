import * as React from "react"
import {UiBadge} from "./ui-kits";
import {color, spacing} from "../theme";

/**
 * Describe your component here
 */
export function JobLicenseBadge(props: {
    text: string,
    center: boolean,
}) {
    const primary = props.text === 'CNA';
    return (
        <UiBadge
            text={props.text}
            preset={primary ? 'primary' : 'greenDark'}
            center={props.center}
        />
    );
}
