import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, TouchableOpacity
} from 'react-native';

import { database } from "../storage/Database";
import { v4 as uuid } from 'uuid';
import styles from './Style';
import { EventTypes } from '../enums/EventTypes';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import Header from './shared/Header';
import { formatTextDisplay, formatBooleanDisplay } from './shared/EventFieldDisplay';
import examinationRadioButtons from './shared/ExaminationRadioButtons';

export const Vibration  = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: 180 }]}
    >
      <Picker.Item value='' label="Vibration Sense" />
      <Picker.Item value='intact' label='intact' />
      <Picker.Item value='impaired' label='impaired' />
      <Picker.Item value='absent' label='absent' />
    </Picker>
  )
}


export const Monofilament  = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: 180 }]}
    >
      <Picker.Item value='' label="10g Monofilament " />
      <Picker.Item value='intact' label='intact' />
      <Picker.Item value='impaired' label='impaired' />
      <Picker.Item value='absent' label='absent' />
    </Picker>
  )
}

export const DistalPulse  = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: 180 }]}
    >
      <Picker.Item value='' label="Distal foot pulse" />
      <Picker.Item value='intact' label='intact' />
      <Picker.Item value='impaired' label='impaired' />
      <Picker.Item value='absent' label='absent' />
    </Picker>
  )
}

export const DorsalisPulse  = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: 180 }]}
    >
      <Picker.Item value='' label="Dorsalis pedis  pulse" />
      <Picker.Item value='intact' label='intact' />
      <Picker.Item value='impaired' label='impaired' />
      <Picker.Item value='absent' label='absent' />
    </Picker>
  )
}

export const PosteriorPulse  = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: 180 }]}
    >
      <Picker.Item value='' label="Posterior tibial pulse" />
      <Picker.Item value='intact' label='intact' />
      <Picker.Item value='impaired' label='impaired' />
      <Picker.Item value='absent' label='absent' />
    </Picker>
  )
}

export const FootCareExaminationDisplay = (metadataObj, language) => {
  return (
    <View>
			<Text>Rt Foot examination:</Text>
      <Text>Vibration sense: {metadataObj.rtVibration} </Text>
      <Text>10g Monofilament: {metadataObj.rtMonofilament} </Text>
      <Text>Distal foot pulse: {metadataObj.rtDistalPulse}</Text>
      <Text>Dorsalis pedis  pulse: {metadataObj.rtDorsalisPulse}</Text>
			<Text>Posterior tibial pulse: {metadataObj.rtPosteriorPulse}</Text>
      <Text>Left Foot examination:</Text>
      <Text>Vibration sense: {metadataObj.leftVibration} </Text>
      <Text>10g Monofilament: {metadataObj.leftMonofilament} </Text>
      <Text>Distal foot pulse: {metadataObj.leftDistalPulse}</Text>
      <Text>Dorsalis pedis  pulse: {metadataObj.leftDorsalisPulse}</Text>
			<Text>Posterior tibial pulse: {metadataObj.leftPosteriorPulse}</Text>
    </View>)
}

const FootCareExamination = (props) => {
  const [rtVibration, setRtVibration] = useState(null);
  const [rtMonofilament, setRtMonofilament] = useState(null);
  const [rtDistalPulse, setRtDistalPulse] = useState(null);
  const [rtDorsalisPulse, setRtDorsalisPulse] = useState(null);
  const [rtPosteriorPulse, setRtPosteriorPulse] = useState(null);
  const [leftVibration, setLeftVibration] = useState(null);
  const [leftMonofilament, setLeftMonofilament] = useState(null);
  const [leftDistalPulse, setLeftDistalPulse] = useState(null);
  const [leftDorsalisPulse, setLeftDorsalisPulse] = useState(null);
  const [leftPosteriorPulse, setLeftPosteriorPulse] = useState(null);
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));

  const patientId = props.navigation.getParam('patientId');
  const visitId = props.navigation.getParam('visitId');
  const userName = props.navigation.getParam('userName');

  const submit = async () => {
    database.addEvent({
      id: uuid(),
      patient_id: patientId,
      visit_id: visitId,
      event_type: EventTypes.ExaminationFull,
      event_metadata: JSON.stringify({
        doctor: userName,
        rtVibration,
        rtMonofilament,
        rtDistalPulse,
        rtDorsalisPulse,
        rtPosteriorPulse,
        leftVibration,
        leftMonofilament,
        leftDistalPulse,
        leftDorsalisPulse,
        leftPosteriorPulse,
      })
    }).then(() => {
      props.navigation.navigate('NewVisit')
    })
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.containerLeft}>
        {Header({ action: () => props.navigation.navigate('NewVisit', { language }), language, setLanguage })}
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'stretch', }}>
          <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>Foot Care Unit Examination (Sensation): </Text>
        </View>
				<View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>Rt Foot examination:</Text>
        </View>
				{Vibration(rtVibration, setRtVibration, language)}
				{Monofilament(rtMonofilament, setRtMonofilament, language)}
				{DistalPulse(rtDistalPulse, setRtDistalPulse, language)}
				{DorsalisPulse(rtDorsalisPulse, setRtDorsalisPulse, language)}
				{PosteriorPulse(rtPosteriorPulse, setRtPosteriorPulse, language)}
				<View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>Left Foot examination:</Text>
        </View>
				{Vibration(leftVibration, setLeftVibration, language)}
				{Monofilament(leftMonofilament, setLeftMonofilament, language)}
				{DistalPulse(leftDistalPulse, setLeftDistalPulse, language)}
				{DorsalisPulse(leftDorsalisPulse, setLeftDorsalisPulse, language)}
				{PosteriorPulse(leftPosteriorPulse, setLeftPosteriorPulse, language)}
        <View style={{ alignItems: 'center' }}>
          <Button
            title={LocalizedStrings[language].save}
            color={'#F77824'}
            onPress={() => submit()} />
        </View>
      </View>
    </ScrollView>
  );
};

export default FootCareExamination;
