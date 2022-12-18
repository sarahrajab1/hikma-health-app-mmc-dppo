import React, { useState, useEffect } from 'react';
import {
  View, Text, Image, TextInput, TouchableOpacity, Picker, TouchableWithoutFeedback, Button, ScrollView,
} from 'react-native';
import { v4 as uuid } from 'uuid';
import { database } from '../storage/Database';
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

const EditPatient = (props) => {
  const patient = props.navigation.getParam('patient');

  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));
  const [givenNameText, setGivenNameText] = useState(props.navigation.state.params.patient.given_name ? props.navigation.state.params.patient.given_name.content[language] : '');
  const [surnameText, setSurnameText] = useState(props.navigation.state.params.patient.surname ? props.navigation.state.params.patient.surname.content[language] : '');
  const [dob, setDob] = useState(props.navigation.state.params.patient.date_of_birth == 'None' ? '' : props.navigation.state.params.patient.date_of_birth);
  const [male, setMale] = useState(props.navigation.state.params.patient.sex === 'M');
  const [countryText, setCountryText] = useState(!!props.navigation.state.params.patient.country ? props.navigation.state.params.patient.country.content[language] : '');
  const [hometownText, setHometownText] = useState(props.navigation.state.params.patient.hometown || '');
  const [locality, setLocality] = useState(props.navigation.state.params.patient.locality || '');
  const [city, setCity] = useState(props.navigation.state.params.patient.city || '');
  const [haiVillage, setHaiVillage] = useState(props.navigation.state.params.patient.hai_village || '');
  const [blokNo, setBlokNo] = useState(props.navigation.state.params.patient.blok_no || '');
  const [houseNo, setHouseNo] = useState(props.navigation.state.params.patient.house_no || '');
  const [phone, setPhone] = useState(props.navigation.state.params.patient.phone || '');
  const [occupation, setOccupation] = useState(props.navigation.state.params.patient.occupation || '');
  const [insurance, setInsurance] = useState(props.navigation.state.params.patient.insurance || '');
  const [privateInsurance, setPrivateInsurance] = useState(props.navigation.state.params.patient.private_insurance || '');
  const [idNumber, setIdNumber] = useState(props.navigation.state.params.patient.id_number || '');
  const [recordNumber, setRecordNumber] = useState(props.navigation.state.params.patient.record_number || '');
  const [firstRegisterDate, setFirstRegisterDate] = useState(props.navigation.state.params.patient.first_register_date == 'None' ? '' : props.navigation.state.params.patient.first_register_date);
  const today = new Date();

  const editPatient = async () => {
    let givenNameId = patient.given_name ? patient.given_name.id : null;
    let surnameId = patient.surname ? patient.surname.id : null;
    let countryId = patient.country ? patient.country.id : null;
    let hometownId = patient.hometown ? patient.hometown.id : null;

    if (patient.given_name) {
      if (patient.given_name.content[language] !== undefined) {
        await database.editStringContent([{ language: language, content: givenNameText }], patient.given_name.id);
      } else {
        await database.saveStringContent([{ language: language, content: givenNameText }], patient.given_name.id);
      }
    } else {
      givenNameId = await database.saveStringContent([{ language: language, content: givenNameText }]);
    }

    if (patient.surname) {
      if (patient.surname.content[language] !== undefined) {
        await database.editStringContent([{ language: language, content: surnameText }], patient.surname.id);
      } else {
        await database.saveStringContent([{ language: language, content: surnameText }], patient.surname.id);
      }
    } else {
      surnameId = await database.saveStringContent([{ language: language, content: surnameText }]);
    }

    if (patient.country) {
      if (patient.country.content[language] !== undefined) {
        await database.editStringContent([{ language: language, content: countryText }], patient.country.id);
      } else {
        await database.saveStringContent([{ language: language, content: countryText }], patient.country.id);
      }
    } else {
      countryId = await database.saveStringContent([{ language: language, content: countryText }]);
    }

    if (patient.hometown) {
      if (patient.hometown.content[language] !== undefined) {
        await database.editStringContent([{ language: language, content: hometownText }], patient.hometown.id);
      } else {
        await database.saveStringContent([{ language: language, content: hometownText }], patient.hometown.id);
      }
    } else {
      hometownId = await database.saveStringContent([{ language: language, content: hometownText }]);
    }

    database.editPatient({
      id: patient.id,
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
      record_number: recordNumber,
    }).then((updatedPatient) => props.navigation.navigate('PatientView', {
      patient: updatedPatient,
      language: language,
    }));
  };

  useEffect(() => {
    setGivenNameText(patient.given_name ? patient.given_name.content[language] : '');
    setSurnameText(patient.surname ? patient.surname.content[language] : '');
    // setCountryText(patient.country ? patient.country.content[language] : '');
    setHometownText(patient.hometown ? patient.hometown.content[language] : '');
  }, [language]);

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
          onChangeText={setGivenNameText}
          value={givenNameText}
        />
      </View>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.inputs}
          placeholder={LocalizedStrings[language].surname}
          onChangeText={setSurnameText}
          value={surnameText}
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
        {states(hometownText, setHometownText, language)}
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
          onPress={() => editPatient()}
        />
      </View>
    </View>
    </ScrollView>
  );
};

export default EditPatient;
