import React, {useEffect, useState} from "react"
import {
  Button,
  Header,
  Screen,
  ScreenSection,
} from "../../components"
import { useNavigation } from "@react-navigation/native"
import {color, spacing} from "../../theme"
import {JobsListItem} from "../../components/JobsListItem";
import {useScreenInfo} from "../../hooks/useScreenInfo";
import {View} from "react-native";
import {apiService} from "../../services/api";

// column width (relative to screen size)
const sizes = {sm: 100, md: 100, lg: 50, xl: 33.33}

export const HomeScreen = () => {
  const {mediaSizeWidth} = useScreenInfo();
  const [ state, setState ] = useState({
    error: null,
    fetching: false,
    data: [],
  });

  const header = <Header headerText={"Jobs"} />

  useEffect(() => {
    setState({...state, fetching: true, error: null });

    (async () => {
      try {
        const {data} = await apiService.job.search();
        setState({...state,  fetching: false, data: [...state.data, ...data]})
      } catch (e) {
        console.error(e);
        setState({...state, fetching: false, error: e})
      }
    })();
  }, [])

  return (
    <Screen preset="scroll" header={header} backgroundColor={color.palette.offWhite}>
      <ScreenSection preset="main">
        <div style={{ display: 'flex', flexWrap: 'wrap', flex: 1, flexDirection: 'row'}}>
              {state.data.map(job => (
                  <View key={job.job_id} style={{ width: `${sizes[mediaSizeWidth]}%`, paddingLeft: spacing[2], paddingRight: spacing[2] }}>
                    <JobsListItem job={job}/>
                  </View>
              ))}
        </div>
      </ScreenSection>
    </Screen>
  )
}
