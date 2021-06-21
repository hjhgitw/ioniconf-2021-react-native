import * as React from "react"
import {Image, ImageStyle, StyleProp, TextStyle, TouchableOpacity, View, ViewStyle} from "react-native"
import {color, spacing, sizing} from "../theme"
import {Button, Icon, Text, UiCard} from "./ui-kits";
import {useNavigation} from "@react-navigation/native";
import {JobHelper} from "../helpers/job.helper";
import {useEffect, useState} from "react";
import {useScreenInfo} from "../hooks/useScreenInfo";

export interface JobsDetailItemProps {
    /**
     * An optional style override useful for padding & margin.
     */
    style?: StyleProp<ViewStyle>,
    key?: string | number,
    job: {[k:string]: any}
}

const BOX_PADDING: ViewStyle = {padding: spacing[4]}

const CONTAINER: ViewStyle = {padding: 0}
const CARD_HEADER: ViewStyle = { flexGrow: 1, width: '100%', borderBottomWidth: 1, borderColor: color.line}
const CARD_HEADER_IMG: ImageStyle = { minHeight: 1, backgroundColor: color.primaryAlpha50, borderTopLeftRadius: 8,borderTopRightRadius: 8, zIndex: 1 }
const CARD_HEADER_OVERLAY: ViewStyle = { backgroundColor: color.primaryAlpha50, height: '100%', width: '100%', borderTopLeftRadius: 8,borderTopRightRadius: 8, zIndex: 2, position: 'absolute' }
const CARD_HEADER_CONTENT: ViewStyle = {...BOX_PADDING, backgroundColor: color.primaryAlpha50, height: '100%', width: '100%', borderTopLeftRadius: 8,borderTopRightRadius: 8, zIndex: 2, position: 'absolute' }
const CARD_HEADER_CONTENT__AMOUNT: TextStyle = { fontWeight: "bold", fontFamily: 'Roboto-Bold', marginTop: spacing[1], letterSpacing: 0.66}
const CARD_HEADER_CONTENT__NURSE_AMOUNT: TextStyle = { marginTop: spacing[0], letterSpacing: 0.66}

const FOOTER_CONTAINER: ViewStyle = { borderTopWidth: 1, borderColor: color.line }

/**
 * Describe your component here
 */
export function JobsDetailItem(props: JobsDetailItemProps) {
    const { style, job } = props
    const navigation = useNavigation()
    const screenInfo = useScreenInfo();
    const [height, setHeight] = useState(1);
    const goToDetails = () => navigation.navigate('job.details', {slug: job.job_id})

    useEffect(() => {
        Image.getSize(job.facility.image_url, (width, height) => {
            const parentWidth = screenInfo.width; // Todo: This is inaccurate
            setHeight(height * (parentWidth / width));
        })
    }, [screenInfo])

    return (
        <UiCard style={[CONTAINER, style]}>
            <TouchableOpacity style={CARD_HEADER} onPress={goToDetails}>
                <Image source={{ uri: job.facility.image_url }} style={[CARD_HEADER_IMG, { height: height }]} />
                <View style={CARD_HEADER_OVERLAY} />
                <View style={CARD_HEADER_CONTENT}>
                    <Text preset={['h4', 'tertiaryDark']} text={'Estimated total amount'} />
                    <Text preset={['h3', 'tertiary']} style={CARD_HEADER_CONTENT__AMOUNT} text={`$${JobHelper.jobAmount(job)}`} />

                    <View style={{ marginTop: 'auto'}}>
                        <Text preset={['h4', 'tertiaryDark']} text={'Nurse pay'} />
                        <Text preset={['h4', 'tertiary']} style={CARD_HEADER_CONTENT__NURSE_AMOUNT} text={`$${JobHelper.jobAmount(job)}`} />
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={BOX_PADDING} onPress={goToDetails}>
                <Text preset={['h4', 'dark']} text={job.facility.fac_name} mb={spacing[3]} style={{ textAlign: "center" }} />
                <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
                    <Text preset={'h5'} text={JobHelper.jobFacilityLocation(job)} mb={spacing[4]} style={{ textAlign: "center" }} />
                    <Icon icon={'marker-purple'} style={{ marginLeft: 'auto'}} />
                </View>
            </TouchableOpacity>
            <View style={FOOTER_CONTAINER}>
                <Button text={'See on the Map'} preset={'clear'} onPress={goToDetails} />
            </View>
        </UiCard>
    );
}
