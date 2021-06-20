import React, { useEffect, useState } from "react"
import {
  Button,
  Header,
  Screen,
  ScreenSection, UiCard,
} from "../../components"
import { useNavigation } from "@react-navigation/native"
import { color } from "../../theme"
import {View} from "react-native";

export const HomeScreen = () => {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()

  const header = <Header headerText={"Jobs"} />
  return (
    <Screen preset="scroll" header={header} backgroundColor={color.palette.offWhite}>
      <ScreenSection preset="main">
        <UiCard />
        <UiCard />
        <UiCard />
        <UiCard />
        <Button text="Details" onPress={() => navigation.navigate("job.details")} />
      </ScreenSection>
    </Screen>
  )
}
