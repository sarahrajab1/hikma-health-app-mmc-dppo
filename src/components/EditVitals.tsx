import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Button
} from 'react-native';

import { database } from "../storage/Database";
import styles from './Style';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import Header from './shared/Header';

const EditVitals = (props) => {
  const event = props.navigation.getParam('event');
  const metadata = props.navigation.getParam('event').event_metadata;
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [bmi, setBmi] = useState(null);
  const [waistCircumference, setWaistCircumference] = useState(null);
  const [systolic, setSystolic] = useState(null);
  const [diastolic, setDiastolic] = useState(null);
  const [pulse, setPulse] = useState(null);

  useEffect(() => {
    if (!!metadata) {
      const metadataObj = JSON.parse(metadata)
      setHeight(metadataObj.height)
      setWeight(metadataObj.weight)
      setBmi(metadataObj.bmi)
      setWaistCircumference(metadataObj.waistCircumference)
      setSystolic(metadataObj.systolic)
      setDiastolic(metadataObj.diastolic)
      setPulse(metadataObj.pulse)
//       setHeartRate(metadataObj.heartRate)
//       setSystolic(metadataObj.systolic)
//       setDiastolic(metadataObj.diastolic)
//       setSats(metadataObj.sats)
//       setTemp(metadataObj.temp)
//       setRespiratoryRate(metadataObj.respiratoryRate)
//       setWeight(metadataObj.weight)
//       setBloodGlucose(metadataObj.bloodGlucose)
    }
  }, [props])

  const setVitals = async () => {
    database.editEvent(
      event.id,
      JSON.stringify({
        height,
        weight,
        bmi,
        waistCircumference,
        systolic,
        diastolic,
        pulse
      })
    ).then((response) => props.navigation.navigate('EventList', { events: response, language }))
  };

  return (
    <View style={styles.container}>
      {Header({ action: () => props.navigation.navigate('EventList', { language }), language, setLanguage })}
      <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>{LocalizedStrings[language].vitals}</Text>
      <View style={[styles.inputRow, { marginTop: 30 }]}>
        <TextInput
          style={styles.inputs}
          placeholder="Height"
          onChangeText={(text) => setHeight(text)}
          value={height}
          keyboardType='numeric'
        />
        <TextInput
          style={styles.inputs}
          placeholder="Weight"
          onChangeText={(text) => setWeight(text)}
          value={weight}
          keyboardType='numeric'
        />
      </View>
      <View style={[styles.inputRow]}>
        <TextInput
          style={styles.inputs}
          placeholder="bmi"
          onChangeText={(text) => setBmi(text)}
          value={bmi}
          keyboardType='numeric'
          />
        <TextInput
          style={styles.inputs}
          placeholder="Waist Circumference"
          onChangeText={(text) => setWaistCircumference(text)}
          value={waistCircumference}
          keyboardType='numeric'
        />
      </View>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.inputs}
          placeholder="Systolic"
          onChangeText={(text) => setSystolic(text)}
          value={systolic}
          keyboardType='numeric'
        />
        <Text style={{ color: '#FFFFFF' }}>/</Text>
        <TextInput
          style={styles.inputs}
          placeholder="Diastolic"
          onChangeText={(text) => setDiastolic(text)}
          value={diastolic}
          keyboardType='numeric'
        />
      </View>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.inputs}
          placeholder="Pulse"
          onChangeText={(text) => setPulse(text)}
          value={pulse}
          keyboardType='numeric'
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <Button
          title={LocalizedStrings[language].save}
          color={'#F77824'}
          onPress={() => setVitals()} />
      </View>
    </View>
  );
};

export default EditVitals;
