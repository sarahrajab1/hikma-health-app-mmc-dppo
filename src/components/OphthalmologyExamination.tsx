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
import examinationRadioButtons from './shared/ExaminationRadioButtons';


export const  OphthalmologyExaminationDisplay = (metadataObj, language) => {
  return (
    <View>
	    <Text>Rt Retinal examination:</Text>
	    <Text>Dilated fundoscopy: {!!metadataObj.rtDilatedFundoscopy ? "Normal" : "Abnormal"}</Text>
      <Text>Retinal camera: {!!metadataObj.rtRetinalCamera ? "Normal" : "Abnormal"}</Text>
      <Text>Ophthalmologist assessment: {!!metadataObj.rtOphthalmologist ? "Normal" : "Abnormal"}</Text>
      <Text>Findings: {!!metadataObj.rtFindings ? "Normal" : "Abnormal"}</Text>
      <Text>Left Retinal examination:</Text>
			<Text>Dilated fundoscopy: {!!metadataObj.leftDilatedFundoscopy ? "Normal" : "Abnormal"}</Text>
      <Text>Retinal camera: {!!metadataObj.leftRetinalCamera ? "Normal" : "Abnormal"}</Text>
      <Text>Ophthalmologist assessment: {!!metadataObj.leftOphthalmologist ? "Normal" : "Abnormal"}</Text>
      <Text>Findings: {!!metadataObj.leftFindings ? "Normal" : "Abnormal"}</Text>
    </View>)
}

const OphthalmologyExamination = (props) => {
  const [rtDilatedFundoscopy, setRtDilatedFundoscopy] = useState(null);
  const [rtRetinalCamera, setRtRetinalCamera] = useState(null);
  const [rtOphthalmologist, setRtOphthalmologist] = useState(null);
  const [rtFindings, setRtFindings] = useState(null);
  const [leftDilatedFundoscopy, setLeftDilatedFundoscopy] = useState(null);
  const [leftRetinalCamera, setLeftRetinalCamera] = useState(null);
  const [leftOphthalmologist, setLeftOphthalmologist] = useState(null);
  const [leftFindings, setLeftFindings] = useState(null);
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));

  const patientId = props.navigation.getParam('patientId');
  const visitId = props.navigation.getParam('visitId');
  const userName = props.navigation.getParam('userName');

  const submit = async () => {
    database.addEvent({
      id: uuid(),
      patient_id: patientId,
      visit_id: visitId,
      event_type: EventTypes.OphthalmologyExamination,
      event_metadata: JSON.stringify({
        doctor: userName,
        rtDilatedFundoscopy,
        rtOphthalmologist,
        rtRetinalCamera,
        rtFindings,
        leftDilatedFundoscopy,
        leftOphthalmologist,
        leftRetinalCamera,
        leftFindings,
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
          <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>OphthalmologyExamination: </Text>
        </View>
				<View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>Rt Retinal examination:</Text>
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: rtDilatedFundoscopy, action: setRtDilatedFundoscopy, prompt: 'Dilated fundoscopy:', language })}
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: rtRetinalCamera, action: setRtRetinalCamera, prompt: 'Retinal camera :', language })}
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: rtOphthalmologist, action: setRtOphthalmologist, prompt: 'Ophthalmologist assessment:', language })}
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: rtFindings, action: setRtFindings, prompt: 'Findings:', language })}
        </View>
				<View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>Left Retinal examination:</Text>
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: leftDilatedFundoscopy, action: setLeftDilatedFundoscopy, prompt: 'Dilated fundoscopy:', language })}
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: leftRetinalCamera, action: setLeftRetinalCamera, prompt: 'Retinal camera :', language })}
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: leftOphthalmologist, action: setLeftOphthalmologist, prompt: 'Ophthalmologist assessment:', language })}
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: leftFindings, action: setLeftFindings, prompt: 'Findings:', language })}
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

export default OphthalmologyExamination;
