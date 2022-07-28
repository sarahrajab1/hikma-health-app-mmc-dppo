import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, TouchableOpacity
} from 'react-native';

import { database } from "../storage/Database";
import styles from './Style';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import Header from './shared/Header';

export const Vibration  = (value, action, language) => {
	return (
		<Picker
			selectedValue={value}
			onValueChange={value => action(value)}
			style={[styles.picker, { width: 180 }]}
		>
			<Picker.Item value='' label="Vibration Sense" />
			<Picker.Item value='intact' label='intact' />
			<Picker.Item value='impaired' label='impaired' />
			<Picker.Item value='absent' label='absent' />
		</Picker>
	)
}


export const Monofilament  = (value, action, language) => {
	return (
		<Picker
			selectedValue={value}
			onValueChange={value => action(value)}
			style={[styles.picker, { width: 180 }]}
		>
			<Picker.Item value='' label="10g Monofilament " />
			<Picker.Item value='intact' label='intact' />
			<Picker.Item value='impaired' label='impaired' />
			<Picker.Item value='absent' label='absent' />
		</Picker>
	)
}

export const DistalPulse  = (value, action, language) => {
	return (
		<Picker
			selectedValue={value}
			onValueChange={value => action(value)}
			style={[styles.picker, { width: 180 }]}
		>
			<Picker.Item value='' label="Distal foot pulse" />
			<Picker.Item value='intact' label='intact' />
			<Picker.Item value='impaired' label='impaired' />
			<Picker.Item value='absent' label='absent' />
		</Picker>
	)
}

export const DorsalisPulse  = (value, action, language) => {
	return (
		<Picker
			selectedValue={value}
			onValueChange={value => action(value)}
			style={[styles.picker, { width: 180 }]}
		>
			<Picker.Item value='' label="Dorsalis pedis  pulse" />
			<Picker.Item value='intact' label='intact' />
			<Picker.Item value='impaired' label='impaired' />
			<Picker.Item value='absent' label='absent' />
		</Picker>
	)
}

export const PosteriorPulse  = (value, action, language) => {
	return (
		<Picker
			selectedValue={value}
			onValueChange={value => action(value)}
			style={[styles.picker, { width: 180 }]}
		>
			<Picker.Item value='' label="Posterior tibial pulse" />
			<Picker.Item value='intact' label='intact' />
			<Picker.Item value='impaired' label='impaired' />
			<Picker.Item value='absent' label='absent' />
		</Picker>
	)
}


const EditFootCareExamination = (props) => {
  const event = props.navigation.getParam('event');
  const userName = props.navigation.getParam('userName');
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));
  
  const [rtVibration, setRtVibration] = useState(null);
  const [rtMonofilament, setRtMonofilament] = useState(null);
  const [rtDistalPulse, setRtDistalPulse] = useState(null);
  const [rtDorsalisPulse, setRtDorsalisPulse] = useState(null);
  const [rtPosteriorPulse, setRtPosteriorPulse] = useState(null);
  const [leftVibration, setLeftVibration] = useState(null);
  const [leftMonofilament, setLeftMonofilament] = useState(null);
  const [leftDistalPulse, setLeftDistalPulse] = useState(null);
  const [leftDorsalisPulse, setLeftDorsalisPulse] = useState(null);
  const [leftPosteriorPulse, setLeftPosteriorPulse] = useState(null);

  useEffect(() => {
    if (!!event.event_metadata) {
      const metadataObj = JSON.parse(event.event_metadata)
      setRtVibration(metadataObj.rtVibration)
      setRtMonofilament(metadataObj.rtMonofilament)
      setRtDistalPulse(metadataObj.rtDistalPulse)
      setRtDorsalisPulse(metadataObj.rtDorsalisPulse)
      setRtPosteriorPulse(metadataObj.rtPosteriorPulse)
      setLeftVibration(metadataObj.leftVibration)
      setLeftMonofilament(metadataObj.leftMonofilament)
      setLeftDistalPulse(metadataObj.leftDistalPulse)
      setLeftDorsalisPulse(metadataObj.leftDorsalisPulse)
      setLeftPosteriorPulse(metadataObj.leftPosteriorPulse)
    }
  }, [props])

  const submitFootCareExamination = async () => {
    database.editEvent(
      event.id,
      JSON.stringify({
        doctor: userName,
        rtVibration,
        rtMonofilament,
        rtDistalPulse,
        rtDorsalisPulse,
        rtPosteriorPulse,
        leftVibration,
        leftMonofilament,
        leftDistalPulse,
        leftDorsalisPulse,
        leftPosteriorPulse,
      })
    ).then((response) => props.navigation.navigate('EventList', { events: response, language }))
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.containerLeft}>
        {Header({action: () => props.navigation.navigate('EventList', { language}), language, setLanguage})}

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'stretch', }}>
          <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>FootCare Unit Examination: </Text>
        </View>
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>Rt Foot examination:</Text>
        </View>
				{Vibration(rtVibration, setRtVibration, language)}
				{Monofilament(rtMonofilament, setRtMonofilament, language)}
				{DistalPulse(rtDistalPulse, setRtDistalPulse, language)}
				{DorsalisPulse(rtDorsalisPulse, setRtDorsalisPulse, language)}
				{PosteriorPulse(rtPosteriorPulse, setRtPosteriorPulse, language)}
				<View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>Left Foot examination:</Text>
        </View>
				{Vibration(leftVibration, setLeftVibration, language)}
				{Monofilament(leftMonofilament, setLeftMonofilament, language)}
				{DistalPulse(leftDistalPulse, setLeftDistalPulse, language)}
				{DorsalisPulse(leftDorsalisPulse, setLeftDorsalisPulse, language)}
				{PosteriorPulse(leftPosteriorPulse, setLeftPosteriorPulse, language)}
        <View style={{ alignItems: 'center' }}>
          <Button
            title={LocalizedStrings[language].save}
            color={'#F77824'}
            onPress={() => submitFootCareExamination()} />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditFootCareExamination;