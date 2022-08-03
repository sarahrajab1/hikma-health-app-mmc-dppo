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


export const ReferralsDisplay = (metadataObj, language) => {
  return (<View>
    <Text>Diabetic Educator: {!!metadataObj.diabetesEducation ? "Normal" : "Abnormal"}</Text>
    <Text>Dietitian: {!!metadataObj.dietitian ? "Normal" : "Abnormal"}</Text>
    <Text>Ophthalmologist: {!!metadataObj.ophthalmologist ? "Normal" : "Abnormal"}</Text>
    <Text>Foot care clinic: {!!metadataObj.footCareClinic ? "Normal" : "Abnormal"}</Text>
    <Text>Social Services: {!!metadataObj.socialServices ? "Normal" : "Abnormal"}</Text>
    <Text>Psychologist: {!!metadataObj.psychologist ? "Normal" : "Abnormal"}</Text>
  </View>)
}

const Referrals = (props) => {
  const [diabeticEducator, setDiabeticEducator] = useState(null);
  const [dietitian, setDietitian] = useState(null);
  const [ophthalmologist, setOphthalmologist] = useState(null);
  const [footCareClinic, setFootCareClinic] = useState(null);
  const [socialServices, setSocialServices] = useState(null);
  const [psychologist, setPsychologist] = useState(null);
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));

  const patientId = props.navigation.getParam('patientId');
  const visitId = props.navigation.getParam('visitId');
  const userName = props.navigation.getParam('userName');

  const submit = async () => {
    database.addEvent({
      id: uuid(),
      patient_id: patientId,
      visit_id: visitId,
      event_type: EventTypes.Referrals,
      event_metadata: JSON.stringify({
        doctor: userName,
        diabeticEducator,
        dietitian,
        ophthalmologist,
        footCareClinic,
        socialServices,
        psychologist
      })
    }).then(() => {
      props.navigation.navigate('NewVisit')
    })
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.containerLeft}>
        {Header({ action: () => props.navigation.navigate('NewVisit', { language }), language, setLanguage })}
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'stretch', }}>
          <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>Referrals: </Text>
        </View>
		<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: diabeticEducator, action: setDiabeticEducator, prompt: 'Diabetic Educator:', language })}
        </View>
		<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: dietitian, action: setDietitian, prompt: 'Dietitian:', language })}
        </View>
		<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: ophthalmologist, action: setOphthalmologist, prompt: 'Ophthalmologist:', language })}
        </View>
		<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: footCareClinic, action: setFootCareClinic, prompt: 'Foot care clinic:', language })}
        </View>
		<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: socialServices, action: setSocialServices, prompt: 'Social Services:', language })}
        </View>
		<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {examinationRadioButtons({ field: psychologist, action: setPsychologist, prompt: 'Psychologist:', language })}
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

export default Referrals;
