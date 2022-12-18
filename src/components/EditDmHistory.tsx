import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, TouchableOpacity, Picker
} from 'react-native';

import { database } from "../storage/Database";
import styles from './Style';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import Header from './shared/Header';
import radioButtons from './shared/RadioButtons';
import DatePicker from 'react-native-datepicker';

export const DiabetesType = (value, action, language) => {
  return (
    <View style={styles.pickerView}>
      <Picker
        selectedValue={value}
        onValueChange={value => action(value)}
        style={[styles.inputPicker, { width: 180 }]}
      >
        <Picker.Item value='' label="" />
        <Picker.Item value='T1D' label='T1D' />
        <Picker.Item value='T2D' label='T2D' />
        <Picker.Item value='GDM' label='GDM' />
        <Picker.Item value='other' label='Other' />
      </Picker>
    </View>
  )
}

export const Management = (value, action, language) => {
  return (
    <View style={styles.pickerView}>
      <Picker
        selectedValue={value}
        onValueChange={value => action(value)}
        style={[styles.inputPicker, { width: 180 }]}
      >
        <Picker.Item value='' label="" />
        <Picker.Item value='Diet Control' label='Diet Control' />
        <Picker.Item value='Insulin' label='Insulin' />
        <Picker.Item value='Tablet' label='Tablet' />
        <Picker.Item value='InsulinAndTablet' label="Insulin & Tablet" />
      </Picker>
    </View>
  )
}

export const FamilyHistory = (value, action, language) => {
  return (
    <View style={styles.pickerView}>
      <Picker
        selectedValue={value}
        onValueChange={value => action(value)}
        style={[styles.inputPicker, { width: 180 }]}
      >
        <Picker.Item value='' label='' />
        <Picker.Item value='no' label='No' />
        <Picker.Item value='Mother' label='mother' />
        <Picker.Item value='Father' label='Father' />
        <Picker.Item value='Siblings' label="Siblings" />
      </Picker>
    </View>
  )
}

export const Smoker = (value, action, language) => {
  return (
    <View style={styles.pickerView}>
      <Picker
        selectedValue={value}
        onValueChange={value => action(value)}
        style={[styles.inputPicker, { width: 180 }]}
      >
        <Picker.Item value='' label='' />
        <Picker.Item value='never' label="Never" />
        <Picker.Item value='current' label='Current' />
        <Picker.Item value='stopped' label='Stopped' />
      </Picker>
    </View>
  )
}

export const Alcohol = (value, action, language) => {
  return (
    <View style={styles.pickerView}>
      <Picker
        selectedValue={value}
        onValueChange={value => action(value)}
        style={[styles.inputPicker, { width: 180 }]}
      >
        <Picker.Item value='' label='' />
        <Picker.Item value='never' label='Never' />
        <Picker.Item value='current' label='Current' />
        <Picker.Item value='stopped' label='Stopped' />
      </Picker>
    </View>
  )
}

export const CardiacProblems = (value, action, language) => {
  return (
    <View style={styles.pickerView}>
      <Picker
        selectedValue={value}
        onValueChange={value => action(value)}
        style={[styles.inputPicker, { width: 180 }]}
      >
        <Picker.Item value='' label='' />
        <Picker.Item value='No' label="No" />
        <Picker.Item value='Ischemic heart disease' label='Ischemic heart disease' />
        <Picker.Item value='Congestive heart failure' label='Congestive heart failure' />
        <Picker.Item value='others' label='Others' />
      </Picker>
    </View>
  )
}

export const HfSign = (value, action, language) => {
  return (
    <View style={styles.pickerView}>
      <Picker
        selectedValue={value}
        onValueChange={value => action(value)}
        style={[styles.inputPicker, { width: 180 }]}
      >
        <Picker.Item value='' label='' />
        <Picker.Item value='Absent' label='Absent' />
        <Picker.Item value='Present' label='Present' />
      </Picker>
    </View>
  )
}

export const Hypertension = (value, action, language) => {
  return (
    <View style={styles.pickerView}>
      <Picker
        selectedValue={value}
        onValueChange={value => action(value)}
        style={[styles.inputPicker, { width: 180 }]}
      >
        <Picker.Item value='' label='' />
        <Picker.Item value='Absent' label='Absent' />
        <Picker.Item value='Present' label='Present' />
      </Picker>
    </View>
  )
}

export const RenalProblem = (value, action, language) => {
  return (
    <View style={styles.pickerView}>
      <Picker
        selectedValue={value}
        onValueChange={value => action(value)}
        style={[styles.inputPicker, { width: 180 }]}
      >
        <Picker.Item value='' label='' />
        <Picker.Item value='No' label='No' />
        <Picker.Item value='Proteinuria  Raised serum creatinine Dialysis' label='Proteinuria  Raised serum creatinine Dialysis' />
        <Picker.Item value='History of transplantation' label='History of transplantation' />
      </Picker>
    </View>
  )
}


export const EyeProblem = (value, action, language) => {
  return (
    <View style={styles.pickerView}>
      <Picker
        selectedValue={value}
        onValueChange={value => action(value)}
        style={[styles.inputPicker, { width: 180 }]}
      >
        <Picker.Item value='' label="" />
        <Picker.Item value='No' label='No' />
        <Picker.Item value='Cataract' label='Cataract' />
        <Picker.Item value='Retinopathy' label='Retinopathy' />
        <Picker.Item value='Other' label='Other' />
      </Picker>
    </View>
  )
}


const EditDmHistory = (props) => {
  const event = props.navigation.getParam('event');
  const userName = props.navigation.getParam('userName');
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));

  const [diagnosisAge, setDiagnosisAge] = useState(null);
  const [dmDuration, setDmDuration] = useState(null);
  const [diabetesType, setDiabetesType] = useState(null);
  const [management, setManagement] = useState(null);
  const [familyHistory, setFamilyHistory] = useState(null);
  const [smoker, setSmoker] = useState(null);
  const [alcohol, setAlcohol] = useState(null);
  const [cardiacProblem, setCardiacProblem] = useState(null);
  const [hfSign, setHfSign] = useState(null);
  const [hypertension, setHypertension] = useState(null);
  const [renalProblem, setRenalProblem] = useState(null);
  const [eyeProblem, setEyeProblem] = useState(null);
  const [hypoglycemiaRequiring, setHypoglycemiaRequiring] = useState(null);
  const [dka, setDka] = useState(null);
  const [myocardial, setMyocardial] = useState(null);
  const [cerebralStroke, setCerebralStroke] = useState(null);
  const [limbAmputation, setLimbAmputation] = useState(null);
  const [erectileDysfunction, setErectileDysfunction] = useState(null);
  const [retinalExamination, setRetinalExamination] = useState(null);
  const [retinalExaminationDate, setRetinalExaminationDate] = useState(null);

  useEffect(() => {
    if (!!event.event_metadata) {
      const metadataObj = JSON.parse(event.event_metadata)
      setDiagnosisAge(metadataObj.diagnosisAge)
      setDmDuration(metadataObj.dmDuration)
      setManagement(metadataObj.management)
      setFamilyHistory(metadataObj.familyHistory)
      setSmoker(metadataObj.smoker)
      setAlcohol(metadataObj.alcohol)
      setCardiacProblem(metadataObj.cardiacProblem)
      setHfSign(metadataObj.hfSign)
      setHypertension(metadataObj.hypertension)
      setRenalProblem(metadataObj.renalProblem)
      setEyeProblem(metadataObj.eyeProblem)
      setHypoglycemiaRequiring(metadataObj.hypoglycemiaRequiring)
      setDka(metadataObj.dka)
      setMyocardial(metadataObj.myocardial)
      setCerebralStroke(metadataObj.cerebralStroke)
      setLimbAmputation(metadataObj.limbAmputation)
      setRetinalExamination(metadataObj.retinalExamination)
      setRetinalExaminationDate(metadataObj.retinalExaminationDate)
    }
  }, [props])

  const submit = async () => {
    database.editEvent(
      event.id,
      JSON.stringify({
        doctor: userName,
        diagnosisAge,
        dmDuration,
        diabetesType,
        management,
        familyHistory,
        smoker,
        alcohol,
        cardiacProblem,
        hfSign,
        hypertension,
        renalProblem,
        eyeProblem,
        hypoglycemiaRequiring,
        dka,
        myocardial,
        cerebralStroke,
        limbAmputation,
        erectileDysfunction,
        retinalExamination
      })
    ).then((response) => props.navigation.navigate('EventList', { events: response, language }))
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.containerLeft}>
        {Header({ action: () => props.navigation.navigate('NewVisit', { language }), language, setLanguage })}

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'stretch', }}>
          <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>DM History</Text>
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>Age at diagnosis of diabetes</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={styles.inputs}
            onChangeText={(text) => setDiagnosisAge(text)}
            value={diagnosisAge}
          />
        </View>
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>Duration D.M</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={styles.inputs}
            onChangeText={(text) => setDmDuration(text)}
            value={dmDuration}
          />
        </View>
        <View style={[styles.responseRow, { flexDirection: 'row', flex: 1, justifyContent: 'space-between' }]}>
          <Text style={{ color: '#FFFFFF'}}>Type of diabetes</Text>
          {DiabetesType(diabetesType, setDiabetesType, language)}
        </View>
        <View style={[styles.responseRow, { flexDirection: 'row', flex: 1, justifyContent: 'space-between' }]}>
          <Text style={{ color: '#FFFFFF'}}>Management</Text>
          {Management(management, setManagement, language)}
        </View>
        <View style={[styles.responseRow, { flexDirection: 'row', flex: 1, justifyContent: 'space-between' }]}>
          <Text style={{ color: '#FFFFFF'}}>Family History</Text>
          {FamilyHistory(familyHistory, setFamilyHistory, language)}
        </View>
        <View style={[styles.responseRow, { flexDirection: 'row', flex: 1, justifyContent: 'space-between' }]}>
          <Text style={{ color: '#FFFFFF'}}>Smoker</Text>
          {Smoker(smoker, setSmoker, language)}
        </View>
        <View style={[styles.responseRow, { flexDirection: 'row', flex: 1, justifyContent: 'space-between' }]}>
          <Text style={{ color: '#FFFFFF'}}>Alcohol</Text>
          {Alcohol(alcohol, setAlcohol, language)}
        </View>
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>Associated illness: </Text>
        </View>
        <View style={[styles.responseRow, { flexDirection: 'row', flex: 1, justifyContent: 'space-between' }]}>
          <Text style={{ color: '#FFFFFF'}}>Cardiac Problems</Text>
          {CardiacProblems(cardiacProblem, setCardiacProblem, language)}
        </View>
        <View style={[styles.responseRow, { flexDirection: 'row', flex: 1, justifyContent: 'space-between' }]}>
          <Text style={{ color: '#FFFFFF'}}>H.F Sign</Text>
          {HfSign(hfSign, setHfSign, language)}
        </View>
        <View style={[styles.responseRow, { flexDirection: 'row', flex: 1, justifyContent: 'space-between' }]}>
          <Text style={{ color: '#FFFFFF'}}>Hypertension</Text>
          {Hypertension(hypertension, setHypertension, language)}
        </View>
        <View style={[styles.responseRow, { flexDirection: 'row', flex: 1, justifyContent: 'space-between' }]}>
          <Text style={{ color: '#FFFFFF'}}>Renal Problem</Text>
          {RenalProblem(renalProblem, setRenalProblem, language)}
        </View>
        <View style={[styles.responseRow, { flexDirection: 'row', flex: 1, justifyContent: 'space-between' }]}>
          <Text style={{ color: '#FFFFFF'}}>Eye Problem</Text>
          {EyeProblem(eyeProblem, setEyeProblem, language)}
        </View>
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>Specific relevant history:</Text>
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: hypoglycemiaRequiring, action: setHypoglycemiaRequiring, prompt: 'Hypoglycemia requiring assistance:', language })}
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: dka, action: setDka, prompt: 'D.K.A', language })}
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: myocardial, action: setMyocardial, prompt: 'Myocardial infarction:', language })}
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: cerebralStroke, action: setCerebralStroke, prompt: 'Cerebral Stroke:', language })}
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: limbAmputation, action: setLimbAmputation, prompt: 'Lower limb Amputation:', language })}
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: erectileDysfunction, action: setErectileDysfunction, prompt: 'Erectile Dysfunction: ', language })}
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: retinalExamination, action: setRetinalExamination, prompt: 'Retinal examination: ', language })}
        </View>
        <View style={styles.inputRow}>
          <DatePicker
            style={styles.datePicker}
            date={retinalExaminationDate}
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
            onDateChange={(date) => setRetinalExaminationDate(date)}
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

export default EditDmHistory;
