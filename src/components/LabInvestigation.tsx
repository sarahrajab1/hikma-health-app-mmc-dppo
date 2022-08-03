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
import radioButtons from './shared/RadioButtons';


export const LabInvestigationDisplay = (metadataObj, language) => {
  return (<View>
      <Text>HbA1c: {!!metadataObj.hbA1c ? "Normal" : "Abnormal"}</Text>
      <Text>Fating blood glucose: {!!metadataObj.fatingGlucose ? "Normal" : "Abnormal"}</Text>
      <Text>Random blood glucose: {!!metadataObj.randomGlucose ? "Normal" : "Abnormal"}</Text>
      <Text>Post-meal blood glucose: {!!metadataObj.postMealGlucose ? "Normal" : "Abnormal"}</Text>
      <Text>Creatinine: {!!metadataObj.creatinine ? "Normal" : "Abnormal"}</Text>
      <Text>eGFR: {!!metadataObj.egfr ? "Normal" : "Abnormal"}</Text>
      <Text>Total cholesterol: {!!metadataObj.totalCholesterol ? "Normal" : "Abnormal"}</Text>
      <Text>LDL cholesterol: {!!metadataObj.ldlCholesterol ? "Normal" : "Abnormal"}</Text>
      <Text>HDL: {!!metadataObj.hdl ? "Normal" : "Abnormal"}</Text>
      <Text>T.G.: {!!metadataObj.tg ? "Normal" : "Abnormal"}</Text>
      <Text>S. Sodium: {!!metadataObj.sodium ? "Normal" : "Abnormal"}</Text>
      <Text>S. Potassium: {!!metadataObj.potassium ? "Normal" : "Abnormal"}</Text>
      <Text>Haemoglobin: {!!metadataObj.haemoglobin ? "Normal" : "Abnormal"}</Text>
      <Text>Urinary microalbumin to creatinine ratio (Urinary ACR): {!!metadataObj.urinaryAcr ? "Normal" : "Abnormal"}</Text>
      <Text>Urine dipstick for protein: {!!metadataObj.dipstick ? "Normal" : "Abnormal"}</Text>
      <Text>Urine analysis: </Text>
      {!!metadataObj.urineProtein ? <Text>Protein:: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.urineSugar ? <Text>Sugar: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.urineKetones ? <Text>Ketones: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.urineMicroalbuminuria ? <Text>Microalbuminuria: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.ecg ? <Text>ECG: {LocalizedStrings[language].yes}</Text> : null}
      <Text>Other investigations: {metadataObj.otherInvestigations} </Text>
    </View>)
}

const LabInvestigation = (props) => {
  const [hbA1c, setHbA1c] = useState(null);
  const [fatingGlucose, setFatingGlucose] = useState(null);
  const [randomGlucose, setRandomGlucose] = useState(null);
  const [postMealGlucose, setPostMealGlucose] = useState(null);
  const [creatinine, setCreatinine] = useState(null);
  const [egfr, setEgfr] = useState(null);
  const [totalCholesterol, setTotalCholesterol] = useState(null);
	const [ldlCholesterol, setLdlCholesterol] = useState(null);
  const [hdl, setHdl] = useState(null);
	const [tg, setTg] = useState(null);
	const [sodium, setSodium] = useState(null);
	const [potassium, setPotassium] = useState(null);
	const [haemoglobin, setHaemoglobin] = useState(null);
	const [urinaryAcr, setUrinaryAcr] = useState(null);
	const [dipstickProtein, setDipstickProtein] = useState(null);
	const [urineProtein, setUrineProtein] = useState(null);
	const [urineSugar, setUrineSugar] = useState(null);
	const [urineKetones, setUrineKetones] = useState(null);
	const [urineMicroalbuminuria, setUrineMicroalbuminuria] = useState(null);
	const [ecg, setEcg] = useState(null);
	const [otherInvestigations, setOtherInvestigations] = useState(null);
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));

  const patientId = props.navigation.getParam('patientId');
  const visitId = props.navigation.getParam('visitId');
  const userName = props.navigation.getParam('userName');

  const submit = async () => {
    database.addEvent({
      id: uuid(),
      patient_id: patientId,
      visit_id: visitId,
      event_type: EventTypes.LabInvestigation,
      event_metadata: JSON.stringify({
        doctor: userName,
        hbA1c,
        fatingGlucose,
				randomGlucose,
				postMealGlucose,
				creatinine,
				egfr,
				totalCholesterol,
				ldlCholesterol,
				hdl,
				tg,
				sodium,
				potassium,
				haemoglobin,
				urinaryAcr,
				dipstickProtein,
				urineProtein,
				urineSugar,
				urineMicroalbuminuria,
				urineKetones,
				ecg,
				otherInvestigations
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
          <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>Lab data and Investigations: </Text>
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: hbA1c, action: setHbA1c, prompt: 'HbA1c:', language })}
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: fatingGlucose, action: setFatingGlucose, prompt: 'Fating blood glucose:', language })}
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: randomGlucose, action: setRandomGlucose, prompt: 'Random blood glucose:', language })}
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: postMealGlucose, action: setPostMealGlucose, prompt: 'Post-meal blood glucose:', language })}
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: creatinine, action: setCreatinine, prompt: 'Creatinine:', language })}
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: egfr, action: setEgfr, prompt: 'eGFR:', language })}
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: totalCholesterol, action: setTotalCholesterol, prompt: 'Total cholesterol:', language })}
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: ldlCholesterol, action: setLdlCholesterol, prompt: 'LDL cholesterol:', language })}
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: hdl, action: setHdl, prompt: 'HDL:', language })}
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: tg, action: setTg, prompt: 'T.G:', language })}
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: sodium, action: setSodium, prompt: 'S. Sodium:', language })}
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: potassium, action: setPotassium, prompt: 'S. Potassium:', language })}
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: haemoglobin, action: setHaemoglobin, prompt: 'Haemoglobin:', language })}
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: urinaryAcr, action: setUrinaryAcr, prompt: 'Urinary microalbumin to creatinine ratio (Urinary ACR)', language })}
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: dipstickProtein, action: setDipstickProtein, prompt: 'Urine dipstick for protein:', language })}
        </View>
				<View>
					<View style={[styles.responseRow, { paddingVertical: 0 }]}>
						<Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}>Urine analysis:</Text>
					</View>
					<View style={styles.responseRow}>
						{radioButtons({ field: urineProtein, action: setUrineProtein, prompt: 'Protein', language })}
					</View>
					<View style={styles.responseRow}>
						{radioButtons({ field: urineSugar, action: setUrineSugar, prompt: 'Sugar', language })}
					</View>
					<View style={styles.responseRow}>
						{radioButtons({ field: urineKetones, action: setUrineKetones, prompt: 'Ketones', language })}
					</View>
					<View style={styles.responseRow}>
						{radioButtons({ field: urineMicroalbuminuria, action: setUrineMicroalbuminuria, prompt: 'Microalbuminuria', language })}
					</View>
				</View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: ecg, action: setEcg, prompt: 'ECG:', language })}
        </View>
				<View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>Other investigations:</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setOtherInvestigations(text)}
            value={otherInvestigations}
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

export default LabInvestigation;
