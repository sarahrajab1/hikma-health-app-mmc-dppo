const icd11List = [
    { name: "Certain infectious or parasitic diseases"},
    { name: "Gastroenteritis or colitis of infectious origin"},
    { name: 'Predominantly sexually transmitted infections'},
    { name: 'Mycobacterial diseases'},
    { name: 'Certain staphylococcal or streptococcal diseases'},
    { name: 'Pyogenic bacterial infections of the skin or subcutaneous tissues'},
    { name: 'Certain zoonotic bacterial diseases'},
    { name: 'Other bacterial diseases'},
    { name: 'Human immunodeficiency virus disease'},
    { name: 'Viral infections of the central nervous system'},
    { name: 'Dengue'},
    { name: 'Certain arthropod-borne viral fevers'},
    { name: 'Certain zoonotic viral diseases'},
    { name: 'Influenza'},
    { name: 'Viral hepatitis'},
    { name: 'Mycoses'},
    { name: 'Sepsis'},
    { name: '1G60 Certain other disorders of infectious origin'},
    { name: 'Sequelae of infectious diseases'},
    { name: 'Infections of the fetus or newborn'},
    { name: 'Human prion diseases'},
    { name: 'CA40 Pneumonia'},
    { name: '1H0Z Infection, unspecified'},
    { name: "Neoplasms"},
    { name: "Neoplasms of brain or central nervous system"},
    { name: 'Neoplasms of haematopoietic or lymphoid tissues'},
    { name: 'Malignant neoplasms, except primary neoplasms of lymphoid, haematopoietic, central nervous system or related tissues'},
    { name: 'In situ neoplasms, except of lymphoid, haematopoietic, central nervous system or related tissues'},
    { name: 'Benign neoplasms, except of lymphoid, haematopoietic, central nervous system or related tissues'},
    { name: 'Neoplasms of uncertain behaviour, except of lymphoid, haematopoietic, central nervous system or related tissues'},
    { name: 'Neoplasms of unknown behaviour, except of lymphoid, haematopoietic, central nervous system or related tissues'},
    { name: 'Inherited cancer-predisposing syndromes'},
    { name: "Diseases of the blood or blood-forming organs" },
    { name: "Anaemias or other erythrocyte disorders" },
    { name: 'Coagulation defects, purpura or other haemorrhagic or related conditions' },
    { name: 'Diseases of spleen' },
    { name: 'Neoplasms of haematopoietic or lymphoid tissues' },
    { name: 'Symptoms, signs or clinical findings of blood, blood-forming organs, or the immune system' },
    { name: 'Inherited cancer-predisposing syndromes' },
    { name: '3C0Y Other specified diseases of the blood or blood-forming organs' },
    { name: '3C0Z Diseases of the blood or blood-forming organs, unspecified' },
    { name: "Diseases of the immune system" },
    { name: "Primary immunodeficiencies" },
    { name: '4A20 Acquired immunodeficiencies' },
    { name: 'Nonorgan specific systemic autoimmune disorders' },
    { name: 'Autoinflammatory disorders' },
    { name: 'Allergic or hypersensitivity conditions' },
    { name: 'Immune system disorders involving white cell lineages' },
    { name: 'Certain disorders involving the immune system' },
    { name: '4B40 Diseases of thymus' },
    { name: 'Organ specific autoimmune disorders' },
    { name: 'Symptoms, signs or clinical findings of blood, blood-forming organs, or the immune system' },
    { name: '4B4Y Other specified diseases of the immune system' },
    { name: '4B4Z Diseases of the immune system, unspecified' },
    { name: "Endocrine, nutritional or metabolic diseases" },
    { name: "Endocrine diseases" },
    { name: 'Nutritional disorders' },
    { name: 'Metabolic disorders' },
    { name: 'Postprocedural endocrine or metabolic disorders' },
    { name: 'Symptoms, signs or clinical findings of endocrine, nutritional or metabolic diseases' },
    { name: "Mental, behavioural or neurodevelopmental disorders" },
    { name: "Neurodevelopmental disorders" },
    { name: 'Schizophrenia or other primary psychotic disorders' },
    { name: 'Catatonia' },
    { name: 'Mood disorders' },
    { name: 'Anxiety or fear-related disorders' },
    { name: 'Obsessive-compulsive or related disorders' },
    { name: 'Disorders specifically associated with stress' },
    { name: 'Dissociative disorders' },
    { name: 'Feeding or eating disorders' },
    { name: 'Elimination disorders' },
    { name: 'Disorders of bodily distress or bodily experience' },
    { name: 'Disorders due to substance use or addictive behaviours' },
    { name: 'Impulse control disorders' },
    { name: 'Disruptive behaviour or dissocial disorders' },
    { name: 'Personality disorders and related traits' },
    { name: 'Paraphilic disorders' },
    { name: 'Factitious disorders' },
    { name: 'Neurocognitive disorders' },
    { name: 'Mental or behavioural disorders associated with pregnancy, childbirth or the puerperium' },
    { name: '6E40 Psychological or behavioural factors affecting disorders or diseases classified elsewhere' },
    { name: 'Secondary mental or behavioural syndromes associated with disorders or diseases classified elsewhere' },
    { name: '07 Sleep-wake disorders' },
    { name: 'Sexual dysfunctions' },
    { name: 'Gender incongruence' },
    { name: '6E8Y Other specified mental, behavioural or neurodevelopmental disorders' },
    { name: '6E8Z Mental, behavioural or neurodevelopmental disorders, unspecified' },
    { name: "Sleep-wake disorders" },
    { name: "Insomnia disorders" },
    { name: 'Hypersomnolence disorders' },
    { name: 'Sleep-related breathing disorders' },
    { name: 'Circadian rhythm sleep-wake disorders' },
    { name: 'Sleep-related movement disorders' },
    { name: 'Parasomnia disorders' },
    { name: "7B2Y Other specified sleep-wake disorders" },
    { name: "7B2Z Sleep-wake disorders, unspecified" },
    { name: "Diseases of the nervous system" },
    { name: "Movement disorders" },
    { name: 'Disorders with neurocognitive impairment as a major feature' },
    { name: 'Multiple sclerosis or other white matter disorders' },
    { name: 'Epilepsy or seizures' },
    { name: 'Headache disorders' },
    { name: 'Cerebrovascular diseases' },
    { name: 'Spinal cord disorders excluding trauma' },
    { name: 'Motor neuron diseases or related disorders' },
    { name: 'Disorders of nerve root, plexus or peripheral nerves' },
    { name: 'Diseases of neuromuscular junction or muscle' },
    { name: 'Cerebral palsy' },
    { name: 'Nutritional or toxic disorders of the nervous system' },
    { name: 'Disorders of cerebrospinal fluid pressure or flow' },
    { name: 'Disorders of autonomic nervous system' },
    { name: 'Human prion diseases' },
    { name: 'Disorders of consciousness' },
    { name: 'Other disorders of the nervous system' },
    { name: 'Postprocedural disorders of the nervous system' },
    { name: 'Injuries of the nervous system' },
    { name: 'Neoplasms of the nervous system' },
    { name: 'Structural developmental anomalies of the nervous system' },
    { name: 'LD20 Syndromes with central nervous system anomalies as a major feature' },
    { name: 'Non-viral and unspecified infections of the central nervous system' },
    { name: 'Symptoms, signs or clinical findings of the nervous system' },
    { name: 'Paralytic symptoms' },
    { name: '6B60 Dissociative neurological symptom disorder' },
    { name: 'JB64.3 Diseases of the nervous system complicating pregnancy, childbirth or the puerperium' },
    { name: '8E7Y Other specified diseases of the nervous system' },
    { name: '8E7Z Diseases of the nervous system, unspecified' },
    { name: "Diseases of the visual system" },
    { name: "Disorders of the ocular adnexa or orbit" },
    { name: 'Disorders of the eyeball - anterior segment' },
    { name: 'Disorders of the eyeball - posterior segment' },
    { name: 'Disorders of the eyeball affecting both anterior and posterior segments' },
    { name: 'Disorders of the visual pathways or centres' },
    { name: 'Glaucoma or glaucoma suspect' },
    { name: 'Strabismus or ocular motility disorders' },
    { name: 'Disorders of refraction or accommodation' },
    { name: 'Postprocedural disorders of eye or ocular adnexa' },
    { name: 'Impairment of visual functions' },
    { name: 'Vision impairment ' },
    { name: 'Neoplasms of the eye or ocular adnexa' },
    { name: 'Reasons for contact with the health care system in relation to eyes or vision' },
    { name: 'NA06.9 Contusion of eyeball or orbital tissues' },
    { name: 'ND70.2 Foreign body in multiple parts of external eye' },
    { name: 'EC23.20 Oculocutaneous albinism' },
    { name: 'NA06.8 Traumatic injury to eyeball' },
    { name: 'KA41 Birth injury to eye' },
    { name: '1A60.2 Late congenital syphilitic oculopathy' },
    { name: 'Symptoms, signs or clinical findings of the visual system' },
    { name: 'Structural developmental anomalies of the eye, eyelid or lacrimal apparatus' },
    { name: '9E1Y Other specified diseases of the visual system' },
    { name: '9E1Z Diseases of the visual system, unspecified' },
    { name: "Diseases of the ear or mastoid process" },
    { name: "Diseases of external ear" },
    { name: 'Diseases of middle ear or mastoid' },
    { name: 'Diseases of inner ear ' },
    { name: 'Disorders with hearing impairment' },
    { name: 'Disorders of ear, not elsewhere classified' },
    { name: 'Postprocedural disorders of ear or mastoid process' },
    { name: 'Structural developmental anomalies of the ear' },
    { name: 'Symptoms, signs or clinical findings of ear or mastoid process' },
    { name: 'AC0Y Other specified diseases of the ear or mastoid process' },
    { name: 'AC0Z Diseases of the ear or mastoid process, unspecified' },
    { name: "Diseases of the circulatory system " },
    { name: 'Hypertensive diseases' },
    { name: 'Hypotension' },
    { name: 'Ischaemic heart diseases' },
    { name: 'Diseases of coronary artery' },
    { name: 'Pulmonary heart disease or diseases of pulmonary circulation' },
    { name: 'Pericarditis' },
    { name: 'Acute or subacute endocarditis' },
    { name: 'Heart valve diseases' },
    { name: 'BC20 Chronic rheumatic heart diseases, not elsewhere classified' },
    { name: 'Diseases of the myocardium or cardiac chambers ' },
    { name: 'Cardiac arrhythmia' },
    { name: 'Heart failure' },
    { name: 'Diseases of arteries or arterioles' },
    { name: 'Diseases of veins' },
    { name: 'Disorders of lymphatic vessels or lymph nodes' },
    { name: 'Postprocedural disorders of circulatory system' },
    { name: 'Neoplasms of the circulatory system' },
    { name: 'Developmental anomalies of the circulatory system' },
    { name: 'Infections of the circulatory system' },
    { name: 'Symptoms, signs or clinical findings of the circulatory system ' },
    { name: 'Cerebrovascular diseases' },
    { name: 'Functional vascular disorders of the skin' },
    { name: 'JB64.4 Diseases of the circulatory system complicating pregnancy, childbirth or the puerperium ' },
    { name: 'BE2Y Other specified diseases of the circulatory system' },
    { name: 'BE2Z Diseases of the circulatory system, unspecified' },
    { name: "Diseases of the respiratory system " },
    { name: 'Upper respiratory tract disorders' },
    { name: 'Certain lower respiratory tract diseases' },
    { name: 'Lung infections' },
    { name: 'Lung diseases due to external agents' },
    { name: 'Respiratory diseases principally affecting the lung interstitium ' },
    { name: 'Pleural, diaphragm or mediastinal disorders' },
    { name: 'CB40 Certain diseases of the respiratory system' },
    { name: 'CB41 Respiratory failure' },
    { name: 'Postprocedural disorders of the respiratory system' },
    { name: 'Neoplasms of the respiratory system' },
    { name: 'Developmental respiratory diseases' },
    { name: 'Symptoms, signs or clinical findings of the respiratory system' },
    { name: 'Pulmonary heart disease or diseases of pulmonary circulation' },
    { name: 'Sleep-related breathing disorders ' },
    { name: 'JB64.5 Diseases of the respiratory system complicating pregnancy, childbirth or the puerperium' },
    { name: 'CB7Z Diseases of the respiratory system, unspecified ' },
    { name: "Diseases of the digestive system" },
    { name: 'Diseases or disorders of orofacial complex' },
    { name: 'Diseases of oesophagus' },
    { name: 'Diseases of the stomach or the duodenum' },
    { name: 'Diseases of small intestine' },
    { name: 'Diseases of appendix' },
    { name: 'Diseases of large intestine' },
    { name: 'Diseases of anal canal' },
    { name: 'Diseases of liver' },
    { name: 'Diseases of gallbladder or biliary tract ' },
    { name: 'Diseases of pancreas ' },
    { name: 'Diseases of peritoneum' },
    { name: 'Diverticular disease of intestine' },
    { name: 'Ischaemic vascular disorders of intestine' },
    { name: 'Hernias' },
    { name: 'Inflammatory bowel diseases' },
    { name: 'Functional gastrointestinal disorders' },
    { name: 'Postprocedural disorders of digestive system' },
    { name: 'Digestive system disorders of fetus or newborn ' },
    { name: 'Symptoms, signs or clinical findings of the digestive system or abdomen' },
    { name: 'Structural developmental anomalies of the digestive tract ' },
    { name: 'JB64.6 Diseases of the digestive system complicating pregnancy, childbirth or the puerperium' },
    { name: 'DE2Y Other specified diseases of the digestive system' },
    { name: 'DE2Z Diseases of the digestive system, unspecified' },
    { name: "Diseases of the skin" },
    { name: 'Certain skin disorders attributable to infection or infestation' },
    { name: 'Inflammatory dermatoses ' },
    { name: 'Metabolic and nutritional disorders affecting the skin' },
    { name: 'Genetic and developmental disorders affecting the skin' },
    { name: 'Sensory and psychological disorders affecting the skin' },
    { name: 'Skin disorders involving specific cutaneous structures' },
    { name: 'Skin disorders involving certain specific body regions' },
    { name: 'Skin disorders associated with pregnancy, the neonatal period and infancy' },
    { name: 'Adverse cutaneous reactions to medication ' },
    { name: 'Skin disorders provoked by external factors' },
    { name: 'Benign proliferations, neoplasms and cysts of the skin' },
    { name: 'Disorders of the skin of uncertain or unpredictable malignant potential' },
    { name: 'Cutaneous markers of internal disorders ' },
    { name: 'Postprocedural disorders of the skin' },
    { name: 'Malignant neoplasms involving the skin' },
    { name: 'NE81.00 Haematoma of surgical wound of skin' },
    { name: 'NE81.20 Superficial incisional site infection ' },
    { name: 'KC50 Neonatal phototherapy burn' },
    { name: 'Symptoms or signs involving the skin' },
    { name: 'EM0Y Other specified diseases of the skin' },
    { name: 'EM0Z Skin disease of unspecified nature ' },
    { name: "Diseases of the musculoskeletal system or connective tissue " },
    { name: 'Arthropathies' },
    { name: 'Conditions associated with the spine ' },
    { name: 'Soft tissue disorders' },
    { name: 'Osteopathies or chondropathies' },
    { name: 'FC00 Certain specified acquired deformities of musculoskeletal system or connective tissue, not elsewhere classified' },
    { name: 'FC01 Postprocedural disorders of the musculoskeletal system' },
    { name: 'Neoplasms of the musculoskeletal system' },
    { name: '4A60 Monogenic autoinflammatory syndromes' },
    { name: 'Nonorgan specific systemic autoimmune disorders' },
    { name: 'Symptoms, signs or clinical findings of the musculoskeletal system' },
    { name: 'Structural developmental anomalies of the skeleton' },
    { name: 'LD28 Syndromes with connective tissue involvement as a major feature' },
    { name: 'LD24 Syndromes with skeletal anomalies as a major feature' },
    { name: 'FC0Y Other specified diseases of the musculoskeletal system or connective tissue' },
    { name: 'FC0Z Diseases of the musculoskeletal system or connective tissue, unspecified' },
    { name: "Diseases of the genitourinary system" },
    { name: 'Diseases of the female genital system' },
    { name: 'Diseases of the male genital system ' },
    { name: 'Disorders of breast' },
    { name: 'Diseases of the urinary system' },
    { name: 'Other conditions of the genitourinary system' },
    { name: 'Postprocedural disorders of genitourinary system' },
    { name: 'Contact with health services for reasons associated with reproduction' },
    { name: 'Predominantly sexually transmitted infections' },
    { name: 'Symptoms, signs or clinical findings of the genitourinary system' },
    { name: 'GC8Y Other specified diseases of the genitourinary system' },
    { name: 'GC8Z Diseases of the genitourinary system, unspecified' },
    { name: "Conditions related to sexual health" },
    { name: 'Sexual dysfunctions' },
    { name: 'Sexual pain disorders' },
    { name: 'HA40 Aetiological considerations in sexual dysfunctions and sexual pain disorder' },
    { name: 'Gender incongruence' },
    { name: 'Changes in female genital anatomy' },
    { name: 'Changes in male genital anatomy' },
    { name: 'Paraphilic disorders' },
    { name: '5A71 Adrenogenital disorders' },
    { name: 'Predominantly sexually transmitted infections ' },
    { name: 'QA21 Contact with health services for contraceptive management' },
    { name: 'HA8Y Other specified conditions related to sexual health' },
    { name: 'HA8Z Conditions related to sexual health, unspecified' },
    { name: "Pregnancy, childbirth or the puerperium" },
    { name: 'Abortive outcome of pregnancy' },
    { name: 'Oedema, proteinuria, or hypertensive disorders in pregnancy, childbirth, or the puerperium' },
    { name: 'Obstetric haemorrhage' },
    { name: 'Certain specified maternal disorders predominantly related to pregnancy' },
    { name: 'Maternal care related to the fetus, amniotic cavity or possible delivery problems' },
    { name: 'Complications of labour or delivery' },
    { name: 'Delivery' },
    { name: 'Complications predominantly related to the puerperium' },
    { name: 'Certain obstetric conditions, not elsewhere classified' },
    { name: 'Gestational trophoblastic diseases' },
    { name: 'Contact with health services for reasons associated with reproduction' },
    { name: "Certain conditions originating in the perinatal period" },
    { name: 'Fetus or newborn affected by maternal factors or by complications of pregnancy, labour or delivery' },
    { name: 'Disorders of newborn related to length of gestation or fetal growth' },
    { name: 'Birth injury' },
    { name: 'Infections of the fetus or newborn' },
    { name: 'Haemorrhagic or haematological disorders of fetus or newborn' },
    { name: 'Neurological disorders specific to the perinatal or neonatal period' },
    { name: 'Respiratory disorders specific to the perinatal or neonatal period' },
    { name: 'Cardiovascular disorders present in the perinatal or neonatal period' },
    { name: 'Transitory endocrine or metabolic disorders specific to fetus or newborn' },
    { name: 'Digestive system disorders of fetus or newborn ' },
    { name: 'Genitourinary system disorders specific to the perinatal or neonatal period' },
    { name: 'Disorders involving the integument of fetus or newborn' },
    { name: 'Disturbances of temperature regulation of newborn' },
    { name: 'Certain disorders originating in the perinatal period' },
    { name: 'KD5Z Conditions originating in the perinatal or neonatal period, unspecified  ' },
    { name: "Developmental anomalies" },
    { name: 'Structural developmental anomalies primarily affecting one body system' },
    { name: 'Multiple developmental anomalies or syndromes' },
    { name: 'Chromosomal anomalies, excluding gene mutations ' },
    { name: 'LD90 Conditions with disorders of intellectual development as a relevant clinical feature' },
    { name: 'LD9Y Other specified developmental anomalies' },
    { name: 'LD9Z Developmental anomalies, unspecified' },
    { name: "Symptoms, signs or clinical findings, not elsewhere classified" },
    { name: 'Symptoms, signs or clinical findings of blood, blood-forming organs, or the immune system ' },
    { name: 'Symptoms, signs or clinical findings of endocrine, nutritional or metabolic diseases' },
    { name: 'Symptoms, signs or clinical findings of speech or voice' },
    { name: 'Mental or behavioural symptoms, signs or clinical findings' },
    { name: 'Symptoms, signs or clinical findings of the nervous system' },
    { name: 'Symptoms, signs or clinical findings of the visual system' },
    { name: 'Symptoms, signs or clinical findings of ear or mastoid process' },
    { name: 'Symptoms, signs or clinical findings of the circulatory system' },
    { name: 'Symptoms, signs or clinical findings of the respiratory system' },
    { name: 'Symptoms, signs or clinical findings of the digestive system or abdomen' },
    { name: 'Symptoms, signs or clinical findings involving the skin' },
    { name: 'Symptoms, signs or clinical findings of the musculoskeletal system' },
    { name: 'Symptoms, signs or clinical findings of the genitourinary system' },
    { name: 'General symptoms, signs or clinical findings' },
    { name: 'Ill-defined and unknown causes of mortality' },
    { name: 'MH2Y Other specified symptoms, signs or clinical findings, not elsewhere classified' },
    { name: "Injury, poisoning or certain other consequences of external causes  " },
    { name: 'Injuries to the head' },
    { name: 'Injuries to the neck' },
    { name: 'Injuries to the thorax' },
    { name: 'Injuries to the abdomen, lower back, lumbar spine or pelvis' },
    { name: 'Injuries to the shoulder or upper arm' },
    { name: 'Injuries to the elbow or forearm' },
    { name: 'Injuries to the wrist or hand' },
    { name: 'Injuries to the hip or thigh' },
    { name: 'Injuries to the knee or lower leg' },
    { name: 'Injuries to the ankle or foot' },
    { name: 'Injuries involving multiple body regions' },
    { name: 'Injuries to unspecified part of trunk, limb or body region' },
    { name: 'Effects of foreign body entering through natural orifice' },
    { name: 'Burns' },
    { name: 'Frostbite' },
    { name: 'Harmful effects of substances' },
    { name: 'Injury or harm arising from surgical or medical care, not elsewhere classified' },
    { name: 'Other or unspecified effects of external causes' },
    { name: 'NF2Y Other specified injury, poisoning or certain other consequences of external causes' },
    { name: 'NF2Z Unspecified injury, poisoning or certain other consequences of external causes' },
    { name: "External causes of morbidity or mortality" },
    { name: 'Unintentional causes' },
    { name: 'Intentional self-harm' },
    { name: 'Assault' },
    { name: 'Undetermined intent' },
    { name: 'Exposure to extreme forces of nature' },
    { name: 'Maltreatment' },
    { name: 'Legal intervention' },
    { name: 'Armed conflict' },
    { name: 'Causes of healthcare related harm or injury' },
    { name: 'PL2Y Other specified external causes of morbidity or mortality' },
    { name: 'PL2Z External causes of morbidity or mortality, unspecified' },
    { name: "Factors influencing health status or contact with health services" },
    { name: 'Reasons for contact with the health services ' },
    { name: 'Factors influencing health status ' },
    { name: 'QF4Y Other specified factors influencing health status or contact with health services' },
    { name: 'QF4Z Factors influencing health status or contact with health services, unspecified' },
    { name: "Codes for special purposes" },
    { name: 'International provisional assignment of new diseases of uncertain aetiology and emergency use' },
    { name: 'National provisional assignment of new diseases of uncertain aetiology' },
    { name: "Supplementary Chapter Traditional Medicine Conditions - Module I " },
    { name: 'Traditional medicine disorders (TM1)' },
    { name: 'Traditional medicine patterns (TM1)' },
    { name: 'SJ3Y Other specified supplementary Chapter Traditional Medicine Conditions - Module I ' },
    { name: 'SJ3Z Supplementary Chapter Traditional Medicine Conditions - Module I, unspecified' },
    { name: "Supplementary section for functioning assessment " },
    { name: 'WHODAS 2.0 36-item version' },
    { name: 'Brief Model Disability Survey' },
    { name: 'Generic functioning domains' },
    { name: "Extension Codes" },
    { name: 'Severity Scale Value' },
    { name: 'Temporality' },
    { name: 'Aetiology' },
    { name: 'Topology Scale Value' },
    { name: 'Anatomy and topography' },
    { name: 'Histopathology ' },
    { name: 'Dimensions of injury' },
    { name: 'Dimensions of external causes' },
    { name: 'Consciousness' },
    { name: 'Substances' },
    { name: 'Diagnosis code descriptors' },
    { name: 'Capacity or context' },
    { name: 'Health Devices, Equipment and Supplies' },
    { name: 'Extension codes of particular relevance to skin diseases' },
    { name: "None" },
    { name: "Certain infectious and parasitic diseases" },
    { name: 'Neoplasms' },
    { name: 'Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism' },
    { name: 'Endocrine, nutritional and metabolic diseases' },
    { name: 'Mental, Behavioral and Neurodevelopmental disorders' },
    { name: 'Diseases of the nervous system' },
    { name: 'Diseases of the eye and adnexa' },
    { name: 'Diseases of the ear and mastoid process' },
    { name: 'Diseases of the circulatory system' },
    { name: 'Diseases of the respiratory system' },
    { name: 'Diseases of the digestive system' },
    { name: 'Diseases of the skin and subcutaneous tissue' },
    { name: 'Diseases of the musculoskeletal system and connective tissue' },
    { name: 'Diseases of the genitourinary system' },
    { name: 'Pregnancy, childbirth and the puerperium' },
    { name: 'Certain conditions originating in the perinatal period' },
    { name: 'Congenital malformations, deformations and chromosomal abnormalities' },
    { name: 'Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified' },
    { name: 'Injury, poisoning and certain other consequences of external causes' },
    { name: 'Codes for special purposes' },
    { name: 'External causes of morbidity' },
    { name: 'Factors influencing health status and contact with health services' },
]

export default icd11List