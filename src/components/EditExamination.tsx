import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, TouchableOpacity, Picker
} from 'react-native';

import { database } from "../storage/Database";
import styles from './Style';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import Header from './shared/Header';
import AutoTags from 'react-native-tag-autocomplete';
import icd11List from './shared/icd11List'

const EditExamination = (props) => {
  const event = props.navigation.getParam('event');
  const userName = props.navigation.getParam('userName');
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));
  
  const [examinationComplaint, setExaminationComplaint] = useState(null);
  const [illnessHistory, setIllnessHistory] = useState(null);

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

  const getTagsFromString = stringConditions => {
    let arr = stringConditions.split("; ")
    let data = []
    for(var i =0; i < arr.length; i++){
      data.push({ name: arr[i] })
    }
    return data
  }

  useEffect(() => {
    if (!!event.event_metadata) {
      const metadataObj = JSON.parse(event.event_metadata)
      setExaminationComplaint(metadataObj.examinationComplaint)
      setActiveConditions(metadataObj.activeConditions)
      setIllnessHistory(metadataObj.illnessHistory)
      setActiveConditionsTags(getTagsFromString(metadataObj.activeConditions))
    }
  }, [props])

  const submitExamination = async () => {
    database.editEvent(
      event.id,
      JSON.stringify({
        doctor: userName,
        examinationComplaint,
        activeConditions,
        illnessHistory
      })
    ).then((response) => props.navigation.navigate('EventList', { events: response, language }))
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.containerLeft}>
        {Header({ action: () => props.navigation.navigate('EventList', { language }), language, setLanguage })}
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
            onPress={() => submitExamination()} />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditExamination;
