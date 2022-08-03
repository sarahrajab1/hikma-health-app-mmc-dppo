import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Button
} from 'react-native';

import { database } from "../storage/Database";
import styles from './Style';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import Header from './shared/Header';

const EditOpenTextEvent = (props) => {

  const event = props.navigation.getParam('event');
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));
  const [responseText, setResponseText] = useState(props.navigation.getParam('event').event_metadata);

  const editEvent = async () => {
    database.editEvent(
      event.id,
      responseText
    ).then((response) => {
      props.navigation.navigate('EventList', { events: response, language })
    })
  };

  return (
    <View style={styles.container}>
      
    </View>
  );
};

export default EditOpenTextEvent;
