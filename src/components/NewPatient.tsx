import React, { useState } from 'react';
import {
  View, Text, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Picker, Button, ScrollView,
} from 'react-native';
import { database } from '../storage/Database';
import { v4 as uuid } from 'uuid';
import styles from './Style';
import DatePicker from 'react-native-datepicker';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import { EventTypes } from '../enums/EventTypes';
import Header from './shared/Header';

export const states = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: 180 }]}
    >
      <Picker.Item value="" label="State" />
      <Picker.Item value="Khartoum" label="Khartoum" />
      <Picker.Item value="Northern" label="Northern" />
      <Picker.Item value="Red Sea" label="Red Sea" />
      <Picker.Item value="River Nile" label="River Nile" />
      <Picker.Item value="Kassala" label="Kassala" />
      <Picker.Item value="El Gazira" label="El Gazira" />
      <Picker.Item value="Gedaref" label="Gedaref" />
      <Picker.Item value="Sennar" label="Sennar" />
      <Picker.Item value="White Nile" label="White Nile" />
      <Picker.Item value="Blue Nile" label="Blue Nile" />
      <Picker.Item value="North Kordofan" label="North Kordofan" />
      <Picker.Item value="South Kordofan" label="South Kordofan" />
      <Picker.Item value="West Kordofan" label="West Kordofan" />
      <Picker.Item value="East Darfur" label="East Darfur" />
      <Picker.Item value="North Darfur" label="North Darfur" />
      <Picker.Item value="South Darfur" label="South Darfur" />
      <Picker.Item value="Central Darfur" label="Central Darfur" />
      <Picker.Item value="West Darfur" label="West Darfur" />
    </Picker>
  );
};

export const localityDropDown = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: 180 }]}
    >
      <Picker.Item value="" label="Locality" />
      <Picker.Item value="Khartoum" label="Khartoum" />
      <Picker.Item value="Northern" label="Northern" />
      <Picker.Item value="Red Sea" label="Red Sea" />
      <Picker.Item value="River Nile" label="River Nile" />
      <Picker.Item value="Kassala" label="Kassala" />
      <Picker.Item value="El Gazira" label="El Gazira" />
      <Picker.Item value="Gedaref" label="Gedaref" />
      <Picker.Item value="Sennar" label="Sennar" />
      <Picker.Item value="White Nile" label="White Nile" />
      <Picker.Item value="Blue Nile" label="Blue Nile" />
      <Picker.Item value="North Kordofan" label="North Kordofan" />
      <Picker.Item value="South Kordofan" label="South Kordofan" />
      <Picker.Item value="West Kordofan" label="West Kordofan" />
      <Picker.Item value="East Darfur" label="East Darfur" />
      <Picker.Item value="North Darfur" label="North Darfur" />
      <Picker.Item value="South Darfur" label="South Darfur" />
      <Picker.Item value="Central Darfur" label="Central Darfur" />
      <Picker.Item value="West Darfur" label="West Darfur" />
    </Picker>
  );
};

export const haiVillageDropDown = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: 180 }]}
    >
      <Picker.Item value="" label="Hai / Village" />
      <Picker.Item value="Hai" label="Hai" />
      <Picker.Item value="Village" label="Village" />
     </Picker>
   );
 };

 export const insuranceDropDown = (value, action, language) => {
   return (
     <Picker
       selectedValue={value}
       onValueChange={value => action(value)}
       style={[styles.picker, { width: 180 }]}
     >
       <Picker.Item value="" label="Insurance" />
       <Picker.Item value="None" label="None" />
       <Picker.Item value="Governments" label="Governments" />
       <Picker.Item value="Private" label="Private" />
      </Picker>
    );
  };

const NewPatient = (props) => {
  const [givenName, setGivenName] = useState('');
  const [surname, setSurname] = useState('');
  const [dob, setDob] = useState('');
  const [male, setMale] = useState(false);
  const [country, setCountry] = useState('');
  const [hometown, setHometown] = useState('');
  const [locality, setLocality] = useState('');
  const [city, setCity] = useState('');
  const [blokNo, setBlokNo] = useState('');
  const [occupation, setOccupation] = useState('');
  const [insurance, setInsurance] = useState('');
  const [privateInsurance, setPrivateInsurance] = useState('');
  const [houseNo, setHouseNo] = useState('');
  const [haiVillage, setHaiVillage] = useState('');
  const [phone, setPhone] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [recordNumber, setRecordNumber] = useState('');
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));
  const [firstRegisterDate, setFirstRegisterDate] = useState(new Date().toISOString().split('T')[0]);
  const [camp, setCamp] = useState('');

  const today = new Date();
  const [patientId] = useState(uuid().replace(/-/g, ''));

  const handleSaveCamp = (campName: string) => {
    database.addEvent({
      id: uuid(),
      patient_id: patientId,
      visit_id: null,
      event_type: EventTypes.Camp,
      event_metadata: campName
    }).then(() => console.log('camp saved'))
  }

  const addPatient = async () => {
    const givenNameId = await database.saveStringContent([{ language: language, content: givenName }]);
    const surnameId = await database.saveStringContent([{ language: language, content: surname }]);
    const countryId = await database.saveStringContent([{ language: language, content: country }])
    const hometownId = await database.saveStringContent([{ language: language, content: hometown }])
//     const localityId = await database.saveStringContent([{ language: language, content: locality }])
//     const cityId = await database.saveStringContent([{ language: language, content: city }])
//     const occupationId = await database.saveStringContent([{ language: language, content: occupation }])
//     const privateInsuranceId = await database.saveStringContent([{ language: language, content: privateInsurance }])

    database.addPatient({
      id: patientId,
      given_name: givenNameId,
      surname: surnameId,
      date_of_birth: dob,
      country: countryId,
      hometown: hometownId,
      locality: locality,
      hai_village: haiVillage,
      city: city,
      blok_no: blokNo,
      house_no: houseNo,
      phone: phone,
      occupation: occupation,
      insurance: insurance,
      private_insurance: privateInsurance,
      id_number: idNumber,
      first_register_date: firstRegisterDate,
      sex: male ? 'M' : 'F',
      record_number: recordNumber
    }).then(() => {
      if (!!camp) {
        handleSaveCamp(camp)
      }
      props.navigation.navigate('PatientList', {
        reloadPatientsToggle: !props.navigation.state.params.reloadPatientsToggle,
        language: language,
      });
    });
  };

  function RadioButton(props) {
    return (
      <TouchableOpacity onPress={() => setMale(!male)}>
        <View style={styles.outerRadioButton}>
          {props.selected ? <View style={styles.selectedRadioButton} /> : null}
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.container}>
      {Header({ action: () => props.navigation.navigate('PatientList', { language }), language, setLanguage })}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.inputs}
          placeholder={LocalizedStrings[language].firstName}
          onChangeText={(text) => setGivenName(text)}
          value={givenName}
        />
      </View>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.inputs}
          placeholder={LocalizedStrings[language].surname}
          onChangeText={(text) => setSurname(text)}
          value={surname}
        />
      </View>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.inputs}
          placeholder="ID Number"
          onChangeText={(text) => setIdNumber(text)}
          value={idNumber}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Record Number"
          onChangeText={(text) => setRecordNumber(text)}
          value={recordNumber}
        />
      </View>
      <View style={styles.inputRow}>
        <DatePicker
          style={styles.datePicker}
          date={dob}
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
              borderWidth: 0,
            },
          }}
          androidMode="spinner"
          onDateChange={(date) => setDob(date)}
        />
        <View >
          <Text style={[{ color: '#FFFFFF' }]}>{LocalizedStrings[language].gender}</Text>
          <View style={[{ flexDirection: 'row' }]}>
            {RadioButton({ selected: male })}<Text style={[{ color: '#FFFFFF', paddingHorizontal: 5 }]}>M</Text>
            {RadioButton({ selected: !male })}<Text style={[{ color: '#FFFFFF', paddingHorizontal: 5 }]}>F</Text>
          </View>
        </View>
      </View>
      <View style={styles.inputRow}>
        {states(hometown, setHometown, language)}
        {localityDropDown(locality, setLocality, language)}
      </View>
      <View style={styles.inputRow}>
         <TextInput
           style={styles.inputs}
           placeholder="City"
           onChangeText={(text) => setCity(text)}
           value={city}
         />
        {haiVillageDropDown(haiVillage, setHaiVillage, language)}
      </View>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.inputs}
          placeholder="Blok No."
          onChangeText={(text) => setBlokNo(text)}
          value={blokNo}
        />
        <TextInput
          style={styles.inputs}
          placeholder="House No."
          onChangeText={(text) => setHouseNo(text)}
          value={houseNo}
        />
      </View>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.inputs}
          placeholder={LocalizedStrings[language].phone}
          onChangeText={(text) => setPhone(text)}
          value={phone}
        />
      </View>
      <View style={styles.inputRow}>
        <DatePicker
          style={styles.datePicker}
          date={firstRegisterDate}
          mode="date"
          placeholder="First Register Date"
          format="YYYY-MM-DD"
          minDate="1900-05-01"
          maxDate={today.toISOString().split('T')[0]}
          confirmBtnText={LocalizedStrings[language].confirm}
          cancelBtnText={LocalizedStrings[language].cancel}
          customStyles={{
            dateInput: {
              alignItems: 'flex-start',
              borderWidth: 0,
            },
          }}
          androidMode="spinner"
          onDateChange={(date) => setFirstRegisterDate(date)}
        />
       </View>
       <View style={styles.inputRow}>
         <TextInput
           style={styles.inputs}
           placeholder="Occupation"
           onChangeText={(text) => setOccupation(text)}
           value={occupation}
         />
         {insuranceDropDown(insurance, setInsurance, language)}
       </View>
       <View style={styles.inputRow}>
        <TextInput
          style={styles.inputs}
          placeholder="Private Insurance"
          onChangeText={(text) => setPrivateInsurance(text)}
          value={privateInsurance}
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <Button
          title={LocalizedStrings[language].save}
          color={'#F77824'}
          onPress={() => addPatient()}
        />
      </View>
    </View>
    </ScrollView>
  );
};

export default NewPatient;
