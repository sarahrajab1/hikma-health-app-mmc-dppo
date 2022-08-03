import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, TouchableOpacity
} from 'react-native';

import { database } from "../storage/Database";
import styles from './Style';
import { LocalizedStrings } from '../enums/LocalizedStrings';
// import { MedicineType } from './Medicine';
import Header from './shared/Header';
import radioButtons from './shared/RadioButtons';

const EditMedicine = (props) => {
  const event = props.navigation.getParam('event');
  const userName = props.navigation.getParam('userName');

  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));
  const [onStain, setOnStain] = useState(null);
  const [stainNameDose, setStainNameDose] = useState(null);
  const [diabetes, setDiabetes] = useState(null);
  const [nonDiabetes, setNonDiabetes] = useState(null);
  const [htn, setHtn] = useState(null);

  useEffect(() => {
    if (!!event.event_metadata) {
      const metadataObj = JSON.parse(event.event_metadata)
      setOnStain(metadataObj.onStain)
      setStainNameDose(metadataObj.stainNameDose)
      setDiabetes(metadataObj.diabetes)
      setHtn(metadataObj.htn)
      setNonDiabetes(metadataObj.nonDiabetes)
    }
  }, [props])

  const submit = async () => {
    database.editEvent(
      event.id,
      JSON.stringify({
        doctor: userName,
        onStain,
        stainNameDose,
        diabetes,
        htn,
        nonDiabetes
      })
    ).then((response) => props.navigation.navigate('EventList', { events: response, language }))
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

export default EditMedicine;
