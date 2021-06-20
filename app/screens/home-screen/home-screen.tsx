import React, { useEffect, useState } from "react"
import {
  Button,
  Header,
  Screen,
  ScreenSection,
  Grid,
} from "../../components"
import { useNavigation } from "@react-navigation/native"
import {color, spacing} from "../../theme"
import {JobsListItem} from "../../components/JobsListItem";
import {useMediaQuery} from "../../hooks/useMediaQuery";
import { Row, Column as Col, ScreenInfo} from 'react-native-responsive-grid';
import {View} from "react-native";

// column width (relative to screen size)
const sizes = {sm: 100, md: 100, lg: 50, xl: 33.33}

export const HomeScreen = () => {
  const navigation = useNavigation()
  const {widthLabel} = useMediaQuery();

  const header = <Header headerText={"Jobs"} />
  console.log('ScreenInfo()', ScreenInfo())
  return (
    <Screen preset="scroll" header={header} backgroundColor={color.palette.offWhite}>
      <ScreenSection preset="main">
        <div style={{ display: 'flex', flexWrap: 'wrap', flex: 1, flexDirection: 'row'}}>
              {Array.from({length: 12}, (n, i) => i).map((n) => (
                  <View key={n} style={{ width: `${sizes[ScreenInfo().mediaSizeWidth]}%`, paddingLeft: spacing[2], paddingRight: spacing[2] }}>
                    <JobsListItem/>
                  </View>
              ))}
        </div>
        <Button text="Details" onPress={() => navigation.navigate("job.details")} />
      </ScreenSection>
    </Screen>
  )
}
