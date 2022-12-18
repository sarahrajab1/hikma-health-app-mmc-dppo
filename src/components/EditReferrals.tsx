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
import DatePicker from 'react-native-datepicker';

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
  const [referralDate, setReferralDate] = useState(null);

  useEffect(() => {
    if (!!event.event_metadata) {
      const metadataObj = JSON.parse(event.event_metadata)
      setDiabeticEducator(metadataObj.diabeticEducator)
      setDietitian(metadataObj.dietitian)
      setOphthalmologist(metadataObj.ophthalmologist)
      setFootCareClinic(metadataObj.footCareClinic)
      setSocialServices(metadataObj.socialServices)
      setPsychologist(metadataObj.psychologist)
      setReferralDate(metadataObj.referralDate)
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
        psychologist,
        referralDate
      })
    ).then((response) => props.navigation.navigate('EventList', { events: response, language }))
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.containerLeft}>
        {Header({ action: () => props.navigation.navigate('EventList', { language }), language, setLanguage })}
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'stretch', }}>
          <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>Referrals: </Text>
        </View>
		<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {radioButtons({ field: diabeticEducator, action: setDiabeticEducator, prompt: 'Diabetic Educator:', language })}
        </View>
		<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {radioButtons({ field: dietitian, action: setDietitian, prompt: 'Dietitian:', language })}
        </View>
		<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {radioButtons({ field: ophthalmologist, action: setOphthalmologist, prompt: 'Ophthalmologist:', language })}
        </View>
		<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {radioButtons({ field: footCareClinic, action: setFootCareClinic, prompt: 'Foot care clinic:', language })}
        </View>
		<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {radioButtons({ field: socialServices, action: setSocialServices, prompt: 'Social Services:', language })}
        </View>
		<View style={[styles.responseRow, { paddingBottom: 0 }]}>
          {radioButtons({ field: psychologist, action: setPsychologist, prompt: 'Psychologist:', language })}
        </View>
      <View style={styles.inputRow}>
        <DatePicker
          style={styles.datePicker}
          date={referralDate}
          mode="date"
          placeholder="Retinal Examination Date"
          format="YYYY-MM-DD"
          minDate="1900-05-01"
          maxDate={new Date().toISOString().split('T')[0]}
          confirmBtnText={LocalizedStrings[language].confirm}
          cancelBtnText={LocalizedStrings[language].cancel}
          customStyles={{
            dateInput: {
              alignItems: 'flex-start',
              borderWidth: 0
            }
          }}
          androidMode='spinner'
          onDateChange={(date) => setReferralDate(date)}
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

export default EditReferrals;
