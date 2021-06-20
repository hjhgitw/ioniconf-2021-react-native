import React, { useEffect, useState } from "react"
import {
  Button,
  Header,
  Screen,
  ScreenSection,
} from "../../components"
import { useNavigation } from "@react-navigation/native"
import { color } from "../../theme"
import {JobsListItem} from "../../components/JobsListItem";

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
        {Array.from({length: 12}, i => i).map((n) => <JobsListItem key={n} />)}
        <Button text="Details" onPress={() => navigation.navigate("job.details")} />
      </ScreenSection>
    </Screen>
  )
}
