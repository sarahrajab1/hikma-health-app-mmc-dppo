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
      <Text>HbA1c: { metadataObj.hbA1c === null ? "" : !!metadataObj.hbA1c ? "Normal" : "Abnormal"}, Value: {metadataObj.hbA1cValue}</Text>
      <Text>Fating blood glucose: { metadataObj.fatingGlucose === null ? "" : !!metadataObj.fatingGlucose ? "Normal" : "Abnormal"}, Value: {metadataObj.fatingGlucoseValue }</Text>
      <Text>Random blood glucose: { metadataObj.randomGlucose === null ? "" : !!metadataObj.randomGlucose ? "Normal" : "Abnormal"}, Value: {metadataObj.randomGlucoseValue}</Text>
      <Text>Post-meal blood glucose: { metadataObj.postMealGlucose === null ? "" : !!metadataObj.postMealGlucose ? "Normal" : "Abnormal"}, Value: {metadataObj.postMealGlucoseValue}</Text>
      <Text>Creatinine: { metadataObj.creatinine === null ? "" : !!metadataObj.creatinine ? "Normal" : "Abnormal"}, Value: {metadataObj.egfrValue}</Text>
      <Text>eGFR: { metadataObj.egfr === null ? "" : !!metadataObj.egfr ? "Normal" : "Abnormal"}, Value: {metadataObj.egfrValue}</Text>
      <Text>Total cholesterol: { metadataObj.totalCholesterol === null ? "" : !!metadataObj.totalCholesterol ? "Normal" : "Abnormal"}, Value: {metadataObj.totalCholesterolValue}</Text>
      <Text>LDL cholesterol: { metadataObj.ldlCholesterol === null ? "" : !!metadataObj.ldlCholesterol ? "Normal" : "Abnormal"}, Value: {metadataObj.ldlCholesterolValue}</Text>
      <Text>HDL: { metadataObj.hdl === null ? "" : !!metadataObj.hdl ? "Normal" : "Abnormal"}, Value: {metadataObj.hdlValue}</Text>
      <Text>T.G.: { metadataObj.tg === null ? "" : !!metadataObj.tg ? "Normal" : "Abnormal"}, Value: {metadataObj.tgValue}</Text>
      <Text>S. Sodium: { metadataObj.sodium === null ? "" : !!metadataObj.sodium ? "Normal" : "Abnormal"}, Value: {metadataObj.sodiumValue}</Text>
      <Text>S. Potassium: { metadataObj.potassium === null ? "" : !!metadataObj.potassium ? "Normal" : "Abnormal"}, Value: {metadataObj.potassiumValue}</Text>
      <Text>Haemoglobin: { metadataObj.haemoglobin === null ? "" : !!metadataObj.haemoglobin ? "Normal" : "Abnormal"}, Value: {metadataObj.haemoglobinValue}</Text>
      <Text>Urinary microalbumin to creatinine ratio (Urinary ACR): { metadataObj.urinaryAcr === null ? "" : !!metadataObj.urinaryAcr ? "Normal" : "Abnormal"}, Value: {metadataObj.urinaryAcrValue}</Text>
      <Text>Urine dipstick for protein: { metadataObj.dipstick === null ? "" : !!metadataObj.dipstick ? "Normal" : "Abnormal"}, Value: {metadataObj.dipstickValue}</Text>
      <Text>Urine analysis:</Text>
      {!!metadataObj.urineProtein ? <Text>Protein:: {LocalizedStrings[language].yes}, Value: {metadataObj.urineProteinValue}</Text> : null}
      {!!metadataObj.urineSugar ? <Text>Sugar: {LocalizedStrings[language].yes}, Value: {metadataObj.urineSugarValue}</Text> : null}
      {!!metadataObj.urineKetones ? <Text>Ketones: {LocalizedStrings[language].yes}, Value: {metadataObj.urineKetonesValue}</Text> : null}
      {!!metadataObj.urineMicroalbuminuria ? <Text>Microalbuminuria: {LocalizedStrings[language].yes}, Value: {metadataObj.urineMicroalbuminuriaValue}</Text> : null}
      {!!metadataObj.ecg ? <Text>ECG: {LocalizedStrings[language].yes}, Value: {metadataObj.ecgValue}</Text> : null}
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
  const [hbA1cValue, setHbA1cValue] = useState(null);
  const [fatingGlucoseValue, setFatingGlucoseValue] = useState(null);
  const [randomGlucoseValue, setRandomGlucoseValue] = useState(null);
  const [postMealGlucoseValue, setPostMealGlucoseValue] = useState(null);
  const [creatinineValue, setCreatinineValue] = useState(null);
  const [egfrValue, setEgfrValue] = useState(null);
  const [totalCholesterolValue, setTotalCholesterolValue] = useState(null);
	const [ldlCholesterolValue, setLdlCholesterolValue] = useState(null);
  const [hdlValue, setHdlValue] = useState(null);
	const [tgValue, setTgValue] = useState(null);
	const [sodiumValue, setSodiumValue] = useState(null);
	const [potassiumValue, setPotassiumValue] = useState(null);
	const [haemoglobinValue, setHaemoglobinValue] = useState(null);
	const [urinaryAcrValue, setUrinaryAcrValue] = useState(null);
	const [dipstickProteinValue, setDipstickProteinValue] = useState(null);
	const [urineProteinValue, setUrineProteinValue] = useState(null);
	const [urineSugarValue, setUrineSugarValue] = useState(null);
	const [urineKetonesValue, setUrineKetonesValue] = useState(null);
	const [urineMicroalbuminuriaValue, setUrineMicroalbuminuriaValue] = useState(null);
	const [ecgValue, setEcgValue] = useState(null);

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
				otherInvestigations,
        hbA1cValue,
        fatingGlucoseValue,
				randomGlucoseValue,
				postMealGlucoseValue,
				creatinineValue,
				egfrValue,
				totalCholesterolValue,
				ldlCholesterolValue,
				hdlValue,
				tgValue,
				sodiumValue,
				potassiumValue,
				haemoglobinValue,
				urinaryAcrValue,
				dipstickProteinValue,
				urineProteinValue,
				urineSugarValue,
				urineMicroalbuminuriaValue,
				urineKetonesValue,
				ecgValue,
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
          <TextInput
            style={styles.inputs}
            placeholder="HbA1c value"
            onChangeText={(text) => setHbA1cValue(text)}
            value={hbA1cValue}
            keyboardType='numeric'
          />
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: fatingGlucose, action: setFatingGlucose, prompt: 'Fating blood glucose:', language })}
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <TextInput
            style={styles.inputs}
            placeholder="Fating blood glucose value"
            onChangeText={(text) => setFatingGlucoseValue(text)}
            value={fatingGlucoseValue}
            keyboardType='numeric'
          />
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: randomGlucose, action: setRandomGlucose, prompt: 'Random blood glucose:', language })}
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <TextInput
            style={styles.inputs}
            placeholder="Random blood glucose value"
            onChangeText={(text) => setRandomGlucoseValue(text)}
            value={randomGlucoseValue}
            keyboardType='numeric'
          />
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: postMealGlucose, action: setPostMealGlucose, prompt: 'Post-meal blood glucose:', language })}
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <TextInput
            style={styles.inputs}
            placeholder="Post-meal blood glucose value"
            onChangeText={(text) => setPostMealGlucoseValue(text)}
            value={postMealGlucoseValue}
            keyboardType='numeric'
          />
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: creatinine, action: setCreatinine, prompt: 'Creatinine:', language })}
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <TextInput
            style={styles.inputs}
            placeholder="Creatinine value"
            onChangeText={(text) => setCreatinineValue(text)}
            value={creatinineValue}
            keyboardType='numeric'
          />
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: egfr, action: setEgfr, prompt: 'eGFR:', language })}
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <TextInput
            style={styles.inputs}
            placeholder="eGFR value"
            onChangeText={(text) => setEgfrValue(text)}
            value={egfrValue}
            keyboardType='numeric'
          />
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: totalCholesterol, action: setTotalCholesterol, prompt: 'Total cholesterol:', language })}
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <TextInput
            style={styles.inputs}
            placeholder="Total cholesterol value"
            onChangeText={(text) => setTotalCholesterolValue(text)}
            value={totalCholesterolValue}
            keyboardType='numeric'
          />
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: ldlCholesterol, action: setLdlCholesterol, prompt: 'LDL cholesterol:', language })}
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <TextInput
            style={styles.inputs}
            placeholder="LDL cholesterol value"
            onChangeText={(text) => setLdlCholesterolValue(text)}
            value={ldlCholesterolValue}
            keyboardType='numeric'
          />
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: hdl, action: setHdl, prompt: 'HDL:', language })}
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <TextInput
            style={styles.inputs}
            placeholder="HDL value"
            onChangeText={(text) => setHdlValue(text)}
            value={hdlValue}
            keyboardType='numeric'
          />
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: tg, action: setTg, prompt: 'T.G:', language })}
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <TextInput
            style={styles.inputs}
            placeholder="T.G value"
            onChangeText={(text) => setTgValue(text)}
            value={tgValue}
            keyboardType='numeric'
          />
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: sodium, action: setSodium, prompt: 'S. Sodium:', language })}
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <TextInput
            style={styles.inputs}
            placeholder="S. Sodium value"
            onChangeText={(text) => setSodiumValue(text)}
            value={sodiumValue}
            keyboardType='numeric'
          />
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: potassium, action: setPotassium, prompt: 'S. Potassium:', language })}
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <TextInput
            style={styles.inputs}
            placeholder="S. Potassium value"
            onChangeText={(text) => setPotassiumValue(text)}
            value={potassiumValue}
            keyboardType='numeric'
          />
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: haemoglobin, action: setHaemoglobin, prompt: 'Haemoglobin:', language })}
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <TextInput
            style={styles.inputs}
            placeholder="Haemoglobin value"
            onChangeText={(text) => setHaemoglobinValue(text)}
            value={haemoglobinValue}
            keyboardType='numeric'
          />
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: urinaryAcr, action: setUrinaryAcr, prompt: 'Urinary microalbumin to creatinine ratio (Urinary ACR)', language })}
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <TextInput
            style={styles.inputs}
            placeholder="Urinary microalbumin to creatinine ratio value"
            onChangeText={(text) => setUrinaryAcrValue(text)}
            value={urinaryAcrValue}
            keyboardType='numeric'
          />
        </View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: dipstickProtein, action: setDipstickProtein, prompt: 'Urine dipstick for protein:', language })}
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <TextInput
            style={styles.inputs}
            placeholder="Urine dipstick for protein value"
            onChangeText={(text) => setDipstickProteinValue(text)}
            value={dipstickProteinValue}
            keyboardType='numeric'
          />
        </View>
				<View>
					<View style={[styles.responseRow, { paddingVertical: 0 }]}>
						<Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}>Urine analysis:</Text>
					</View>
					<View style={styles.responseRow}>
						{radioButtons({ field: urineProtein, action: setUrineProtein, prompt: 'Protein', language })}
					</View>
          <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <TextInput
            style={styles.inputs}
            placeholder="Protein value"
            onChangeText={(text) => setUrineProteinValue(text)}
            value={urineProteinValue}
            keyboardType='numeric'
          />
        </View>
					<View style={styles.responseRow}>
						{radioButtons({ field: urineSugar, action: setUrineSugar, prompt: 'Sugar', language })}
					</View>
          <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <TextInput
            style={styles.inputs}
            placeholder="Sugar value"
            onChangeText={(text) => setUrineSugarValue(text)}
            value={urineSugarValue}
            keyboardType='numeric'
          />
        </View>
					<View style={styles.responseRow}>
						{radioButtons({ field: urineKetones, action: setUrineKetones, prompt: 'Ketones', language })}
					</View>
          <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <TextInput
            style={styles.inputs}
            placeholder="Ketones value"
            onChangeText={(text) => setUrineKetonesValue(text)}
            value={urineKetonesValue}
            keyboardType='numeric'
          />
        </View>
					<View style={styles.responseRow}>
						{radioButtons({ field: urineMicroalbuminuria, action: setUrineMicroalbuminuria, prompt: 'Microalbuminuria', language })}
					</View>
          <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <TextInput
            style={styles.inputs}
            placeholder="Microalbuminuria value"
            onChangeText={(text) => setUrineMicroalbuminuriaValue(text)}
            value={urineMicroalbuminuriaValue}
            keyboardType='numeric'
          />
        </View>
				</View>
				<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: ecg, action: setEcg, prompt: 'ECG:', language })}
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <TextInput
            style={styles.inputs}
            placeholder="ECG value"
            onChangeText={(text) => setEcgValue(text)}
            value={ecgValue}
            keyboardType='numeric'
          />
        </View>
				<View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>Other investigations:</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={[styles.inputs, styles.textbox]}
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
