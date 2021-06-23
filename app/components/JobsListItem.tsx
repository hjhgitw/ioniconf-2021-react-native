import * as React from "react"
import {Image, ImageStyle, StyleProp, TextStyle, TouchableOpacity, View, ViewStyle} from "react-native"
import {color, spacing, sizing} from "../theme"
import {Button, Icon, Text, UiBadge, UiCard} from "./ui-kits";
import {useNavigation} from "@react-navigation/native";
import {JobHelper} from "../helpers/job.helper";
import {JobsSpecialityBadge} from "./JobSpecialityBadge";
import {UiBadgePresetNames} from "./ui-kits/ui-badge/ui-badge.presets";

export interface JobsListItemProps {
    /**
     * An optional style override useful for padding & margin.
     */
    style?: StyleProp<ViewStyle>,
    key?: string | number,
    job: {[k:string]: any}
}

const BOX_PADDING: ViewStyle = {padding: spacing[4]}

const CONTAINER: ViewStyle = {padding: 0}
const CARD_HEADER: ViewStyle = { height: 100, borderBottomWidth: 1, borderColor: color.line}
const CARD_HEADER_IMG: ImageStyle = { backgroundColor: color.primaryAlpha50, height: '100%', borderTopLeftRadius: 8,borderTopRightRadius: 8, zIndex: 1, resizeMode: "cover" }
const CARD_HEADER_OVERLAY: ViewStyle = { backgroundColor: color.primaryAlpha50, height: '100%', width: '100%', borderTopLeftRadius: 8,borderTopRightRadius: 8, zIndex: 2, position: 'absolute' }
const CARD_HEADER_CONTENT: ViewStyle = {...BOX_PADDING, backgroundColor: color.primaryAlpha50, height: '100%', width: '100%', borderTopLeftRadius: 8,borderTopRightRadius: 8, zIndex: 2, position: 'absolute' }
const CARD_HEADER_CONTENT__AMOUNT: TextStyle = { fontWeight: "bold", fontFamily: 'Roboto-Bold', marginTop: spacing[1], letterSpacing: 0.66}

const ATTRIBUTES_ROW: ViewStyle = { display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}
const ATTRIBUTES_ROW_ITEM: ViewStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center'}

const FOOTER_CONTAINER: ViewStyle = { borderTopWidth: 1, borderColor: color.line }

/**
 * Describe your component here
 */
export function JobsListItem(props: JobsListItemProps) {
    const { style, job } = props
    const navigation = useNavigation()
    const goToDetails = () => navigation.navigate('job.details', {slug: job.job_id})
    const tags: {text: string, preset: UiBadgePresetNames}[] = [{text: 'Open', preset: 'success'}, { text: 'CNA', preset: 'primary'}]

    return (
        <UiCard style={[CONTAINER, style]}>
            <TouchableOpacity style={CARD_HEADER} onPress={goToDetails}>
                <Image source={{ uri: job.facility.image_url }} style={CARD_HEADER_IMG} />
                <View style={CARD_HEADER_OVERLAY} />
                <View style={CARD_HEADER_CONTENT}>
                    <Text preset={['h4', 'tertiaryDark']} text={'Estimated total amount'} />
                    <Text preset={['h3', 'tertiary']} style={CARD_HEADER_CONTENT__AMOUNT} text={`$${JobHelper.jobAmount(job)}`} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[BOX_PADDING, {paddingTop: spacing[2]}]} onPress={goToDetails}>
                <View style={{display: "flex", flexDirection: "row", marginBottom: spacing[1] }}>
                    {tags.map((t, i) => (<UiBadge key={t.text} text={t.text} preset={t.preset} style={{ marginRight: tags[i + 1] ? spacing[3] : 0}} />))}
                </View>
                <Text preset={['h4', 'dark']} text={job.facility.fac_name} mb={spacing[3]} />
                <Text preset={'h5'} text={JobHelper.jobFacilityLocation(job)} mb={spacing[5]} />
                <View style={{display: "flex", flexDirection: "row", marginBottom: spacing[4] }}>
                    {job.jobSpecialties.map(js => (
                        <JobsSpecialityBadge
                            key={js.specialty.specialty_acronym}
                            acronym={js.specialty.specialty_acronym}
                            title={js.specialty.specialty_title}
                            color={js.specialty.specialty_color}
                            group={job.jobSpecialties.length > 1}
                        />
                    ))}
                </View>
                <View style={ATTRIBUTES_ROW}>
                    <View style={ATTRIBUTES_ROW_ITEM}>
                        <Icon icon={"per-diem-grey"} width={sizing[5]} height={sizing[5]} />
                        <Text preset={'h5'} text={JobHelper.jobTypeLabel(job.job_type)}  />
                    </View>
                    <View style={ATTRIBUTES_ROW_ITEM}>
                        <Icon icon={"date-grey"} width={sizing[5]} height={sizing[5]} />
                        <Text preset={'h5'} text={JobHelper.shiftStartDate(job.job_start_date)} />
                    </View>
                    <View style={ATTRIBUTES_ROW_ITEM}>
                        <Icon icon={"day-shift-grey"} width={sizing[5]} height={sizing[5]} />
                        <Text preset={'h5'} text={job.job_shift} />
                    </View>
                </View>
            </TouchableOpacity>
            <View style={FOOTER_CONTAINER}>
                <Button text={'More Details'} preset={'clear'} onPress={goToDetails} />
            </View>
        </UiCard>
    );
}
