import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, TouchableOpacity, Picker
} from 'react-native';

import { database } from "../storage/Database";
import { v4 as uuid } from 'uuid';
import styles from './Style';
import { EventTypes } from '../enums/EventTypes';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import radioButtons from './shared/RadioButtons';
import Header from './shared/Header';
import { formatTextDisplay, formatBooleanDisplay } from './shared/EventFieldDisplay';

export const Icd10Diagnosis = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: 180 }]}
    >
      <Picker.Item value='' label="None" />
      <Picker.Item value='Certain infectious and parasitic diseases' label="Certain infectious and parasitic diseases" />
      <Picker.Item value='Neoplasms' label='Neoplasms' />
      <Picker.Item value='Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism' label='Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism' />
      <Picker.Item value='Endocrine, nutritional and metabolic diseases' label='Endocrine, nutritional and metabolic diseases' />
      <Picker.Item value='Mental, Behavioral and Neurodevelopmental disorders' label='Mental, Behavioral and Neurodevelopmental disorders' />
      <Picker.Item value='Diseases of the nervous system' label='Diseases of the nervous system' />
      <Picker.Item value='Diseases of the eye and adnexa' label='Diseases of the eye and adnexa' />
      <Picker.Item value='Diseases of the ear and mastoid process' label='Diseases of the ear and mastoid process' />
      <Picker.Item value='Diseases of the circulatory system' label='Diseases of the circulatory system' />
      <Picker.Item value='Diseases of the respiratory system' label='Diseases of the respiratory system' />
      <Picker.Item value='Diseases of the digestive system' label='Diseases of the digestive system' />
      <Picker.Item value='Diseases of the skin and subcutaneous tissue' label='Diseases of the skin and subcutaneous tissue' />
      <Picker.Item value='Diseases of the musculoskeletal system and connective tissue' label='Diseases of the musculoskeletal system and connective tissue' />
      <Picker.Item value='Diseases of the genitourinary system' label='Diseases of the genitourinary system' />
      <Picker.Item value='Pregnancy, childbirth and the puerperium' label='Pregnancy, childbirth and the puerperium' />
      <Picker.Item value='Certain conditions originating in the perinatal period' label='Certain conditions originating in the perinatal period' />
      <Picker.Item value='Congenital malformations, deformations and chromosomal abnormalities' label='Congenital malformations, deformations and chromosomal abnormalities' />
      <Picker.Item value='Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified' label='Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified' />
      <Picker.Item value='Injury, poisoning and certain other consequences of external causes' label='Injury, poisoning and certain other consequences of external causes' />
      <Picker.Item value='Codes for special purposes' label='Codes for special purposes' />
      <Picker.Item value='External causes of morbidity' label='External causes of morbidity' />
      <Picker.Item value='Factors influencing health status and contact with health services' label='Factors influencing health status and contact with health services' />
    </Picker>
  )
}


export const ExaminationDisplay = (metadataObj, language) => {
  return (
    <View>
      <Text>{LocalizedStrings[language].provider}: {metadataObj.doctor} </Text>
      <Text>Present Complaint: {metadataObj.examinationComplaint} </Text>
      <Text>Active Conditions: {metadataObj.activeConditions}</Text>
      <Text>Inactive Conditions: {metadataObj.inactiveConditions}</Text>
      <Text>History of Present illness: {metadataObj.illnessHistory}</Text>
    </View>)
}

const Examination = (props) => {
  const [examinationComplaint, setExaminationComplaint] = useState(null);
  const [activeConditions, setActiveConditions] = useState(null);
  const [inactiveConditions, setInactiveConditions] = useState(null);
  const [illnessHistory, setIllnessHistory] = useState(null);
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
        examinationComplaint,
        activeConditions,
        inactiveConditions,
        illnessHistory
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
          <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>{LocalizedStrings[language].examination}</Text>
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>Present Complaint:</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setExaminationComplaint(text)}
            value={examinationComplaint}
          />
        </View>
        <Text style={{ color: '#FFFFFF', paddingTop: 15, paddingRight: 5, paddingLeft: 5 }}>Active Conditions</Text>
        {Icd10Diagnosis(activeConditions, setActiveConditions, language)}
        <Text style={{ color: '#FFFFFF', paddingTop: 15, paddingRight: 5, paddingLeft: 5 }}>Inactive Conditions</Text>
        {Icd10Diagnosis(inactiveConditions, setInactiveConditions, language)}
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>History of Present illness:</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setIllnessHistory(text)}
            value={illnessHistory}
          />
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

export default Examination;
