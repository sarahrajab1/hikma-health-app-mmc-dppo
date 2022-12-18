import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, TouchableOpacity, Picker
} from 'react-native';

import { database } from "../storage/Database";
import { v4 as uuid } from 'uuid';
import styles from './Style';
import { EventTypes } from '../enums/EventTypes';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import Header from './shared/Header';
import AutoTags from 'react-native-tag-autocomplete';
import icd11List from './shared/icd11List'

export const ExaminationDisplay = (metadataObj, language) => {
  return (
    <View>
      <Text>{LocalizedStrings[language].provider}: {metadataObj.doctor} </Text>
      <Text>Present Complaint: {metadataObj.examinationComplaint} </Text>
      <Text>Active Conditions: {metadataObj.activeConditions}</Text>
      <Text>History of Present illness: {metadataObj.illnessHistory}</Text>
    </View>)
}

const Examination = (props) => {
  const [examinationComplaint, setExaminationComplaint] = useState(null);
  const [illnessHistory, setIllnessHistory] = useState(null);
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));

  const patientId = props.navigation.getParam('patientId');
  const visitId = props.navigation.getParam('visitId');
  const userName = props.navigation.getParam('userName');

  const [activeConditionsTags, setActiveConditionsTags] = useState([]);
  const [activeConditions, setActiveConditions] = useState('')

  const handleDelete = index => {
    //tag deleted, remove from our tags array
    activeConditionsTags.splice(index, 1);
    setActiveConditionsTags( activeConditionsTags );

    let allActiveConditions = activeConditionsTags.map(function(condition){
      return condition.name;
    }).join("; ");
    setActiveConditions(allActiveConditions)
  }

  const handleAddition = suggestion => {
    // suggestion clicked, push it to our tags array
    let tagsNew = [ ...activeConditionsTags, {name: suggestion.name}]
    setActiveConditionsTags(tagsNew);
    let allActiveConditions = tagsNew.map(function(condition){
      return condition.name;
    }).join("; ");
    setActiveConditions(allActiveConditions)
  }

  const submit = async () => {
    database.addEvent({
      id: uuid(),
      patient_id: patientId,
      visit_id: visitId,
      event_type: EventTypes.ExaminationFull,
      event_metadata: JSON.stringify({
        doctor: userName,
        examinationComplaint,
        activeConditions,
        illnessHistory
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
          <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>{LocalizedStrings[language].examination}</Text>
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>Present Complaint:</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={[styles.inputs, styles.textbox]}
            onChangeText={(text) => setExaminationComplaint(text)}
            value={examinationComplaint}
          />
        </View>
        <Text style={{ color: '#FFFFFF', paddingTop: 15, paddingRight: 5, paddingLeft: 5 }}>Active Conditions</Text>
        <View style={[styles.responseRow, { padding: 12 }]}>
          <AutoTags
            suggestions={icd11List}
            tagsSelected={activeConditionsTags}
            placeholder="Add a condition.."
            handleAddition={handleAddition}
            handleDelete={handleDelete}
            style={{width: '100%'}}
            listStyle={{maxHeight:250}} 
          />
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>History of Present Illness:</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={[styles.inputs, styles.textbox]}
            onChangeText={(text) => setIllnessHistory(text)}
            value={illnessHistory}
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

export default Examination;
