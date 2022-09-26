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

export const Icd1 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Certain infectious or parasitic diseases" />
      <Picker.Item value='Gastroenteritis or colitis of infectious origin' label="Gastroenteritis or colitis of infectious origin" />
      <Picker.Item value='Predominantly sexually transmitted infections' label='Predominantly sexually transmitted infections' />
      <Picker.Item value='Mycobacterial diseases' label='Mycobacterial diseases' />
      <Picker.Item value='Certain staphylococcal or streptococcal diseases' label='Certain staphylococcal or streptococcal diseases' />
      <Picker.Item value='Pyogenic bacterial infections of the skin or subcutaneous tissues' label='Pyogenic bacterial infections of the skin or subcutaneous tissues' />
      <Picker.Item value='Certain zoonotic bacterial diseases' label='Certain zoonotic bacterial diseases' />
      <Picker.Item value='Other bacterial diseases' label='Other bacterial diseases' />
      <Picker.Item value='Human immunodeficiency virus disease' label='Human immunodeficiency virus disease' />
      <Picker.Item value='Viral infections of the central nervous system' label='Viral infections of the central nervous system' />
      <Picker.Item value='Non-viral and unspecified infections of the central nervous system' label='Non-viral and unspecified infections of the central nervous system' />
      <Picker.Item value='Dengue' label='Dengue' />
      <Picker.Item value='Certain arthropod-borne viral fevers' label='Certain arthropod-borne viral fevers' />
      <Picker.Item value='Certain zoonotic viral diseases' label='Certain zoonotic viral diseases' />
      <Picker.Item value='Certain other viral diseases' label='Certain other viral diseases' />
      <Picker.Item value='Influenza' label='Influenza' />
      <Picker.Item value='Viral hepatitis' label='Viral hepatitis' />
      <Picker.Item value='Viral infections characterised by skin or mucous membrane lesions' label='Viral infections characterised by skin or mucous membrane lesions' />
      <Picker.Item value='Mycoses' label='Mycoses' />
      <Picker.Item value='Parasitic diseases' label='Parasitic diseases' />
      <Picker.Item value='Sepsis' label='Sepsis' />
      <Picker.Item value='1G60 Certain other disorders of infectious origin' label='1G60 Certain other disorders of infectious origin' />
      <Picker.Item value='Sequelae of infectious diseases' label='Sequelae of infectious diseases' />
      <Picker.Item value='Infections of the fetus or newborn' label='Infections of the fetus or newborn' />
      <Picker.Item value='Human prion diseases' label='Human prion diseases' />
      <Picker.Item value='CA40 Pneumonia' label='CA40 Pneumonia' />
      <Picker.Item value='1H0Z Infection, unspecified' label='1H0Z Infection, unspecified' />
    </Picker>
  )
}

export const Icd2 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Neoplasms" />
      <Picker.Item value='Neoplasms of brain or central nervous system' label="Neoplasms of brain or central nervous system" />
      <Picker.Item value='Neoplasms of haematopoietic or lymphoid tissues' label='Neoplasms of haematopoietic or lymphoid tissues' />
      <Picker.Item value='Malignant neoplasms, except primary neoplasms of lymphoid, haematopoietic, central nervous system or related tissues' label='Malignant neoplasms, except primary neoplasms of lymphoid, haematopoietic, central nervous system or related tissues' />
      <Picker.Item value='In situ neoplasms, except of lymphoid, haematopoietic, central nervous system or related tissues' label='In situ neoplasms, except of lymphoid, haematopoietic, central nervous system or related tissues' />
      <Picker.Item value='Benign neoplasms, except of lymphoid, haematopoietic, central nervous system or related tissues' label='Benign neoplasms, except of lymphoid, haematopoietic, central nervous system or related tissues' />
      <Picker.Item value='Neoplasms of uncertain behaviour, except of lymphoid, haematopoietic, central nervous system or related tissues' label='Neoplasms of uncertain behaviour, except of lymphoid, haematopoietic, central nervous system or related tissues' />
      <Picker.Item value='Neoplasms of unknown behaviour, except of lymphoid, haematopoietic, central nervous system or related tissues' label='Neoplasms of unknown behaviour, except of lymphoid, haematopoietic, central nervous system or related tissues' />
      <Picker.Item value='Inherited cancer-predisposing syndromes' label='Inherited cancer-predisposing syndromes' />
    </Picker>
  )
}

export const Icd3 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Diseases of the blood or blood-forming organs" />
      <Picker.Item value='Anaemias or other erythrocyte disorders' label="Anaemias or other erythrocyte disorders" />
      <Picker.Item value='Coagulation defects, purpura or other haemorrhagic or related conditions' label='Coagulation defects, purpura or other haemorrhagic or related conditions' />
      <Picker.Item value='Diseases of spleen' label='Diseases of spleen' />
      <Picker.Item value='Neoplasms of haematopoietic or lymphoid tissues' label='Neoplasms of haematopoietic or lymphoid tissues' />
      <Picker.Item value='Symptoms, signs or clinical findings of blood, blood-forming organs, or the immune system' label='Symptoms, signs or clinical findings of blood, blood-forming organs, or the immune system' />
      <Picker.Item value='Inherited cancer-predisposing syndromes' label='Inherited cancer-predisposing syndromes' />
      <Picker.Item value='3C0Y Other specified diseases of the blood or blood-forming organs' label='3C0Y Other specified diseases of the blood or blood-forming organs' />
      <Picker.Item value='3C0Z Diseases of the blood or blood-forming organs, unspecified' label='3C0Z Diseases of the blood or blood-forming organs, unspecified' />
    </Picker>
  )
}

export const Icd4 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Diseases of the immune system" />
      <Picker.Item value='Primary immunodeficiencies' label="Primary immunodeficiencies" />
      <Picker.Item value='4A20 Acquired immunodeficiencies' label='4A20 Acquired immunodeficiencies' />
      <Picker.Item value='Nonorgan specific systemic autoimmune disorders' label='Nonorgan specific systemic autoimmune disorders' />
      <Picker.Item value='Autoinflammatory disorders' label='Autoinflammatory disorders' />
      <Picker.Item value='Allergic or hypersensitivity conditions' label='Allergic or hypersensitivity conditions' />
      <Picker.Item value='Immune system disorders involving white cell lineages' label='Immune system disorders involving white cell lineages' />
      <Picker.Item value='Certain disorders involving the immune system' label='Certain disorders involving the immune system' />
      <Picker.Item value='4B40 Diseases of thymus' label='4B40 Diseases of thymus' />
      <Picker.Item value='Organ specific autoimmune disorders' label='Organ specific autoimmune disorders' />
      <Picker.Item value='Symptoms, signs or clinical findings of blood, blood-forming organs, or the immune system' label='Symptoms, signs or clinical findings of blood, blood-forming organs, or the immune system' />
      <Picker.Item value='4B4Y Other specified diseases of the immune system' label='4B4Y Other specified diseases of the immune system' />
      <Picker.Item value='4B4Z Diseases of the immune system, unspecified' label='4B4Z Diseases of the immune system, unspecified' />
    </Picker>
  )
}

export const Icd5 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Endocrine, nutritional or metabolic diseases" />
      <Picker.Item value='Endocrine diseases' label="Endocrine diseases" />
      <Picker.Item value='Nutritional disorders' label='Nutritional disorders' />
      <Picker.Item value='Metabolic disorders' label='Metabolic disorders' />
      <Picker.Item value='Postprocedural endocrine or metabolic disorders' label='Postprocedural endocrine or metabolic disorders' />
      <Picker.Item value='Symptoms, signs or clinical findings of endocrine, nutritional or metabolic diseases' label='Symptoms, signs or clinical findings of endocrine, nutritional or metabolic diseases' />
    </Picker>
  )
}

export const Icd6 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Mental, behavioural or neurodevelopmental disorders" />
      <Picker.Item value='Neurodevelopmental disorders' label="Neurodevelopmental disorders" />
      <Picker.Item value='Schizophrenia or other primary psychotic disorders' label='Schizophrenia or other primary psychotic disorders' />
      <Picker.Item value='Catatonia' label='Catatonia' />
      <Picker.Item value='Mood disorders' label='Mood disorders' />
      <Picker.Item value='Anxiety or fear-related disorders' label='Anxiety or fear-related disorders' />
      <Picker.Item value='Obsessive-compulsive or related disorders' label='Obsessive-compulsive or related disorders' />
      <Picker.Item value='Disorders specifically associated with stress' label='Disorders specifically associated with stress' />
      <Picker.Item value='Dissociative disorders' label='Dissociative disorders' />
      <Picker.Item value='Feeding or eating disorders' label='Feeding or eating disorders' />
      <Picker.Item value='Elimination disorders' label='Elimination disorders' />
      <Picker.Item value='Disorders of bodily distress or bodily experience' label='Disorders of bodily distress or bodily experience' />
      <Picker.Item value='Disorders due to substance use or addictive behaviours' label='Disorders due to substance use or addictive behaviours' />
      <Picker.Item value='Impulse control disorders' label='Impulse control disorders' />
      <Picker.Item value='Disruptive behaviour or dissocial disorders' label='Disruptive behaviour or dissocial disorders' />
      <Picker.Item value='Personality disorders and related traits' label='Personality disorders and related traits' />
      <Picker.Item value='Paraphilic disorders' label='Paraphilic disorders' />
      <Picker.Item value='Factitious disorders' label='Factitious disorders' />
      <Picker.Item value='Neurocognitive disorders' label='Neurocognitive disorders' />
      <Picker.Item value='Mental or behavioural disorders associated with pregnancy, childbirth or the puerperium' label='Mental or behavioural disorders associated with pregnancy, childbirth or the puerperium' />
      <Picker.Item value='6E40 Psychological or behavioural factors affecting disorders or diseases classified elsewhere' label='6E40 Psychological or behavioural factors affecting disorders or diseases classified elsewhere' />
      <Picker.Item value='Secondary mental or behavioural syndromes associated with disorders or diseases classified elsewhere' label='Secondary mental or behavioural syndromes associated with disorders or diseases classified elsewhere' />
      <Picker.Item value='07 Sleep-wake disorders' label='07 Sleep-wake disorders' />
      <Picker.Item value='Sexual dysfunctions' label='Sexual dysfunctions' />
      <Picker.Item value='Gender incongruence' label='Gender incongruence' />
      <Picker.Item value='6E8Y Other specified mental, behavioural or neurodevelopmental disorders' label='6E8Y Other specified mental, behavioural or neurodevelopmental disorders' />
      <Picker.Item value='6E8Z Mental, behavioural or neurodevelopmental disorders, unspecified' label='6E8Z Mental, behavioural or neurodevelopmental disorders, unspecified' />
    </Picker>
  )
}

export const Icd7 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Sleep-wake disorders" />
      <Picker.Item value='Insomnia disorders' label="Insomnia disorders" />
      <Picker.Item value='Hypersomnolence disorders' label='Hypersomnolence disorders' />
      <Picker.Item value='Sleep-related breathing disorders' label='Sleep-related breathing disorders' />
      <Picker.Item value='Circadian rhythm sleep-wake disorders' label='Circadian rhythm sleep-wake disorders' />
      <Picker.Item value='Sleep-related movement disorders' label='Sleep-related movement disorders' />
      <Picker.Item value='Parasomnia disorders' label='Parasomnia disorders' />
      <Picker.Item value='7B2Y Other specified sleep-wake disorders' label="7B2Y Other specified sleep-wake disorders" />
      <Picker.Item value='7B2Z Sleep-wake disorders, unspecified' label="7B2Z Sleep-wake disorders, unspecified" />
    </Picker>
  )
}

export const Icd8 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Diseases of the nervous system" />
      <Picker.Item value='Movement disorders' label="Movement disorders" />
      <Picker.Item value='Disorders with neurocognitive impairment as a major feature' label='Disorders with neurocognitive impairment as a major feature' />
      <Picker.Item value='Multiple sclerosis or other white matter disorders' label='Multiple sclerosis or other white matter disorders' />
      <Picker.Item value='Epilepsy or seizures' label='Epilepsy or seizures' />
      <Picker.Item value='Headache disorders' label='Headache disorders' />
      <Picker.Item value='Cerebrovascular diseases' label='Cerebrovascular diseases' />
      <Picker.Item value='Spinal cord disorders excluding trauma' label='Spinal cord disorders excluding trauma' />
      <Picker.Item value='Motor neuron diseases or related disorders' label='Motor neuron diseases or related disorders' />
      <Picker.Item value='Disorders of nerve root, plexus or peripheral nerves' label='Disorders of nerve root, plexus or peripheral nerves' />
      <Picker.Item value='Diseases of neuromuscular junction or muscle' label='Diseases of neuromuscular junction or muscle' />
      <Picker.Item value='Cerebral palsy' label='Cerebral palsy' />
      <Picker.Item value='Nutritional or toxic disorders of the nervous system' label='Nutritional or toxic disorders of the nervous system' />
      <Picker.Item value='Disorders of cerebrospinal fluid pressure or flow' label='Disorders of cerebrospinal fluid pressure or flow' />
      <Picker.Item value='Disorders of autonomic nervous system' label='Disorders of autonomic nervous system' />
      <Picker.Item value='Human prion diseases' label='Human prion diseases' />
      <Picker.Item value='Disorders of consciousness' label='Disorders of consciousness' />
      <Picker.Item value='Other disorders of the nervous system' label='Other disorders of the nervous system' />
      <Picker.Item value='Postprocedural disorders of the nervous system' label='Postprocedural disorders of the nervous system' />
      <Picker.Item value='Injuries of the nervous system' label='Injuries of the nervous system' />
      <Picker.Item value='Neoplasms of the nervous system' label='Neoplasms of the nervous system' />
      <Picker.Item value='Structural developmental anomalies of the nervous system' label='Structural developmental anomalies of the nervous system' />
      <Picker.Item value='LD20 Syndromes with central nervous system anomalies as a major feature' label='LD20 Syndromes with central nervous system anomalies as a major feature' />
      <Picker.Item value='Non-viral and unspecified infections of the central nervous system' label='Non-viral and unspecified infections of the central nervous system' />
      <Picker.Item value='Symptoms, signs or clinical findings of the nervous system' label='Symptoms, signs or clinical findings of the nervous system' />
      <Picker.Item value='Paralytic symptoms' label='Paralytic symptoms' />
      <Picker.Item value='6B60 Dissociative neurological symptom disorder' label='6B60 Dissociative neurological symptom disorder' />
      <Picker.Item value='JB64.3 Diseases of the nervous system complicating pregnancy, childbirth or the puerperium' label='JB64.3 Diseases of the nervous system complicating pregnancy, childbirth or the puerperium' />
      <Picker.Item value='8E7Y Other specified diseases of the nervous system' label='8E7Y Other specified diseases of the nervous system' />
      <Picker.Item value='8E7Z Diseases of the nervous system, unspecified' label='8E7Z Diseases of the nervous system, unspecified' />
    </Picker>
  )
}

export const Icd9 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Diseases of the visual system" />
      <Picker.Item value='Disorders of the ocular adnexa or orbit' label="Disorders of the ocular adnexa or orbit" />
      <Picker.Item value='Disorders of the eyeball - anterior segment' label='Disorders of the eyeball - anterior segment' />
      <Picker.Item value='Disorders of the eyeball - posterior segment' label='Disorders of the eyeball - posterior segment' />
      <Picker.Item value='Disorders of the eyeball affecting both anterior and posterior segments' label='Disorders of the eyeball affecting both anterior and posterior segments' />
      <Picker.Item value='Disorders of the visual pathways or centres' label='Disorders of the visual pathways or centres' />
      <Picker.Item value='Glaucoma or glaucoma suspect' label='Glaucoma or glaucoma suspect' />
      <Picker.Item value='Strabismus or ocular motility disorders' label='Strabismus or ocular motility disorders' />
      <Picker.Item value='Disorders of refraction or accommodation' label='Disorders of refraction or accommodation' />
      <Picker.Item value='Postprocedural disorders of eye or ocular adnexa' label='Postprocedural disorders of eye or ocular adnexa' />
      <Picker.Item value='Impairment of visual functions' label='Impairment of visual functions' />
      <Picker.Item value='Vision impairment ' label='Vision impairment ' />
      <Picker.Item value='Neoplasms of the eye or ocular adnexa' label='Neoplasms of the eye or ocular adnexa' />
      <Picker.Item value='Reasons for contact with the health care system in relation to eyes or vision' label='Reasons for contact with the health care system in relation to eyes or vision' />
      <Picker.Item value='NA06.9 Contusion of eyeball or orbital tissues' label='NA06.9 Contusion of eyeball or orbital tissues' />
      <Picker.Item value='ND70.2 Foreign body in multiple parts of external eye' label='ND70.2 Foreign body in multiple parts of external eye' />
      <Picker.Item value='EC23.20 Oculocutaneous albinism' label='EC23.20 Oculocutaneous albinism' />
      <Picker.Item value='NA06.8 Traumatic injury to eyeball' label='NA06.8 Traumatic injury to eyeball' />
      <Picker.Item value='KA41 Birth injury to eye' label='KA41 Birth injury to eye' />
      <Picker.Item value='1A60.2 Late congenital syphilitic oculopathy' label='1A60.2 Late congenital syphilitic oculopathy' />
      <Picker.Item value='Symptoms, signs or clinical findings of the visual system' label='Symptoms, signs or clinical findings of the visual system' />
      <Picker.Item value='Structural developmental anomalies of the eye, eyelid or lacrimal apparatus' label='Structural developmental anomalies of the eye, eyelid or lacrimal apparatus' />
      <Picker.Item value='9E1Y Other specified diseases of the visual system' label='9E1Y Other specified diseases of the visual system' />
      <Picker.Item value='9E1Z Diseases of the visual system, unspecified' label='9E1Z Diseases of the visual system, unspecified' />
    </Picker>
  )
}

export const Icd10 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Diseases of the ear or mastoid process" />
      <Picker.Item value='Diseases of external ear' label="Diseases of external ear" />
      <Picker.Item value='Diseases of middle ear or mastoid' label='Diseases of middle ear or mastoid' />
      <Picker.Item value='Diseases of inner ear ' label='Diseases of inner ear ' />
      <Picker.Item value='Disorders with hearing impairment' label='Disorders with hearing impairment' />
      <Picker.Item value='Disorders of ear, not elsewhere classified' label='Disorders of ear, not elsewhere classified' />
      <Picker.Item value='Postprocedural disorders of ear or mastoid process' label='Postprocedural disorders of ear or mastoid process' />
      <Picker.Item value='Structural developmental anomalies of the ear' label='Structural developmental anomalies of the ear' />
      <Picker.Item value='Symptoms, signs or clinical findings of ear or mastoid process' label='Symptoms, signs or clinical findings of ear or mastoid process' />
      <Picker.Item value='AC0Y Other specified diseases of the ear or mastoid process' label='AC0Y Other specified diseases of the ear or mastoid process' />
      <Picker.Item value='AC0Z Diseases of the ear or mastoid process, unspecified' label='AC0Z Diseases of the ear or mastoid process, unspecified' />
    </Picker>
  )
}

export const Icd11 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Diseases of the circulatory system " />
      <Picker.Item value='Hypertensive diseases' label='Hypertensive diseases' />
      <Picker.Item value='Hypotension' label='Hypotension' />
      <Picker.Item value='Ischaemic heart diseases' label='Ischaemic heart diseases' />
      <Picker.Item value='Diseases of coronary artery' label='Diseases of coronary artery' />
      <Picker.Item value='Pulmonary heart disease or diseases of pulmonary circulation' label='Pulmonary heart disease or diseases of pulmonary circulation' />
      <Picker.Item value='Pericarditis' label='Pericarditis' />
      <Picker.Item value='Acute or subacute endocarditis' label='Acute or subacute endocarditis' />
      <Picker.Item value='Heart valve diseases' label='Heart valve diseases' />
      <Picker.Item value='BC20 Chronic rheumatic heart diseases, not elsewhere classified' label='BC20 Chronic rheumatic heart diseases, not elsewhere classified' />
      <Picker.Item value='Diseases of the myocardium or cardiac chambers ' label='Diseases of the myocardium or cardiac chambers ' />
      <Picker.Item value='Cardiac arrhythmia' label='Cardiac arrhythmia' />
      <Picker.Item value='Heart failure' label='Heart failure' />
      <Picker.Item value='Diseases of arteries or arterioles' label='Diseases of arteries or arterioles' />
      <Picker.Item value='Diseases of veins' label='Diseases of veins' />
      <Picker.Item value='Disorders of lymphatic vessels or lymph nodes' label='Disorders of lymphatic vessels or lymph nodes' />
      <Picker.Item value='Postprocedural disorders of circulatory system' label='Postprocedural disorders of circulatory system' />
      <Picker.Item value='Neoplasms of the circulatory system' label='Neoplasms of the circulatory system' />
      <Picker.Item value='Developmental anomalies of the circulatory system' label='Developmental anomalies of the circulatory system' />
      <Picker.Item value='Infections of the circulatory system' label='Infections of the circulatory system' />
      <Picker.Item value='Symptoms, signs or clinical findings of the circulatory system ' label='Symptoms, signs or clinical findings of the circulatory system ' />
      <Picker.Item value='Cerebrovascular diseases' label='Cerebrovascular diseases' />
      <Picker.Item value='Functional vascular disorders of the skin' label='Functional vascular disorders of the skin' />
      <Picker.Item value='JB64.4 Diseases of the circulatory system complicating pregnancy, childbirth or the puerperium ' label='JB64.4 Diseases of the circulatory system complicating pregnancy, childbirth or the puerperium ' />
      <Picker.Item value='BE2Y Other specified diseases of the circulatory system' label='BE2Y Other specified diseases of the circulatory system' />
      <Picker.Item value='BE2Z Diseases of the circulatory system, unspecified' label='BE2Z Diseases of the circulatory system, unspecified' />
    </Picker>
  )
}

export const Icd12 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Diseases of the respiratory system " />
      <Picker.Item value='Upper respiratory tract disorders' label='Upper respiratory tract disorders' />
      <Picker.Item value='Certain lower respiratory tract diseases' label='Certain lower respiratory tract diseases' />
      <Picker.Item value='Lung infections' label='Lung infections' />
      <Picker.Item value='Lung diseases due to external agents' label='Lung diseases due to external agents' />
      <Picker.Item value='Respiratory diseases principally affecting the lung interstitium ' label='Respiratory diseases principally affecting the lung interstitium ' />
      <Picker.Item value='Pleural, diaphragm or mediastinal disorders' label='Pleural, diaphragm or mediastinal disorders' />
      <Picker.Item value='CB40 Certain diseases of the respiratory system' label='CB40 Certain diseases of the respiratory system' />
      <Picker.Item value='CB41 Respiratory failure' label='CB41 Respiratory failure' />
      <Picker.Item value='Postprocedural disorders of the respiratory system' label='Postprocedural disorders of the respiratory system' />
      <Picker.Item value='Neoplasms of the respiratory system' label='Neoplasms of the respiratory system' />
      <Picker.Item value='Developmental respiratory diseases' label='Developmental respiratory diseases' />
      <Picker.Item value='Symptoms, signs or clinical findings of the respiratory system' label='Symptoms, signs or clinical findings of the respiratory system' />
      <Picker.Item value='Pulmonary heart disease or diseases of pulmonary circulation' label='Pulmonary heart disease or diseases of pulmonary circulation' />
      <Picker.Item value='Sleep-related breathing disorders ' label='Sleep-related breathing disorders ' />
      <Picker.Item value='JB64.5 Diseases of the respiratory system complicating pregnancy, childbirth or the puerperium' label='JB64.5 Diseases of the respiratory system complicating pregnancy, childbirth or the puerperium' />
      <Picker.Item value='CB7Z Diseases of the respiratory system, unspecified ' label='CB7Z Diseases of the respiratory system, unspecified ' />
    </Picker>
  )
}

export const Icd13 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Diseases of the digestive system" />
      <Picker.Item value='Diseases or disorders of orofacial complex' label='Diseases or disorders of orofacial complex' />
      <Picker.Item value='Diseases of oesophagus' label='Diseases of oesophagus' />
      <Picker.Item value='Diseases of the stomach or the duodenum' label='Diseases of the stomach or the duodenum' />
      <Picker.Item value='Diseases of small intestine' label='Diseases of small intestine' />
      <Picker.Item value='Diseases of appendix' label='Diseases of appendix' />
      <Picker.Item value='Diseases of large intestine' label='Diseases of large intestine' />
      <Picker.Item value='Diseases of anal canal' label='Diseases of anal canal' />
      <Picker.Item value='Diseases of liver' label='Diseases of liver' />
      <Picker.Item value='Diseases of gallbladder or biliary tract ' label='Diseases of gallbladder or biliary tract ' />
      <Picker.Item value='Diseases of pancreas ' label='Diseases of pancreas ' />
      <Picker.Item value='Diseases of peritoneum' label='Diseases of peritoneum' />
      <Picker.Item value='Diverticular disease of intestine' label='Diverticular disease of intestine' />
      <Picker.Item value='Ischaemic vascular disorders of intestine' label='Ischaemic vascular disorders of intestine' />
      <Picker.Item value='Hernias' label='Hernias' />
      <Picker.Item value='Inflammatory bowel diseases' label='Inflammatory bowel diseases' />
      <Picker.Item value='Functional gastrointestinal disorders' label='Functional gastrointestinal disorders' />
      <Picker.Item value='Postprocedural disorders of digestive system' label='Postprocedural disorders of digestive system' />
      <Picker.Item value='Digestive system disorders of fetus or newborn ' label='Digestive system disorders of fetus or newborn ' />
      <Picker.Item value='Symptoms, signs or clinical findings of the digestive system or abdomen' label='Symptoms, signs or clinical findings of the digestive system or abdomen' />
      <Picker.Item value='Structural developmental anomalies of the digestive tract ' label='Structural developmental anomalies of the digestive tract ' />
      <Picker.Item value='JB64.6 Diseases of the digestive system complicating pregnancy, childbirth or the puerperium' label='JB64.6 Diseases of the digestive system complicating pregnancy, childbirth or the puerperium' />
      <Picker.Item value='DE2Y Other specified diseases of the digestive system' label='DE2Y Other specified diseases of the digestive system' />
      <Picker.Item value='DE2Z Diseases of the digestive system, unspecified' label='DE2Z Diseases of the digestive system, unspecified' />
    </Picker>
  )
}

export const Icd14 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Diseases of the skin" />
      <Picker.Item value='Certain skin disorders attributable to infection or infestation' label='Certain skin disorders attributable to infection or infestation' />
      <Picker.Item value='Inflammatory dermatoses ' label='Inflammatory dermatoses ' />
      <Picker.Item value='Metabolic and nutritional disorders affecting the skin' label='Metabolic and nutritional disorders affecting the skin' />
      <Picker.Item value='Genetic and developmental disorders affecting the skin' label='Genetic and developmental disorders affecting the skin' />
      <Picker.Item value='Sensory and psychological disorders affecting the skin' label='Sensory and psychological disorders affecting the skin' />
      <Picker.Item value='Skin disorders involving specific cutaneous structures' label='Skin disorders involving specific cutaneous structures' />
      <Picker.Item value='Skin disorders involving certain specific body regions' label='Skin disorders involving certain specific body regions' />
      <Picker.Item value='Skin disorders associated with pregnancy, the neonatal period and infancy' label='Skin disorders associated with pregnancy, the neonatal period and infancy' />
      <Picker.Item value='Adverse cutaneous reactions to medication ' label='Adverse cutaneous reactions to medication ' />
      <Picker.Item value='Skin disorders provoked by external factors' label='Skin disorders provoked by external factors' />
      <Picker.Item value='Benign proliferations, neoplasms and cysts of the skin' label='Benign proliferations, neoplasms and cysts of the skin' />
      <Picker.Item value='Disorders of the skin of uncertain or unpredictable malignant potential' label='Disorders of the skin of uncertain or unpredictable malignant potential' />
      <Picker.Item value='Cutaneous markers of internal disorders ' label='Cutaneous markers of internal disorders ' />
      <Picker.Item value='Postprocedural disorders of the skin' label='Postprocedural disorders of the skin' />
      <Picker.Item value='Malignant neoplasms involving the skin' label='Malignant neoplasms involving the skin' />
      <Picker.Item value='NE81.00 Haematoma of surgical wound of skin' label='NE81.00 Haematoma of surgical wound of skin' />
      <Picker.Item value='NE81.20 Superficial incisional site infection ' label='NE81.20 Superficial incisional site infection ' />
      <Picker.Item value='KC50 Neonatal phototherapy burn' label='KC50 Neonatal phototherapy burn' />
      <Picker.Item value='Symptoms or signs involving the skin' label='Symptoms or signs involving the skin' />
      <Picker.Item value='EM0Y Other specified diseases of the skin' label='EM0Y Other specified diseases of the skin' />
      <Picker.Item value='EM0Z Skin disease of unspecified nature ' label='EM0Z Skin disease of unspecified nature ' />
    </Picker>
  )
}

export const Icd15 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Diseases of the musculoskeletal system or connective tissue " />
      <Picker.Item value='Arthropathies' label='Arthropathies' />
      <Picker.Item value='Conditions associated with the spine ' label='Conditions associated with the spine ' />
      <Picker.Item value='Soft tissue disorders' label='Soft tissue disorders' />
      <Picker.Item value='Osteopathies or chondropathies' label='Osteopathies or chondropathies' />
      <Picker.Item value='FC00 Certain specified acquired deformities of musculoskeletal system or connective tissue, not elsewhere classified' label='FC00 Certain specified acquired deformities of musculoskeletal system or connective tissue, not elsewhere classified' />
      <Picker.Item value='FC01 Postprocedural disorders of the musculoskeletal system' label='FC01 Postprocedural disorders of the musculoskeletal system' />
      <Picker.Item value='Neoplasms of the musculoskeletal system' label='Neoplasms of the musculoskeletal system' />
      <Picker.Item value='4A60 Monogenic autoinflammatory syndromes' label='4A60 Monogenic autoinflammatory syndromes' />
      <Picker.Item value='Nonorgan specific systemic autoimmune disorders' label='Nonorgan specific systemic autoimmune disorders' />
      <Picker.Item value='Symptoms, signs or clinical findings of the musculoskeletal system' label='Symptoms, signs or clinical findings of the musculoskeletal system' />
      <Picker.Item value='Structural developmental anomalies of the skeleton' label='Structural developmental anomalies of the skeleton' />
      <Picker.Item value='LD28 Syndromes with connective tissue involvement as a major feature' label='LD28 Syndromes with connective tissue involvement as a major feature' />
      <Picker.Item value='LD24 Syndromes with skeletal anomalies as a major feature' label='LD24 Syndromes with skeletal anomalies as a major feature' />
      <Picker.Item value='FC0Y Other specified diseases of the musculoskeletal system or connective tissue' label='FC0Y Other specified diseases of the musculoskeletal system or connective tissue' />
      <Picker.Item value='FC0Z Diseases of the musculoskeletal system or connective tissue, unspecified' label='FC0Z Diseases of the musculoskeletal system or connective tissue, unspecified' />
    </Picker>
  )
}

export const Icd16 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Diseases of the genitourinary system" />
      <Picker.Item value='Diseases of the female genital system' label='Diseases of the female genital system' />
      <Picker.Item value='Diseases of the male genital system ' label='Diseases of the male genital system ' />
      <Picker.Item value='Disorders of breast' label='Disorders of breast' />
      <Picker.Item value='Diseases of the urinary system' label='Diseases of the urinary system' />
      <Picker.Item value='Other conditions of the genitourinary system' label='Other conditions of the genitourinary system' />
      <Picker.Item value='Postprocedural disorders of genitourinary system' label='Postprocedural disorders of genitourinary system' />
      <Picker.Item value='Contact with health services for reasons associated with reproduction' label='Contact with health services for reasons associated with reproduction' />
      <Picker.Item value='Predominantly sexually transmitted infections' label='Predominantly sexually transmitted infections' />
      <Picker.Item value='Symptoms, signs or clinical findings of the genitourinary system' label='Symptoms, signs or clinical findings of the genitourinary system' />
      <Picker.Item value='GC8Y Other specified diseases of the genitourinary system' label='GC8Y Other specified diseases of the genitourinary system' />
      <Picker.Item value='GC8Z Diseases of the genitourinary system, unspecified' label='GC8Z Diseases of the genitourinary system, unspecified' />
    </Picker>
  )
}

export const Icd17 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Conditions related to sexual health" />
      <Picker.Item value='Sexual dysfunctions' label='Sexual dysfunctions' />
      <Picker.Item value='Sexual pain disorders' label='Sexual pain disorders' />
      <Picker.Item value='HA40 Aetiological considerations in sexual dysfunctions and sexual pain disorder' label='HA40 Aetiological considerations in sexual dysfunctions and sexual pain disorder' />
      <Picker.Item value='Gender incongruence' label='Gender incongruence' />
      <Picker.Item value='Changes in female genital anatomy' label='Changes in female genital anatomy' />
      <Picker.Item value='Changes in male genital anatomy' label='Changes in male genital anatomy' />
      <Picker.Item value='Paraphilic disorders' label='Paraphilic disorders' />
      <Picker.Item value='5A71 Adrenogenital disorders' label='5A71 Adrenogenital disorders' />
      <Picker.Item value='Predominantly sexually transmitted infections ' label='Predominantly sexually transmitted infections ' />
      <Picker.Item value='QA21 Contact with health services for contraceptive management' label='QA21 Contact with health services for contraceptive management' />
      <Picker.Item value='HA8Y Other specified conditions related to sexual health' label='HA8Y Other specified conditions related to sexual health' />
      <Picker.Item value='HA8Z Conditions related to sexual health, unspecified' label='HA8Z Conditions related to sexual health, unspecified' />
    </Picker>
  )
}

export const Icd18 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Pregnancy, childbirth or the puerperium" />
      <Picker.Item value='Abortive outcome of pregnancy' label='Abortive outcome of pregnancy' />
      <Picker.Item value='Oedema, proteinuria, or hypertensive disorders in pregnancy, childbirth, or the puerperium' label='Oedema, proteinuria, or hypertensive disorders in pregnancy, childbirth, or the puerperium' />
      <Picker.Item value='Obstetric haemorrhage' label='Obstetric haemorrhage' />
      <Picker.Item value='Certain specified maternal disorders predominantly related to pregnancy' label='Certain specified maternal disorders predominantly related to pregnancy' />
      <Picker.Item value='Maternal care related to the fetus, amniotic cavity or possible delivery problems' label='Maternal care related to the fetus, amniotic cavity or possible delivery problems' />
      <Picker.Item value='Complications of labour or delivery' label='Complications of labour or delivery' />
      <Picker.Item value='Delivery' label='Delivery' />
      <Picker.Item value='Complications predominantly related to the puerperium' label='Complications predominantly related to the puerperium' />
      <Picker.Item value='Certain obstetric conditions, not elsewhere classified' label='Certain obstetric conditions, not elsewhere classified' />
      <Picker.Item value='Gestational trophoblastic diseases' label='Gestational trophoblastic diseases' />
      <Picker.Item value='Contact with health services for reasons associated with reproduction' label='Contact with health services for reasons associated with reproduction' />
    </Picker>
  )
}

export const Icd19 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Certain conditions originating in the perinatal period" />
      <Picker.Item value='Fetus or newborn affected by maternal factors or by complications of pregnancy, labour or delivery' label='Fetus or newborn affected by maternal factors or by complications of pregnancy, labour or delivery' />
      <Picker.Item value='Disorders of newborn related to length of gestation or fetal growth' label='Disorders of newborn related to length of gestation or fetal growth' />
      <Picker.Item value='Birth injury' label='Birth injury' />
      <Picker.Item value='Infections of the fetus or newborn' label='Infections of the fetus or newborn' />
      <Picker.Item value='Haemorrhagic or haematological disorders of fetus or newborn' label='Haemorrhagic or haematological disorders of fetus or newborn' />
      <Picker.Item value='Neurological disorders specific to the perinatal or neonatal period' label='Neurological disorders specific to the perinatal or neonatal period' />
      <Picker.Item value='Respiratory disorders specific to the perinatal or neonatal period' label='Respiratory disorders specific to the perinatal or neonatal period' />
      <Picker.Item value='Cardiovascular disorders present in the perinatal or neonatal period' label='Cardiovascular disorders present in the perinatal or neonatal period' />
      <Picker.Item value='Transitory endocrine or metabolic disorders specific to fetus or newborn' label='Transitory endocrine or metabolic disorders specific to fetus or newborn' />
      <Picker.Item value='Digestive system disorders of fetus or newborn ' label='Digestive system disorders of fetus or newborn ' />
      <Picker.Item value='Genitourinary system disorders specific to the perinatal or neonatal period' label='Genitourinary system disorders specific to the perinatal or neonatal period' />
      <Picker.Item value='Disorders involving the integument of fetus or newborn' label='Disorders involving the integument of fetus or newborn' />
      <Picker.Item value='Disturbances of temperature regulation of newborn' label='Disturbances of temperature regulation of newborn' />
      <Picker.Item value='Certain disorders originating in the perinatal period' label='Certain disorders originating in the perinatal period' />
      <Picker.Item value='KD5Z Conditions originating in the perinatal or neonatal period, unspecified  ' label='KD5Z Conditions originating in the perinatal or neonatal period, unspecified  ' />
    </Picker>
  )
}

export const Icd20 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Developmental anomalies" />
      <Picker.Item value='Structural developmental anomalies primarily affecting one body system' label='Structural developmental anomalies primarily affecting one body system' />
      <Picker.Item value='Multiple developmental anomalies or syndromes' label='Multiple developmental anomalies or syndromes' />
      <Picker.Item value='Chromosomal anomalies, excluding gene mutations ' label='Chromosomal anomalies, excluding gene mutations ' />
      <Picker.Item value='LD90 Conditions with disorders of intellectual development as a relevant clinical feature' label='LD90 Conditions with disorders of intellectual development as a relevant clinical feature' />
      <Picker.Item value='LD9Y Other specified developmental anomalies' label='LD9Y Other specified developmental anomalies' />
      <Picker.Item value='LD9Z Developmental anomalies, unspecified' label='LD9Z Developmental anomalies, unspecified' />
    </Picker>
  )
}

export const Icd21 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Symptoms, signs or clinical findings, not elsewhere classified" />
      <Picker.Item value='Symptoms, signs or clinical findings of blood, blood-forming organs, or the immune system ' label='Symptoms, signs or clinical findings of blood, blood-forming organs, or the immune system ' />
      <Picker.Item value='Symptoms, signs or clinical findings of endocrine, nutritional or metabolic diseases' label='Symptoms, signs or clinical findings of endocrine, nutritional or metabolic diseases' />
      <Picker.Item value='Symptoms, signs or clinical findings of speech or voice' label='Symptoms, signs or clinical findings of speech or voice' />
      <Picker.Item value='Mental or behavioural symptoms, signs or clinical findings' label='Mental or behavioural symptoms, signs or clinical findings' />
      <Picker.Item value='Symptoms, signs or clinical findings of the nervous system' label='Symptoms, signs or clinical findings of the nervous system' />
      <Picker.Item value='Symptoms, signs or clinical findings of the visual system' label='Symptoms, signs or clinical findings of the visual system' />
      <Picker.Item value='Symptoms, signs or clinical findings of ear or mastoid process' label='Symptoms, signs or clinical findings of ear or mastoid process' />
      <Picker.Item value='Symptoms, signs or clinical findings of the circulatory system' label='Symptoms, signs or clinical findings of the circulatory system' />
      <Picker.Item value='Symptoms, signs or clinical findings of the respiratory system' label='Symptoms, signs or clinical findings of the respiratory system' />
      <Picker.Item value='Symptoms, signs or clinical findings of the digestive system or abdomen' label='Symptoms, signs or clinical findings of the digestive system or abdomen' />
      <Picker.Item value='Symptoms, signs or clinical findings involving the skin' label='Symptoms, signs or clinical findings involving the skin' />
      <Picker.Item value='Symptoms, signs or clinical findings of the musculoskeletal system' label='Symptoms, signs or clinical findings of the musculoskeletal system' />
      <Picker.Item value='Symptoms, signs or clinical findings of the genitourinary system' label='Symptoms, signs or clinical findings of the genitourinary system' />
      <Picker.Item value='General symptoms, signs or clinical findings' label='General symptoms, signs or clinical findings' />
      <Picker.Item value='Ill-defined and unknown causes of mortality' label='Ill-defined and unknown causes of mortality' />
      <Picker.Item value='MH2Y Other specified symptoms, signs or clinical findings, not elsewhere classified' label='MH2Y Other specified symptoms, signs or clinical findings, not elsewhere classified' />
    </Picker>
  )
}

export const Icd22 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Injury, poisoning or certain other consequences of external causes  " />
      <Picker.Item value='Injuries to the head' label='Injuries to the head' />
      <Picker.Item value='Injuries to the neck' label='Injuries to the neck' />
      <Picker.Item value='Injuries to the thorax' label='Injuries to the thorax' />
      <Picker.Item value='Injuries to the abdomen, lower back, lumbar spine or pelvis' label='Injuries to the abdomen, lower back, lumbar spine or pelvis' />
      <Picker.Item value='Injuries to the shoulder or upper arm' label='Injuries to the shoulder or upper arm' />
      <Picker.Item value='Injuries to the elbow or forearm' label='Injuries to the elbow or forearm' />
      <Picker.Item value='Injuries to the wrist or hand' label='Injuries to the wrist or hand' />
      <Picker.Item value='Injuries to the hip or thigh' label='Injuries to the hip or thigh' />
      <Picker.Item value='Injuries to the knee or lower leg' label='Injuries to the knee or lower leg' />
      <Picker.Item value='Injuries to the ankle or foot' label='Injuries to the ankle or foot' />
      <Picker.Item value='Injuries involving multiple body regions' label='Injuries involving multiple body regions' />
      <Picker.Item value='Injuries to unspecified part of trunk, limb or body region' label='Injuries to unspecified part of trunk, limb or body region' />
      <Picker.Item value='Effects of foreign body entering through natural orifice' label='Effects of foreign body entering through natural orifice' />
      <Picker.Item value='Burns' label='Burns' />
      <Picker.Item value='Frostbite' label='Frostbite' />
      <Picker.Item value='Harmful effects of substances' label='Harmful effects of substances' />
      <Picker.Item value='Injury or harm arising from surgical or medical care, not elsewhere classified' label='Injury or harm arising from surgical or medical care, not elsewhere classified' />
      <Picker.Item value='Other or unspecified effects of external causes' label='Other or unspecified effects of external causes' />
      <Picker.Item value='NF2Y Other specified injury, poisoning or certain other consequences of external causes' label='NF2Y Other specified injury, poisoning or certain other consequences of external causes' />
      <Picker.Item value='NF2Z Unspecified injury, poisoning or certain other consequences of external causes' label='NF2Z Unspecified injury, poisoning or certain other consequences of external causes' />
    </Picker>
  )
}

export const Icd23 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="External causes of morbidity or mortality" />
      <Picker.Item value='Unintentional causes' label='Unintentional causes' />
      <Picker.Item value='Intentional self-harm' label='Intentional self-harm' />
      <Picker.Item value='Assault' label='Assault' />
      <Picker.Item value='Undetermined intent' label='Undetermined intent' />
      <Picker.Item value='Exposure to extreme forces of nature' label='Exposure to extreme forces of nature' />
      <Picker.Item value='Maltreatment' label='Maltreatment' />
      <Picker.Item value='Legal intervention' label='Legal intervention' />
      <Picker.Item value='Armed conflict' label='Armed conflict' />
      <Picker.Item value='Causes of healthcare related harm or injury' label='Causes of healthcare related harm or injury' />
      <Picker.Item value='PL2Y Other specified external causes of morbidity or mortality' label='PL2Y Other specified external causes of morbidity or mortality' />
      <Picker.Item value='PL2Z External causes of morbidity or mortality, unspecified' label='PL2Z External causes of morbidity or mortality, unspecified' />
    </Picker>
  )
}

export const Icd24 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Factors influencing health status or contact with health services" />
      <Picker.Item value='Reasons for contact with the health services ' label='Reasons for contact with the health services ' />
      <Picker.Item value='Factors influencing health status ' label='Factors influencing health status ' />
      <Picker.Item value='QF4Y Other specified factors influencing health status or contact with health services' label='QF4Y Other specified factors influencing health status or contact with health services' />
      <Picker.Item value='QF4Z Factors influencing health status or contact with health services, unspecified' label='QF4Z Factors influencing health status or contact with health services, unspecified' />
    </Picker>
  )
}

export const Icd25 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Codes for special purposes" />
      <Picker.Item value='International provisional assignment of new diseases of uncertain aetiology and emergency use' label='International provisional assignment of new diseases of uncertain aetiology and emergency use' />
      <Picker.Item value='National provisional assignment of new diseases of uncertain aetiology' label='National provisional assignment of new diseases of uncertain aetiology' />
    </Picker>
  )
}

export const Icd26 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Supplementary Chapter Traditional Medicine Conditions - Module I " />
      <Picker.Item value='Traditional medicine disorders (TM1)' label='Traditional medicine disorders (TM1)' />
      <Picker.Item value='Traditional medicine patterns (TM1)' label='Traditional medicine patterns (TM1)' />
      <Picker.Item value='SJ3Y Other specified supplementary Chapter Traditional Medicine Conditions - Module I ' label='SJ3Y Other specified supplementary Chapter Traditional Medicine Conditions - Module I ' />
      <Picker.Item value='SJ3Z Supplementary Chapter Traditional Medicine Conditions - Module I, unspecified' label='SJ3Z Supplementary Chapter Traditional Medicine Conditions - Module I, unspecified' />
    </Picker>
  )
}

export const Icd27 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Supplementary section for functioning assessment " />
      <Picker.Item value='WHODAS 2.0 36-item version' label='WHODAS 2.0 36-item version' />
      <Picker.Item value='Brief Model Disability Survey' label='Brief Model Disability Survey' />
      <Picker.Item value='Generic functioning domains' label='Generic functioning domains' />
    </Picker>
  )
}

export const Icd28 = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="Extension Codes" />
      <Picker.Item value='Severity Scale Value' label='Severity Scale Value' />
      <Picker.Item value='Temporality' label='Temporality' />
      <Picker.Item value='Aetiology' label='Aetiology' />
      <Picker.Item value='Topology Scale Value' label='Topology Scale Value' />
      <Picker.Item value='Anatomy and topography' label='Anatomy and topography' />
      <Picker.Item value='Histopathology ' label='Histopathology ' />
      <Picker.Item value='Dimensions of injury' label='Dimensions of injury' />
      <Picker.Item value='Dimensions of external causes' label='Dimensions of external causes' />
      <Picker.Item value='Consciousness' label='Consciousness' />
      <Picker.Item value='Substances' label='Substances' />
      <Picker.Item value='Diagnosis code descriptors' label='Diagnosis code descriptors' />
      <Picker.Item value='Capacity or context' label='Capacity or context' />
      <Picker.Item value='Health Devices, Equipment and Supplies' label='Health Devices, Equipment and Supplies' />
      <Picker.Item value='Extension codes of particular relevance to skin diseases' label='Extension codes of particular relevance to skin diseases' />
    </Picker>
  )
}

export const Icd10Diagnosis = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: '100%' }]}
    >
      <Picker.Item value='' label="None" />
      <Picker.Item value='Certain infectious and parasitic diseases' label="Certain infectious and parasitic diseases" />
      <Picker.Item value='Neoplasms' label='Neoplasms' />
      <Picker.Item value='Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism' label='Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism' />
      <Picker.Item value='Endocrine, nutritional and metabolic diseases' label='Endocrine, nutritional and metabolic diseases' />
      <Picker.Item value='Mental, Behavioral and Neurodevelopmental disorders' label='Mental, Behavioral and Neurodevelopmental disorders' />
      <Picker.Item value='Diseases of the nervous system' label='Diseases of the nervous system' />
      <Picker.Item value='Diseases of the eye and adnexa' label='Diseases of the eye and adnexa' />
      <Picker.Item value='Diseases of the ear and mastoid process' label='Diseases of the ear and mastoid process' />
      <Picker.Item value='Diseases of the circulatory system' label='Diseases of the circulatory system' />
      <Picker.Item value='Diseases of the respiratory system' label='Diseases of the respiratory system' />
      <Picker.Item value='Diseases of the digestive system' label='Diseases of the digestive system' />
      <Picker.Item value='Diseases of the skin and subcutaneous tissue' label='Diseases of the skin and subcutaneous tissue' />
      <Picker.Item value='Diseases of the musculoskeletal system and connective tissue' label='Diseases of the musculoskeletal system and connective tissue' />
      <Picker.Item value='Diseases of the genitourinary system' label='Diseases of the genitourinary system' />
      <Picker.Item value='Pregnancy, childbirth and the puerperium' label='Pregnancy, childbirth and the puerperium' />
      <Picker.Item value='Certain conditions originating in the perinatal period' label='Certain conditions originating in the perinatal period' />
      <Picker.Item value='Congenital malformations, deformations and chromosomal abnormalities' label='Congenital malformations, deformations and chromosomal abnormalities' />
      <Picker.Item value='Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified' label='Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified' />
      <Picker.Item value='Injury, poisoning and certain other consequences of external causes' label='Injury, poisoning and certain other consequences of external causes' />
      <Picker.Item value='Codes for special purposes' label='Codes for special purposes' />
      <Picker.Item value='External causes of morbidity' label='External causes of morbidity' />
      <Picker.Item value='Factors influencing health status and contact with health services' label='Factors influencing health status and contact with health services' />
    </Picker>
  )
}


export const ExaminationDisplay = (metadataObj, language) => {
  return (
    <View>
      <Text>{LocalizedStrings[language].provider}: {metadataObj.doctor} </Text>
      <Text>Present Complaint: {metadataObj.examinationComplaint} </Text>
      <Text>Active Conditions: {metadataObj.activeConditions}</Text>
      <Text>Inactive Conditions: {metadataObj.inactiveConditions}</Text>
      <Text>History of Present illness: {metadataObj.illnessHistory}</Text>
    </View>)
}

const Examination = (props) => {
  const [examinationComplaint, setExaminationComplaint] = useState(null);
  const [activeConditions1, setActiveConditions1] = useState(null);
  const [activeConditions2, setActiveConditions2] = useState(null);
  const [activeConditions3, setActiveConditions3] = useState(null);
  const [activeConditions4, setActiveConditions4] = useState(null);
  const [activeConditions5, setActiveConditions5] = useState(null);
  const [activeConditions6, setActiveConditions6] = useState(null);
  const [activeConditions7, setActiveConditions7] = useState(null);
  const [activeConditions8, setActiveConditions8] = useState(null);
  const [activeConditions9, setActiveConditions9] = useState(null);
  const [activeConditions10, setActiveConditions10] = useState(null);
  const [activeConditions11, setActiveConditions11] = useState(null);
  const [activeConditions12, setActiveConditions12] = useState(null);
  const [activeConditions13, setActiveConditions13] = useState(null);
  const [activeConditions14, setActiveConditions14] = useState(null);
  const [activeConditions15, setActiveConditions15] = useState(null);
  const [activeConditions16, setActiveConditions16] = useState(null);
  const [activeConditions17, setActiveConditions17] = useState(null);
  const [activeConditions18, setActiveConditions18] = useState(null);
  const [activeConditions19, setActiveConditions19] = useState(null);
  const [activeConditions20, setActiveConditions20] = useState(null);
  const [activeConditions21, setActiveConditions21] = useState(null);
  const [activeConditions22, setActiveConditions22] = useState(null);
  const [activeConditions23, setActiveConditions23] = useState(null);
  const [activeConditions24, setActiveConditions24] = useState(null);
  const [activeConditions25, setActiveConditions25] = useState(null);
  const [activeConditions26, setActiveConditions26] = useState(null);
  const [activeConditions27, setActiveConditions27] = useState(null);
  const [activeConditions28, setActiveConditions28] = useState(null);
  const [inactiveConditions1, setInactiveConditions1] = useState(null);
  const [inactiveConditions2, setInactiveConditions2] = useState(null);
  const [inactiveConditions3, setInactiveConditions3] = useState(null);
  const [inactiveConditions4, setInactiveConditions4] = useState(null);
  const [inactiveConditions5, setInactiveConditions5] = useState(null);
  const [inactiveConditions6, setInactiveConditions6] = useState(null);
  const [inactiveConditions7, setInactiveConditions7] = useState(null);
  const [inactiveConditions8, setInactiveConditions8] = useState(null);
  const [inactiveConditions9, setInactiveConditions9] = useState(null);
  const [inactiveConditions10, setInactiveConditions10] = useState(null);
  const [inactiveConditions11, setInactiveConditions11] = useState(null);
  const [inactiveConditions12, setInactiveConditions12] = useState(null);
  const [inactiveConditions13, setInactiveConditions13] = useState(null);
  const [inactiveConditions14, setInactiveConditions14] = useState(null);
  const [inactiveConditions15, setInactiveConditions15] = useState(null);
  const [inactiveConditions16, setInactiveConditions16] = useState(null);
  const [inactiveConditions17, setInactiveConditions17] = useState(null);
  const [inactiveConditions18, setInactiveConditions18] = useState(null);
  const [inactiveConditions19, setInactiveConditions19] = useState(null);
  const [inactiveConditions20, setInactiveConditions20] = useState(null);
  const [inactiveConditions21, setInactiveConditions21] = useState(null);
  const [inactiveConditions22, setInactiveConditions22] = useState(null);
  const [inactiveConditions23, setInactiveConditions23] = useState(null);
  const [inactiveConditions24, setInactiveConditions24] = useState(null);
  const [inactiveConditions25, setInactiveConditions25] = useState(null);
  const [inactiveConditions26, setInactiveConditions26] = useState(null);
  const [inactiveConditions27, setInactiveConditions27] = useState(null);
  const [inactiveConditions28, setInactiveConditions28] = useState(null);
  const [illnessHistory, setIllnessHistory] = useState(null);
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));

  const patientId = props.navigation.getParam('patientId');
  const visitId = props.navigation.getParam('visitId');
  const userName = props.navigation.getParam('userName');

  const submit = async () => {
    database.addEvent({
      id: uuid(),
      patient_id: patientId,
      visit_id: visitId,
      event_type: EventTypes.ExaminationFull,
      event_metadata: JSON.stringify({
        doctor: userName,
        examinationComplaint,
        activeConditions1,
        activeConditions2,
        activeConditions3,
        activeConditions4,
        activeConditions5,
        activeConditions6,
        activeConditions7,
        activeConditions8,
        activeConditions9,
        activeConditions10,
        activeConditions11,
        activeConditions12,
        activeConditions13,
        activeConditions14,
        activeConditions15,
        activeConditions16,
        activeConditions17,
        activeConditions18,
        activeConditions19,
        activeConditions20,
        activeConditions21,
        activeConditions22,
        activeConditions23,
        activeConditions24,
        activeConditions25,
        activeConditions26,
        activeConditions27,
        activeConditions28,
        inactiveConditions1,
        inactiveConditions2,
        inactiveConditions3,
        inactiveConditions4,
        inactiveConditions5,
        inactiveConditions6,
        inactiveConditions7,
        inactiveConditions8,
        inactiveConditions9,
        inactiveConditions10,
        inactiveConditions11,
        inactiveConditions12,
        inactiveConditions13,
        inactiveConditions14,
        inactiveConditions15,
        inactiveConditions16,
        inactiveConditions17,
        inactiveConditions18,
        inactiveConditions19,
        inactiveConditions20,
        inactiveConditions21,
        inactiveConditions22,
        inactiveConditions23,
        inactiveConditions24,
        inactiveConditions25,
        inactiveConditions26,
        inactiveConditions27,
        inactiveConditions28,
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
            style={styles.inputs}
            onChangeText={(text) => setExaminationComplaint(text)}
            value={examinationComplaint}
          />
        </View>
        <Text style={{ color: '#FFFFFF', paddingTop: 15, paddingRight: 5, paddingLeft: 5 }}>Active Conditions</Text>
        {Icd1(activeConditions1, setActiveConditions1, language)}
        {Icd2(activeConditions2, setActiveConditions2, language)}
        {Icd3(activeConditions3, setActiveConditions3, language)}
        {Icd4(activeConditions4, setActiveConditions4, language)}
        {Icd5(activeConditions5, setActiveConditions5, language)}
        {Icd6(activeConditions6, setActiveConditions6, language)}
        {Icd7(activeConditions7, setActiveConditions7, language)}
        {Icd8(activeConditions8, setActiveConditions8, language)}
        {Icd9(activeConditions9, setActiveConditions9, language)}
        {Icd10(activeConditions10, setActiveConditions10, language)}
        {Icd11(activeConditions11, setActiveConditions11, language)}
        {Icd12(activeConditions12, setActiveConditions12, language)}
        {Icd13(activeConditions13, setActiveConditions13, language)}
        {Icd14(activeConditions14, setActiveConditions14, language)}
        {Icd15(activeConditions15, setActiveConditions15, language)}
        {Icd16(activeConditions16, setActiveConditions16, language)}
        {Icd17(activeConditions17, setActiveConditions17, language)}
        {Icd18(activeConditions18, setActiveConditions18, language)}
        {Icd19(activeConditions19, setActiveConditions19, language)}
        {Icd20(activeConditions20, setActiveConditions20, language)}
        {Icd21(activeConditions21, setActiveConditions21, language)}
        {Icd22(activeConditions22, setActiveConditions22, language)}
        {Icd23(activeConditions23, setActiveConditions23, language)}
        {Icd24(activeConditions24, setActiveConditions24, language)}
        {Icd25(activeConditions25, setActiveConditions25, language)}
        {Icd26(activeConditions26, setActiveConditions26, language)}
        {Icd27(activeConditions27, setActiveConditions27, language)}
        {Icd28(activeConditions28, setActiveConditions28, language)}
        <Text style={{ color: '#FFFFFF', paddingTop: 15, paddingRight: 5, paddingLeft: 5 }}>Inactive Conditions</Text>
        {Icd1(inactiveConditions1, setInactiveConditions1, language)}
        {Icd2(inactiveConditions2, setInactiveConditions2, language)}
        {Icd3(inactiveConditions3, setInactiveConditions3, language)}
        {Icd4(inactiveConditions4, setInactiveConditions4, language)}
        {Icd5(inactiveConditions5, setInactiveConditions5, language)}
        {Icd6(inactiveConditions6, setInactiveConditions6, language)}
        {Icd7(inactiveConditions7, setInactiveConditions7, language)}
        {Icd8(inactiveConditions8, setInactiveConditions8, language)}
        {Icd9(inactiveConditions9, setInactiveConditions9, language)}
        {Icd10(inactiveConditions10, setInactiveConditions10, language)}
        {Icd11(inactiveConditions11, setInactiveConditions11, language)}
        {Icd12(inactiveConditions12, setInactiveConditions12, language)}
        {Icd13(inactiveConditions13, setInactiveConditions13, language)}
        {Icd14(inactiveConditions14, setInactiveConditions14, language)}
        {Icd15(inactiveConditions15, setInactiveConditions15, language)}
        {Icd16(inactiveConditions16, setInactiveConditions16, language)}
        {Icd17(inactiveConditions17, setInactiveConditions17, language)}
        {Icd18(inactiveConditions18, setInactiveConditions18, language)}
        {Icd19(inactiveConditions19, setInactiveConditions19, language)}
        {Icd20(inactiveConditions20, setInactiveConditions20, language)}
        {Icd21(inactiveConditions21, setInactiveConditions21, language)}
        {Icd22(inactiveConditions22, setInactiveConditions22, language)}
        {Icd23(inactiveConditions23, setInactiveConditions23, language)}
        {Icd24(inactiveConditions24, setInactiveConditions24, language)}
        {Icd25(inactiveConditions25, setInactiveConditions25, language)}
        {Icd26(inactiveConditions26, setInactiveConditions26, language)}
        {Icd27(inactiveConditions27, setInactiveConditions27, language)}
        {Icd28(inactiveConditions28, setInactiveConditions28, language)}
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>History of Present illness:</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
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
