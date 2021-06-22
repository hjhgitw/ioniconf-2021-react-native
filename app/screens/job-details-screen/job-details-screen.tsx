import React, { useEffect, useState } from "react"
import {
  Button,
  Header, JobsDetailItem,
  Screen,
  ScreenSection, Text, UiBadge, UiCard,
} from "../../components"
import { useNavigation, useRoute } from "@react-navigation/native"
import {color, sizing, spacing} from "../../theme"
import {ActivityIndicator, TextStyle, View, ViewStyle} from "react-native";
import {
  Divider
  // ListItem, Button as REButton, Icon
} from 'react-native-elements'
import { LinearProgress } from 'react-native-elements';
import {apiService} from "../../services/api";
import {Calendar} from 'react-native-calendars';

const TEXT_CENTER: TextStyle = {textAlign: "center"}
const JOB_META_LABEL: TextStyle = {marginBottom: spacing[1]}
const JOB_QUALIFICATION_ROW: ViewStyle = {marginBottom: spacing[4]}
const JOB_QUALIFICATION_ROW_MB: TextStyle = {marginBottom: spacing[2]}

export const JobDetailsScreen = ( ) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [ state, setState ] = useState({
    error: null,
    fetching: false,
    data: null,
  });
  const job = state.data;

  useEffect(() => {
    setState({...state, fetching: true, error: null });

    (async () => {
      try {
        const {data} = await apiService.job.getById(route.params['slug']);
        setState({...state,  fetching: false, data})
      } catch (e) {
        console.error(e);
        setState({...state, fetching: false, error: e})
      }
    })();
  }, [])

  const header = <Header
      headerText={"Job Details"}
      leftIcon={"back"}
      onLeftPress={() => navigation.goBack()}
  />
  return (
    <Screen preset="scroll" header={header} backgroundColor={color.palette.offWhite}>
      {(state.fetching || !state.data) ? (<ActivityIndicator />) : (
        <ScreenSection preset="main">
          <UiCard style={{minHeight: 0, display: 'flex', flexDirection: "row", justifyContent: "space-between", paddingVertical: spacing[3]}}>
            <View>
              <Text style={[TEXT_CENTER, JOB_META_LABEL]} preset={['h5', 'primary']} text={'Shift Date'} />
              <Text style={TEXT_CENTER} preset={['h4', 'dark']} text={'Jun 21, 2021'} />
            </View>
            <Divider orientation={"vertical"} />
            <View>
              <Text style={[TEXT_CENTER, JOB_META_LABEL]} preset={['h5', 'primary']} text={'Shift Time'} />
              <Text style={TEXT_CENTER} preset={['h4', 'dark']} text={'06:00 - 18:30'} />
            </View>
            <Divider orientation={"vertical"} />
            <View>
              <Text style={[TEXT_CENTER, JOB_META_LABEL]} preset={['h5', 'primary']} text={'License Type'} />
              <UiBadge preset={"primary"} text={'CNA'} center={true} />
            </View>
          </UiCard>

          <JobsDetailItem job={job} />

          <UiCard>
            <Text preset={['h4', 'dark']} text={'Job Status'} style={{ marginBottom: spacing[3]}} />
            <UiBadge preset={'success'} text={'Open'} />
          </UiCard>

          <UiCard>
            <View style={JOB_QUALIFICATION_ROW}>
              <Text style={JOB_QUALIFICATION_ROW_MB} preset={['h5', 'primary']} text={'Speciality'} />
              <UiBadge preset={'primary'} text={'Skilled Nursing'} />
            </View>
            <View style={JOB_QUALIFICATION_ROW}>
              <Text preset={['h5', 'primary']} text={'Type of Job'} />
              <Text preset={['h4', 'dark']} text={'Per Diem'} />
            </View>
            <View style={JOB_QUALIFICATION_ROW}>
              <Text preset={['h5', 'primary']} text={'License Type'} />
              <Text preset={['h4', 'dark']} text={'CNA | CNA'} />
            </View>
            <View style={JOB_QUALIFICATION_ROW}>
              <Text preset={['h5', 'primary']} text={'Number of beds'} />
              <Text preset={['h4', 'dark']} text={'225'} />
            </View>
            <View style={JOB_QUALIFICATION_ROW}>
              <Text preset={['h5', 'primary']} text={'Job Instructions'} />
              <Text preset={['h4', 'dark']} text={job.job_description} />
            </View>
          </UiCard>

          <UiCard>
            <Text preset={['h4', 'dark']} text={'Shifts in this job'} style={TEXT_CENTER} />
            <Calendar

            />
          </UiCard>

          <UiCard style={{height: 20}}>
            <LinearProgress value={0.17} color="primary" variant={'determinate'} />
          </UiCard>
        </ScreenSection>
      )}
    </Screen>
  )
}
