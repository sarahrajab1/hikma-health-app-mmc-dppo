import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, TouchableOpacity, Picker
} from 'react-native';

import { database } from "../storage/Database";
import styles from './Style';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import Header from './shared/Header';

const EditDiabetesEducation = (props) => {
  const event = props.navigation.getParam('event');
  const userName = props.navigation.getParam('userName');
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));
  
  const [visitNote, setVisitNote] = useState(null);

  useEffect(() => {
    if (!!event.event_metadata) {
      const metadataObj = JSON.parse(event.event_metadata)
      setVisitNote(metadataObj.visitNote)
    }
  }, [props])

  const submitDiabetesEducation = async () => {
    database.editEvent(
      event.id,
      JSON.stringify({
        doctor: userName,
        visitNote,
      })
    ).then((response) => props.navigation.navigate('EventList', { events: response, language }))
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.containerLeft}>
        {Header({ action: () => props.navigation.navigate('EventList', { language }), language, setLanguage })}
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'stretch', }}>
          <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>Diabetes Education</Text>
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>First Visit Note:</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={[styles.inputs, styles.textbox]}
            onChangeText={(text) => setVisitNote(text)}
            value={visitNote}
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

export default EditDiabetesEducation;
