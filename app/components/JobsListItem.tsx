import * as React from "react"
import {Image, ImageStyle, StyleProp, TextStyle, View, ViewStyle} from "react-native"
import {color, spacing, sizing} from "../theme"
import {Button, Icon, Text, UiCard} from "./ui-kits";

export interface JobsListItemProps {
    /**
     * An optional style override useful for padding & margin.
     */
    style?: StyleProp<ViewStyle>,
    key?: string | number,
}

const tempImg = { uri: 'https://storage.googleapis.com/nursa-prod.appspot.com/FacilitiesPhotos/465089.jpg?GoogleAccessId=firebase-adminsdk-3p1w1%40nursa-prod.iam.gserviceaccount.com&Expires=4105033200&Signature=Kyn8LXRYB0lGPZQy3e4CSrfzeOLhQ6DfOzKe2WT7intZRVbRTONq%2B84f6tqbBhdPJNMmX8IsIPyKi41dtfvNL0Yzj%2BM06Q%2FJ7VVuk4RCP95Oqt7GP3Zz62cJd2ZyW%2FO91JfmrEW4Wna3PRgGWfKr5zfEFd3jY0C0ekkjVj7Bz9aTzJsL7ZJTfd51UDqt1WTCC3cVFv6gMKHrSYRGvKRHcLcr6Ys5aqIlCTKCYXn8NoQeukhYqEr4bg43XTZUEgUW3MB9DKrFQUcLV%2FnxpCwtQIInbVxzxopmrKrrMUB1Pd8UZSiwDk5CKEdy7Q8%2BVAkZn6sa2%2BkSk8bUoGA6Tizk8w%3D%3D'};

const BOX_PADDING: ViewStyle = {padding: spacing[4]}

const CONTAINER: ViewStyle = {padding: 0}
const CARD_HEADER: ViewStyle = { height: 100, borderBottomWidth: 1, borderColor: color.line}
const CARD_HEADER_IMG: ImageStyle = { backgroundColor: color.primaryAlpha50, height: '100%', borderTopLeftRadius: 8,borderTopRightRadius: 8, zIndex: 1 }
const CARD_HEADER_CONTENT: ViewStyle = { backgroundColor: color.primaryAlpha50, height: '100%', width: '100%', borderTopLeftRadius: 8,borderTopRightRadius: 8, zIndex: 2, position: 'absolute' }
const CARD_HEADER_OVERLAY: ViewStyle = {...BOX_PADDING, backgroundColor: color.primaryAlpha50, height: '100%', width: '100%', borderTopLeftRadius: 8,borderTopRightRadius: 8, zIndex: 2, position: 'absolute' }
const CARD_HEADER_CONTENT__AMOUNT: TextStyle = { fontWeight: "bold", fontFamily: 'Roboto-Bold', marginTop: spacing[1], letterSpacing: 0.66}

const ATTRIBUTES_ROW: ViewStyle = { display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}
const ATTRIBUTES_ROW_ITEM: ViewStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center'}

const FOOTER_CONTAINER: ViewStyle = { borderTopWidth: 1, borderColor: color.line }

/**
 * Describe your component here
 */
export function JobsListItem(props: JobsListItemProps) {
    const { style } = props

    return (
        <UiCard style={[CONTAINER, style]}>
            <View style={CARD_HEADER}>
                <Image source={tempImg} style={CARD_HEADER_IMG} />
                <View style={CARD_HEADER_CONTENT} />
                <View style={CARD_HEADER_OVERLAY}>
                    <Text preset={['h4', 'tertiaryDark']} text={'Estimated total amount'} />
                    <Text preset={['h3', 'tertiary']} style={CARD_HEADER_CONTENT__AMOUNT} text={'$227.20'} />
                </View>
            </View>
            <View style={BOX_PADDING}>
                <Text preset={['h4', 'dark']} text={'Tooele Care Center'} mb={spacing[3]} />
                <Text preset={'h5'} text={'Something Str 16, Tooele, UT, 84074'} mb={spacing[4]} />
                <View style={ATTRIBUTES_ROW}>
                    {Array.from({length: 3}, (v, i) => i).map(n => (
                        <View key={`${n}_`} style={ATTRIBUTES_ROW_ITEM}>
                            <Icon icon={"per-diem-grey"} width={sizing[5]} height={sizing[5]} />
                            <Text preset={'h5'} text={'Per Diem'} />
                        </View>
                    ))}
                </View>
            </View>
            <View style={FOOTER_CONTAINER}>
                <Button text={'More Details'} preset={'clear'} />
            </View>
        </UiCard>
    );
}
