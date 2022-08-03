import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, Picker, TouchableOpacity
} from 'react-native';

import { database } from "../storage/Database";
import { v4 as uuid } from 'uuid';
import styles from './Style';
import { EventTypes } from '../enums/EventTypes';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import Header from './shared/Header';
import radioButtons from './shared/RadioButtons';

export const MedicineDisplay = (metadataObj, language) => {
  return (<View>
    <Text>On Stain: {!!metadataObj.onStain ? "YES" : "NO"}</Text>
    <Text>Name of statin and dose: {metadataObj.stainNameDose} </Text>
    <Text>Current diabetes medications and doses: {metadataObj.diabetes}</Text>
    <Text>Current HTN medications and doses: {metadataObj.htn}</Text>
    <Text>Current non-diabetes medications: {metadataObj.nonDiabetes} </Text>
  </View>)
}

const Medicine = (props) => {
  const [onStain, setOnStain] = useState(null);
  const [stainNameDose, setStainNameDose] = useState(null);
  const [diabetes, setDiabetes] = useState(null);
  const [nonDiabetes, setNonDiabetes] = useState(null);
  const [htn, setHtn] = useState(null);
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));

  const patientId = props.navigation.getParam('patientId');
  const visitId = props.navigation.getParam('visitId');
  const userName = props.navigation.getParam('userName');

  const submit = async () => {
    database.addEvent({
      id: uuid(),
      patient_id: patientId,
      visit_id: visitId,
      event_type: EventTypes.Medicine,
      event_metadata: JSON.stringify({
        doctor: userName,
        onStain,
        stainNameDose,
        diabetes,
        htn,
        nonDiabetes
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
          <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>Medication/Pharmacy:</Text>
        </View>
        <View style={styles.responseRow}>
						{radioButtons({ field: onStain, action: setOnStain, prompt: 'On Stain', language })}
					</View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>Stain Name and Dose:</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setStainNameDose(text)}
            value={stainNameDose}
          />
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>Current diabetes medications and doses:</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setDiabetes(text)}
            value={diabetes}
          />
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>Current HTN medications and doses:</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setHtn(text)}
            value={htn}
          />
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>Current non-diabetes medications:</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setNonDiabetes(text)}
            value={nonDiabetes}
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

export default Medicine;
