import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, Image, TextInput, TouchableOpacity, Picker, ScrollView, TextBox
} from 'react-native';
import styles from './Style';
import { EventTypes } from '../enums/EventTypes';
import { database } from "../storage/Database";
import { v4 as uuid } from 'uuid';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import Header from './shared/Header';

export const visitTypes = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: 180 }]}
    >
      <Picker.Item value="" label="Visite Type" />
      <Picker.Item value="New" label="New" />
      <Picker.Item value="Follow Up" label="Follow Up" />
    </Picker>
  );
};

const NewVisit = (props) => {
  const [visitType, setVisitType] = useState('');
  const [visitDate, setVisitDate] = useState(new Date().toISOString().split('T')[0]);
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'))
  const [typeTextColor, setTypeTextColor] = useState('#A9A9A9')
  const patient = props.navigation.getParam('patient');
  const visitId = props.navigation.getParam('visitId');
  const userName = props.navigation.getParam('userName');
  const existingVisit = props.navigation.getParam('existingVisit');

  const today = new Date();

  useEffect(() => {
    let patientId = props.navigation.state.params.patient.id;
    database.getLatestPatientEventByType(patientId, EventTypes.VisitType).then((response: string) => {
      if (response.length > 0) {
        setVisitType(response)
      }
    })

    if (!!props.navigation.getParam('language') && language !== props.navigation.getParam('language')) {
      setLanguage(props.navigation.getParam('language'));
    }
  }, [props])

  const LanguageToggle = () => {
    return (
      <Picker
        selectedValue={language}
        onValueChange={value => setLanguage(value)}
        style={[styles.picker, { marginLeft: 10 }]}
      >
        <Picker.Item value='en' label='en' />
        <Picker.Item value='ar' label='ar' />
      </Picker>
    )
  }

  const openTextEvent = (eventType: string) => {
    props.navigation.navigate('OpenTextEvent', { patientId: patient.id, visitId: visitId, eventType: eventType, language: language })
  }

  const handleSaveVisitType = () => {
    database.addEvent({
      id: uuid(),
      patient_id: patient.id,
      visit_id: visitId,
      event_type: EventTypes.VisitType,
      event_metadata: visitType
    }).then(() => console.log('visit type saved'))
  }

  return (
    <View style={styles.containerLeft}>
      {Header({
        action: () => existingVisit ?
          props.navigation.navigate('EventList', { language, patient }) :
          props.navigation.navigate('PatientView', { language, patient }), language, setLanguage
      })}

      {existingVisit ?
        null :
        <View style={styles.inputsContainer}>
          <View style={styles.inputRow}>
            <DatePicker
              style={styles.datePicker}
              date={visitDate}
              mode="date"
              placeholder={LocalizedStrings[language].selectDob}
              format="YYYY-MM-DD"
              minDate="1900-05-01"
              maxDate={today.toISOString().split('T')[0]}
              confirmBtnText={LocalizedStrings[language].confirm}
              cancelBtnText={LocalizedStrings[language].cancel}
              customStyles={{
                dateInput: {
                  alignItems: 'flex-start',
                  borderWidth: 0
                }
              }}
              androidMode='spinner'
              onDateChange={(date) => {
                setVisitDate(date)
                database.editVisitDate(visitId, moment(date).toISOString())
              }}
            />
          <View style={styles.inputRow}>
            {visitTypes(visitType, setVisitType, language)}
          </View>
          </View>
        </View>
      }
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={() => props.navigation.navigate('Vitals', { patientId: patient.id, visitId, userName, language })}>
          <View style={styles.actionIcon}>
            <Image source={require('../images/vitals.png')} style={{ width: 66, height: 31 }} />
          </View>
          <Text style={styles.actionText}>{LocalizedStrings[language].vitals}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => props.navigation.navigate('Examination', { patientId: patient.id, visitId, userName, language })}>
          <View style={styles.actionIcon}>
            <Image source={require('../images/stethoscope.png')} style={{ width: 43, height: 47 }} />
          </View>
          <Text style={styles.actionText}>{LocalizedStrings[language].examination}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => props.navigation.navigate('Medicine', { patientId: patient.id, visitId, userName, language })}>
          <View style={styles.actionIcon}>
            <Image source={require('../images/medicine.png')} style={{ width: 77, height: 38 }} />
          </View>
          <Text style={styles.actionText}>{LocalizedStrings[language].medicineDispensed}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={() => props.navigation.navigate('DmHistory', { patientId: patient.id, visitId, userName, language })}>
          <View style={styles.actionIcon}>
            <Image source={require('../images/medicalHistory.png')} style={{ width: 50, height: 50 }} />
          </View>
          <Text style={styles.actionText}>DM History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => props.navigation.navigate('ClinicalExamination', { patientId: patient.id, visitId, userName, language })}>
          <View style={styles.actionIcon}>
            <Image source={require('../images/stethoscope.png')} style={{ width: 50, height: 50 }} />
          </View>
          <Text style={styles.actionText}>Clinical Examination</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => props.navigation.navigate('EndocrinologistCases', { patientId: patient.id, visitId, userName, language })}>
          <View style={styles.actionIcon}>
            <Image source={require('../images/notes.png')} style={{ width: 50, height: 50 }} />
          </View>
          <Text style={styles.actionText}>Endocrinologist Cases</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={() => props.navigation.navigate('Referrals', { patientId: patient.id, visitId, userName, language })}>
          <View style={styles.actionIcon}>
            <Image source={require('../images/doctor.png')} style={{ width: 50, height: 50 }} />
          </View>
          <Text style={styles.actionText}>Referrals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => props.navigation.navigate('OphthalmologyExamination', { patientId: patient.id, visitId, userName, language })}>
          <View style={styles.actionIcon}>
            <Image source={require('../images/stethoscope.png')} style={{ width: 50, height: 50 }} />
          </View>
          <Text style={styles.actionText}>Ophthalmology Examination</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => props.navigation.navigate('FootCareExamination', { patientId: patient.id, visitId, userName, language })}>
          <View style={styles.actionIcon}>
            <Image source={require('../images/stethoscope.png')} style={{ width: 50, height: 50 }} />
          </View>
          <Text style={styles.actionText}>Foot Care Examination</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={() => props.navigation.navigate('LabInvestigation', { patientId: patient.id, visitId, userName, language })}>
          <View style={styles.actionIcon}>
            <Image source={require('../images/medicalHistory.png')} style={{ width: 50, height: 50 }} />
          </View>
          <Text style={styles.actionText}>Lab Data and Investigations</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => props.navigation.navigate('DiabetesEducation', { patientId: patient.id, visitId, userName, language })}>
          <View style={styles.actionIcon}>
            <Image source={require('../images/notes.png')} style={{ width: 50, height: 50 }} />
          </View>
          <Text style={styles.actionText}>DiabetesEducation</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewVisit;