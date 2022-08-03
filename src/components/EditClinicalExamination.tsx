import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, TouchableOpacity
} from 'react-native';

import { database } from "../storage/Database";
import styles from './Style';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import radioButtons from './shared/RadioButtons';
import Header from './shared/Header';
import examinationRadioButtons from './shared/ExaminationRadioButtons';

const EditClinicalExamination = (props) => {
  const event = props.navigation.getParam('event');
  const userName = props.navigation.getParam('userName');
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));
  
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

  useEffect(() => {
    if (!!event.event_metadata) {
      const metadataObj = JSON.parse(event.event_metadata)
      setRespiratorySystem(metadataObj.respiratorySystem)
      setRespiratorySystemNote(metadataObj.respiratorySystemNote)
      setCvs(metadataObj.cvs)
      setCvsNote(metadataObj.cvsNote)
      setAbdomen(metadataObj.abdomen)
      setAbdomenNote(metadataObj.abdomenNote)
      setMusculoskeletal(metadataObj.musculoskeletal)
      setMusculoskeletalNote(metadataObj.musculoskeletalNote)
      setCns(metadataObj.cns)
      setCnsNote(metadataObj.cnsNote)
    }
  }, [props])

  const submitClinicalExamination = async () => {
    database.editEvent(
      event.id,
      JSON.stringify({
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
    ).then((response) => props.navigation.navigate('EventList', { events: response, language }))
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.containerLeft}>
        {Header({action: () => props.navigation.navigate('EventList', { language}), language, setLanguage})}

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'stretch', }}>
          <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>Clincal Examination</Text>
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: respiratorySystem, action: setRespiratorySystem, prompt: 'Respiratory System:', language })}
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
            placeholder="Note"
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
            placeholder="Note"
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
            placeholder="Note"
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
            placeholder="Note"
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
            placeholder="Note"
            onChangeText={(text) => setCnsNote(text)}
            value={cnsNote}
          />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Button
            title={LocalizedStrings[language].save}
            color={'#F77824'}
            onPress={() => submitClinicalExamination()} />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditClinicalExamination;
