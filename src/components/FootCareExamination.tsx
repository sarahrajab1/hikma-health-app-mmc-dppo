import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, TouchableOpacity, Picker
} from 'react-native';

import { database } from "../storage/Database";
import { v4 as uuid } from 'uuid';
import styles from './Style';
import { EventTypes } from '../enums/EventTypes';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import Header from './shared/Header';

export const StatusPicker  = (value, action, language) => {
  return (
    <View style={styles.pickerView}>
      <Picker
        selectedValue={value}
        onValueChange={value => action(value)}
        style={[styles.inputPicker, { width: 180 }]}
      >
        <Picker.Item value='' label='' />
        <Picker.Item value='absent' label='absent' />
        <Picker.Item value='intact' label='intact' />
        <Picker.Item value='impaired' label='impaired' />
      </Picker>
    </View>
  )
}

export const FootCareExaminationDisplay = (metadataObj, language) => {
  return (
    <View>
			<Text style={[{ fontSize: 16, fontWeight: 'bold' }]} >Rt Foot examination:</Text>
      <Text>Vibration sense: {metadataObj.rtVibration} </Text>
      <Text>10g Monofilament: {metadataObj.rtMonofilament} </Text>
      <Text>Distal foot pulse: {metadataObj.rtDistalPulse}</Text>
      <Text>Dorsalis pedis  pulse: {metadataObj.rtDorsalisPulse}</Text>
			<Text>Posterior tibial pulse: {metadataObj.rtPosteriorPulse}</Text>
      <Text style={[{ fontSize: 16, fontWeight: 'bold' }]}>Left Foot examination:</Text>
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
      event_type: EventTypes.FootCareExamination,
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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.containerLeft}>
        {Header({ action: () => props.navigation.navigate('NewVisit', { language }), language, setLanguage })}

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'stretch', }}>
          <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>Foot Care Unit Examination (Sensation): </Text>
        </View>
				<View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}>Rt Foot examination:</Text>
        </View>
        <View style={[styles.responseRow, { flexDirection: 'row', flex: 1, justifyContent: 'space-between' }]}>
          <Text style={{ color: '#FFFFFF' }}>Vibration Sense </Text>
				  {StatusPicker(rtVibration, setRtVibration, language)}
        </View>
        <View style={[styles.responseRow, { flexDirection: 'row', flex: 1, justifyContent: 'space-between' }]}>
          <Text style={{ color: '#FFFFFF' }}>10g Monofilament </Text>
				  {StatusPicker(rtMonofilament, setRtMonofilament, language)}
        </View>
        <View style={[styles.responseRow, { flexDirection: 'row', flex: 1, justifyContent: 'space-between' }]}>
          <Text style={{ color: '#FFFFFF' }}>Distal foot pulse </Text>
				  {StatusPicker(rtDistalPulse, setRtDistalPulse, language)}
        </View>
        <View style={[styles.responseRow, { flexDirection: 'row', flex: 1, justifyContent: 'space-between' }]}>
          <Text style={{ color: '#FFFFFF' }}>Dorsalis pedis  pulse</Text>
				  {StatusPicker(rtDorsalisPulse, setRtDorsalisPulse, language)}
        </View>
        <View style={[styles.responseRow, { flexDirection: 'row', flex: 1, justifyContent: 'space-between' }]}>
          <Text style={{ color: '#FFFFFF' }}>Posterior tibial pulse</Text>
				  {StatusPicker(rtPosteriorPulse, setRtPosteriorPulse, language)}
				</View>
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}>Left Foot examination:</Text>
        </View>
        <View style={[styles.responseRow, { flexDirection: 'row', flex: 1, justifyContent: 'space-between' }]}>
          <Text style={{ color: '#FFFFFF' }}>Vibration Sense </Text>
				  {StatusPicker(leftVibration, setLeftVibration, language)}
        </View>
        <View style={[styles.responseRow, { flexDirection: 'row', flex: 1, justifyContent: 'space-between' }]}>
          <Text style={{ color: '#FFFFFF' }}>10g Monofilament </Text>
				  {StatusPicker(leftMonofilament, setLeftMonofilament, language)}
        </View>
        <View style={[styles.responseRow, { flexDirection: 'row', flex: 1, justifyContent: 'space-between' }]}>
          <Text style={{ color: '#FFFFFF' }}>Distal foot pulse </Text>
				  {StatusPicker(leftDistalPulse, setLeftDistalPulse, language)}
        </View>
        <View style={[styles.responseRow, { flexDirection: 'row', flex: 1, justifyContent: 'space-between' }]}>
          <Text style={{ color: '#FFFFFF' }}>Dorsalis pedis  pulse</Text>
				  {StatusPicker(leftDorsalisPulse, setLeftDorsalisPulse, language)}
        </View>
        <View style={[styles.responseRow, { flexDirection: 'row', flex: 1, justifyContent: 'space-between' }]}>
          <Text style={{ color: '#FFFFFF' }}>Posterior tibial pulse</Text>
				  {StatusPicker(leftPosteriorPulse, setLeftPosteriorPulse, language)}
        </View>
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
