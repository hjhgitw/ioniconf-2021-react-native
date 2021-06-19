import React, { useEffect, useState } from "react"
// import { Alert } from "react-native"
import {
  Button,
  Header,
  Screen,
  ScreenSection,
} from "../../components"
import { useNavigation } from "@react-navigation/native"
import { color } from "../../theme"
import {View} from "react-native";
// import { Spinner } from "native-base"

export const JobDetailsScreen = () => {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()

  const header = <Header headerText={"Job Details"} />
  return (
    <Screen preset="scroll" header={header} backgroundColor={color.palette.offWhite}>
      <ScreenSection preset="main">
        <View style={{height: 20}} />
        <Button text="Home" onPress={() => navigation.navigate("home")} />
      </ScreenSection>
    </Screen>
  )
}
