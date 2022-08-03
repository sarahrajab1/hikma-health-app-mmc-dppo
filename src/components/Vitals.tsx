import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Button
} from 'react-native';

import { database } from "../storage/Database";
import { v4 as uuid } from 'uuid';
import styles from './Style';
import { EventTypes } from '../enums/EventTypes';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import Header from './shared/Header';

export const VitalsDisplay = (metadataObj, language) => {
  return (
    <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}>
        <Text style={{ width: '50%' }}>Height: {metadataObj.height} m</Text>
        <Text style={{ width: '50%' }}>Weight: {metadataObj.weight} kg</Text>
        <Text style={{ width: '50%' }}>BMI: {metadataObj.bmi} </Text>
        <Text style={{ width: '50%' }}>Waist circumference: {metadataObj.waistCircumference} </Text>
        <Text style={{ width: '50%' }}>BP: {metadataObj.systolic}/{metadataObj.diastolic} </Text>
        <Text style={{ width: '50%' }}>Pulse: {metadataObj.pulse} </Text>
    </View>)
}

const Vitals = (props) => {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [bmi, setBmi] = useState(null);
    const [waistCircumference, setWaistCircumference] = useState(null);
    const [systolic, setSystolic] = useState(null);
    const [diastolic, setDiastolic] = useState(null);
    const [pulse, setPulse] = useState(null);
//   const [heartRate, setHeartRate] = useState(null);
//   const [systolic, setSystolic] = useState(null);
//   const [diastolic, setDiastolic] = useState(null);
//   const [sats, setSats] = useState(null);
//   const [temp, setTemp] = useState(null);
//   const [respiratoryRate, setRespiratoryRate] = useState(null);
//   const [weight, setWeight] = useState(null);
//   const [bloodGlucose, setBloodGlucose] = useState(null);
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));

  const patientId = props.navigation.getParam('patientId');
  const visitId = props.navigation.getParam('visitId');

  const setVitals = async () => {
    database.addEvent({
      id: uuid(),
      patient_id: patientId,
      visit_id: visitId,
      event_type: EventTypes.Vitals,
      event_metadata: JSON.stringify({
        weight,
        height,
        bmi,
        waistCircumference,
        systolic,
        diastolic,
        pulse
//         heartRate,
//         systolic,
//         diastolic,
//         sats,
//         temp,
//         respiratoryRate,
//         weight,
//         bloodGlucose
      })
    }).then(() => {
      props.navigation.navigate('NewVisit')
    })
  };

  return (
    <View style={styles.container}>
      {Header({ action: () => props.navigation.navigate('NewVisit', { language }), language, setLanguage })}
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

export default Vitals;
