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
    <Text>On Statin: { metadataObj.onStatin === null ? '' : !!metadataObj.onStatin ? "YES" : "NO"}</Text>
    <Text>Name of statin and dose: {metadataObj.statinNameDose} </Text>
    <Text>Current diabetes medications and doses: {metadataObj.diabetes}</Text>
    <Text>Current HTN medications and doses: {metadataObj.htn}</Text>
    <Text>Current non-diabetes medications: {metadataObj.nonDiabetes} </Text>
    <Text>Other medicines: {metadataObj.otherMedicines} </Text>
  </View>)
}

const Medicine = (props) => {
  const [onStatin, setOnStatin] = useState(null);
  const [statinNameDose, setStatinNameDose] = useState(null);
  const [diabetes, setDiabetes] = useState(null);
  const [nonDiabetes, setNonDiabetes] = useState(null);
  const [htn, setHtn] = useState(null);
  const [otherMedicines, setOtherMedicines] = useState(null);
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
        onStatin,
        statinNameDose,
        diabetes,
        htn,
        nonDiabetes,
        otherMedicines
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
						{radioButtons({ field: onStatin, action: setOnStatin, prompt: 'On Statin', language })}
					</View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>Statin Name and Dose:</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={[styles.inputs, styles.smallTextbox]}
            onChangeText={(text) => setStatinNameDose(text)}
            value={statinNameDose}
          />
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>Current diabetes medications and doses:</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={[styles.inputs, styles.smallTextbox]}
            onChangeText={(text) => setDiabetes(text)}
            value={diabetes}
          />
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>Current HTN medications and doses:</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={[styles.inputs, styles.smallTextbox]}
            onChangeText={(text) => setHtn(text)}
            value={htn}
          />
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>Current non-diabetes medications:</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={[styles.inputs, styles.smallTextbox]}
            onChangeText={(text) => setNonDiabetes(text)}
            value={nonDiabetes}
          />
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>Other Medicines:</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={[styles.inputs, styles.smallTextbox]}
            onChangeText={(text) => setOtherMedicines(text)}
            value={otherMedicines}
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
