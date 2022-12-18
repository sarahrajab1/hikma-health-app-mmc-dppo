import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, TouchableOpacity
} from 'react-native';

import { database } from "../storage/Database";
import styles from './Style';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import Header from './shared/Header';
import examinationRadioButtons from './shared/ExaminationRadioButtons';

const EditOphthalmologyExamination = (props) => {
  const event = props.navigation.getParam('event');
  const userName = props.navigation.getParam('userName');
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));
  
  const [rtDilatedFundoscopy, setRtDilatedFundoscopy] = useState(null);
  const [rtRetinalCamera, setRtRetinalCamera] = useState(null);
  const [rtOphthalmologist, setRtOphthalmologist] = useState(null);
  const [rtFindings, setRtFindings] = useState(null);
  const [leftDilatedFundoscopy, setLeftDilatedFundoscopy] = useState(null);
  const [leftRetinalCamera, setLeftRetinalCamera] = useState(null);
  const [leftOphthalmologist, setLeftOphthalmologist] = useState(null);
  const [leftFindings, setLeftFindings] = useState(null);

  useEffect(() => {
    if (!!event.event_metadata) {
      const metadataObj = JSON.parse(event.event_metadata)
      setRtDilatedFundoscopy(metadataObj.rtDilatedFundoscopy)
      setRtRetinalCamera(metadataObj.rtRetinalCamera)
      setRtOphthalmologist(metadataObj.rtOphthalmologist)
      setRtFindings(metadataObj.rtFindings)
      setLeftDilatedFundoscopy(metadataObj.leftDilatedFundoscopy)
      setLeftRetinalCamera(metadataObj.leftRetinalCamera)
      setLeftOphthalmologist(metadataObj.leftOphthalmologist)
      setLeftFindings(metadataObj.leftFindings)
    }
  }, [props])

  const submitOphthalmologyExamination = async () => {
    database.editEvent(
      event.id,
      JSON.stringify({
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
    ).then((response) => props.navigation.navigate('EventList', { events: response, language }))
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
    <View style={styles.containerLeft}>
      {Header({ action: () => props.navigation.navigate('EventList', { language }), language, setLanguage })}
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'stretch', }}>
        <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>OphthalmologyExamination: </Text>
      </View>
      <View style={[styles.responseRow, { paddingVertical: 0 }]}>
        <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>Rt Retinal examination:</Text>
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
        <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>Left Retinal examination:</Text>
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
          onPress={() => submitOphthalmologyExamination()} />
      </View>
    </View>
  </ScrollView>
  );
};

export default EditOphthalmologyExamination;
