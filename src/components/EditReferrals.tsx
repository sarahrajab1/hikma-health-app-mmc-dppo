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
import examinationRadioButtons from './shared/ExaminationRadioButtons';

const EditReferrals = (props) => {
  const event = props.navigation.getParam('event');
  const userName = props.navigation.getParam('userName');

  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));
  const [diabeticEducator, setDiabeticEducator] = useState(null);
  const [dietitian, setDietitian] = useState(null);
  const [ophthalmologist, setOphthalmologist] = useState(null);
  const [footCareClinic, setFootCareClinic] = useState(null);
  const [socialServices, setSocialServices] = useState(null);
  const [psychologist, setPsychologist] = useState(null);

  useEffect(() => {
    if (!!event.event_metadata) {
      const metadataObj = JSON.parse(event.event_metadata)
      setDiabeticEducator(metadataObj.diabeticEducator)
      setDietitian(metadataObj.dietitian)
      setOphthalmologist(metadataObj.ophthalmologist)
      setFootCareClinic(metadataObj.footCareClinic)
      setSocialServices(metadataObj.socialServices)
      setPsychologist(metadataObj.psychologist)
    }
  }, [props])

  const submit = async () => {
    database.editEvent(
      event.id,
      JSON.stringify({
        doctor: userName,
        diabeticEducator,
        dietitian,
        ophthalmologist,
        footCareClinic,
        socialServices,
        psychologist
      })
    ).then((response) => props.navigation.navigate('EventList', { events: response, language }))
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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

export default EditReferrals;
