import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, TouchableOpacity
} from 'react-native';

import { database } from "../storage/Database";
import { v4 as uuid } from 'uuid';
import styles from './Style';
import { EventTypes } from '../enums/EventTypes';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import examinationRadioButtons from './shared/ExaminationRadioButtons';
import Header from './shared/Header';
import { formatTextDisplay, formatBooleanDisplay } from './shared/EventFieldDisplay';

export const ClinicalExaminationDisplay = (metadataObj, language) => {
  return (
    <View>
      <Text>{LocalizedStrings[language].provider}: {metadataObj.doctor} </Text>
      <Text>Respiratory System: {metadataObj.respiratorySystem} </Text>
      <Text>Note: {metadataObj.respiratorySystemNote}</Text>
      <Text>CVS: {metadataObj.cvs}</Text>
      <Text>Note: {metadataObj.csvNote}</Text>
      <Text>Abdomen: {metadataObj.abdomen}</Text>
      <Text>Note: {metadataObj.abdomenNote}</Text>
      <Text>Musculoskeletal: {metadataObj.musculoskeletal}</Text>
      <Text>Note: {metadataObj.musculoskeletalNote}</Text>
      <Text>CNS: {metadataObj.cns}</Text>
      <Text>Note: {metadataObj.cnsNote}</Text>
    </View>)
}

const ClinicalExamination = (props) => {
  const [respiratorySystem, setRespiratorySystem] = useState(null);
  const [respiratorySystemNote, setRespiratorySystemNote] = useState(null);
  const [cvs, setCvs] = useState(null);
  const [cvsNote, setCvsNote] = useState(null);
  const [abdomen, setAbdomen] = useState(null);
  const [abdomenNote, setAbdomenNote] = useState(null);
  const [musculoskeletal, setMusculoskeletal] = useState(null);
  const [musculoskeletalNote, setMusculoskeletalNote] = useState(null);
  const [cns, setCns] = useState(null);
  const [cnsNote, setCnsNote] = useState(null);
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
        respiratorySystem,
        respiratorySystemNote,
        cvs,
        cvsNote,
        abdomen,
        abdomenNote,
        musculoskeletal,
        musculoskeletalNote,
        cns,
        cnsNote
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
          <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>Clinical Examination</Text>
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: respiratorySystem, action: setRespiratorySystem, prompt: 'Respiratory System:', language })}
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setRespiratorySystemNote(text)}
            value={respiratorySystemNote}
          />
        </View>
        <View style={[styles.responseRow]}>
          {examinationRadioButtons({ field: cvs, action: setCvs, prompt: 'CVS:', language })}
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setCvsNote(text)}
            value={cvsNote}
          />
        </View>
        <View style={[styles.responseRow]}>
          {examinationRadioButtons({ field: abdomen, action: setAbdomen, prompt: 'Abdomen:', language })}
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setAbdomenNote(text)}
            value={abdomenNote}
          />
        </View>
        <View style={[styles.responseRow]}>
          {examinationRadioButtons({ field: musculoskeletal, action: setMusculoskeletal, prompt: 'Musculoskeletal:', language })}
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setMusculoskeletalNote(text)}
            value={musculoskeletalNote}
          />
        </View>
        <View style={[styles.responseRow]}>
          {examinationRadioButtons({ field: cns, action: setCns, prompt: 'CNS:', language })}
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setCnsNote(text)}
            value={cnsNote}
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

export default ClinicalExamination;
