import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, TouchableOpacity, Picker
} from 'react-native';

import { database } from "../storage/Database";
import styles from './Style';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import Header from './shared/Header';


export const Indications = (value, action, language) => {
  return (
    <View style={styles.pickerView}>
      <Picker
        selectedValue={value}
        onValueChange={value => action(value)}
        style={[styles.inputPicker, { width: 180 }]}
      >
        <Picker.Item value='' label="None" />
        <Picker.Item value='Pt Request' label='Pt Request' />
        <Picker.Item value='Uncontrolled HT' label='Uncontrolled HT' />
        <Picker.Item value='Abnormal lipid profile' label='Abnormal lipid profile' />
        <Picker.Item value='Renal impairment' label='Renal impairment' />
        <Picker.Item value='Advanced peripheral' label='Advanced peripheral' />
        <Picker.Item value='Erectile dysfunction' label='Erectile dysfunction' />
        <Picker.Item value='Uncontrolled D.M' label='Uncontrolled D.M' />
        <Picker.Item value='recurrent hypoglycemia' label='recurrent hypoglycemia' />
      </Picker>
    </View>
  )
}

  
const EditEndocrinologistCases = (props) => {
  const event = props.navigation.getParam('event');
  const userName = props.navigation.getParam('userName');
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));

  const [indications, setIndications] = useState(null);
  const [feedback, setFeedback] = useState(null);


  useEffect(() => {
    if (!!event.event_metadata) {
      const metadataObj = JSON.parse(event.event_metadata)
        setIndications(metadataObj.indications)
        setFeedback(metadataObj.feedback)
    }
  }, [props])

  const submit = async () => {
    database.editEvent(
      event.id,
      JSON.stringify({
        doctor: userName,
        indications,
        feedback,
      })
    ).then((response) => props.navigation.navigate('EventList', { events: response, language }))
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.containerLeft}>
        {Header({ action: () => props.navigation.navigate('NewVisit', { language }), language, setLanguage })}

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'stretch', }}>
          <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>Cases of refer to endocrinologist:</Text>
        </View>
        <View style={[styles.responseRow, { flexDirection: 'row', justifyContent: 'space-between' }]}>
          <Text style={{ color: '#FFFFFF'}}>Indication for referral</Text>
          {Indications(indications, setIndications, language)}
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>Endocrinologist Feedback:</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={[styles.inputs, styles.textbox]}
            onChangeText={(text) => setFeedback(text)}
            value={feedback}
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

export default EditEndocrinologistCases;
