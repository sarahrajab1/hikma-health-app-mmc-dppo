import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from '../components/Login';
import PatientList from '../components/PatientList';
import NewPatient from '../components/NewPatient';
import PatientView from '../components/PatientView';
import NewVisit from '../components/NewVisit';
import Covid19Form from '../components/Covid19Form';
import EditPatient from '../components/EditPatient';
import OpenTextEvent from '../components/OpenTextEvent';
import EditOpenTextEvent from '../components/EditOpenTextEvent';
import Vitals from '../components/Vitals';
import VisitList from '../components/VisitList';
import EventList from '../components/EventList';
import EditVitals from '../components/EditVitals';
import MedicalHistory from '../components/MedicalHistory';
import Examination from '../components/Examination';
import Physiotherapy from '../components/Physiotherapy';
import Medicine from '../components/Medicine';
import EditExamination from '../components/EditExamination';
import EditMedicalHistory from '../components/EditMedicalHistory';
import EditPhysiotherapy from '../components/EditPhysiotherapy';
import EditMedicine from '../components/EditMedicine';
import SnapshotList from '../components/SnapshotList';
import DmHistory from '../components/DmHistory';
import EditDmHistory from '../components/EditDmHistory'
import ClinicalExamination from '../components/ClinicalExamination'
import EditClinicalExamination from '../components/EditClinicalExamination'
import EndocrinologistCases from '../components/EndocrinologistCases'
import EditEndocrinologistCases from '../components/EditEndocrinologistCases'
import FootCareExamination from '../components/FootCareExamination'
import EditFootCareExamination from '../components/EditFootCareExamination'
import OphthalmologyExamination from '../components/OphthalmologyExamination'
import EditOphthalmologyExamination from '../components/EditOphthalmologyExamination'
import Referrals from '../components/Referrals'
import EditReferrals from '../components/EditReferrals'
import LabInvestigation from '../components/LabInvestigation'
import EditLabInvestigation from '../components/EditLabInvestigation'

const rootNavigator = createStackNavigator(
  {
    Home: {
      screen: Login,
      navigationOptions: () => ({
        title: `Login`,
        header: null,
      })
    },
    PatientList: {
      screen: PatientList,
      navigationOptions: () => ({
        title: `PatientList`,
        header: null,
      })
    },
    NewPatient: {
      screen: NewPatient,
      navigationOptions: () => ({
        title: `NewPatient`,
        header: null,
      })
    },
    PatientView: {
      screen: PatientView,
      navigationOptions: () => ({
        title: `PatientView`,
        header: null,
      })
    },
    EditPatient: {
      screen: EditPatient,
      navigationOptions: () => ({
        title: `EditPatient`,
        header: null,
      })
    },
    NewVisit: {
      screen: NewVisit,
      navigationOptions: () => ({
        title: `NewVisit`,
        header: null,
      })
    },
    Covid19Form: {
      screen: Covid19Form,
      navigationOptions: () => ({
        title: `Covid19Form`,
        header: null
      })
    },
    OpenTextEvent: {
      screen: OpenTextEvent,
      navigationOptions: () => ({
        title: `OpenTextEvent`,
        header: null
      })
    },
    EditOpenTextEvent: {
      screen: EditOpenTextEvent,
      navigationOptions: () => ({
        title: `EditOpenTextEvent`,
        header: null
      })
    },
    Vitals: {
      screen: Vitals,
      navigationOptions: () => ({
        title: `Vitals`,
        header: null
      })
    },
    EditVitals: {
      screen: EditVitals,
      navigationOptions: () => ({
        title: `EditVitals`,
        header: null
      })
    },
    MedicalHistory: {
      screen: MedicalHistory,
      navigationOptions: () => ({
        title: `MedicalHistory`,
        header: null
      })
    },
    EditMedicalHistory: {
      screen: EditMedicalHistory,
      navigationOptions: () => ({
        title: `EditMedicalHistory`,
        header: null
      })
    },
    Examination: {
      screen: Examination,
      navigationOptions: () => ({
        title: `Examination`,
        header: null
      })
    },
    EditExamination: {
      screen: EditExamination,
      navigationOptions: () => ({
        title: `EditExamination`,
        header: null
      })
    },
    Physiotherapy: {
      screen: Physiotherapy,
      navigationOptions: () => ({
        title: `Physiotherapy`,
        header: null
      })
    },
    EditPhysiotherapy: {
      screen: EditPhysiotherapy,
      navigationOptions: () => ({
        title: `EditPhysiotherapy`,
        header: null
      })
    },
    Medicine: {
      screen: Medicine,
      navigationOptions: () => ({
        title: `Medicine`,
        header: null
      })
    },
    EditMedicine: {
      screen: EditMedicine,
      navigationOptions: () => ({
        title: `EditMedicine`,
        header: null
      })
    },
    VisitList: {
      screen: VisitList,
      navigationOptions: () => ({
        title: `VisitList`,
        header: null
      })
    },
    EventList: {
      screen: EventList,
      navigationOptions: () => ({
        title: `EventList`,
        header: null
      })
    },
    SnapshotList: {
      screen: SnapshotList,
      navigationOptions: () => ({
        title: `SnapshotList`,
        header: null
      })
      },
      DmHistory: {
        screen: DmHistory,
        navigationOptions: () => ({
          title: `DmHistory`,
          header: null
        })
      },
      EditDmHistory: {
        screen: EditDmHistory,
        navigationOptions: () => ({
          title: `EditDmHistory`,
          header: null
        })
      },
      ClinicalExamination: {
        screen: ClinicalExamination,
        navigationOptions: () => ({
          title: `ClinicalExamination`,
          header: null
        })
      },
      EditClinicalExamination: {
        screen: EditClinicalExamination,
        navigationOptions: () => ({
          title: `EditClinicalExamination`,
          header: null
        })
      },
      EndocrinologistCases: {
        screen: EndocrinologistCases,
        navigationOptions: () => ({
          title: `EndocrinologistCases`,
          header: null
        })
      },
      EditEndocrinologistCases: {
        screen: EditEndocrinologistCases,
        navigationOptions: () => ({
          title: `EditEndocrinologistCases`,
          header: null
        })
      },
      FootCareExamination: {
        screen: FootCareExamination,
        navigationOptions: () => ({
          title: `FootCareExamination`,
          header: null
        })
      },
      EditFootCareExamination: {
        screen: EditFootCareExamination,
        navigationOptions: () => ({
          title: `EditFootCareExamination`,
          header: null
        })
      },
      OphthalmologyExamination: {
        screen: OphthalmologyExamination,
        navigationOptions: () => ({
          title: `OphthalmologyExamination`,
          header: null
        })
      },
      EditOphthalmologyExamination: {
        screen: EditOphthalmologyExamination,
        navigationOptions: () => ({
          title: `EditOphthalmologyExamination`,
          header: null
        })
      },
      FootCareExamination: {
        screen: FootCareExamination,
        navigationOptions: () => ({
          title: `FootCareExamination`,
          header: null
        })
      },
      EditFootCareExamination: {
        screen: EditFootCareExamination,
        navigationOptions: () => ({
          title: `EditFootCareExamination`,
          header: null
        })
      },
      Referrals: {
        screen: Referrals,
        navigationOptions: () => ({
          title: `Referrals`,
          header: null
        })
      },
      EditReferrals: {
        screen: EditReferrals,
        navigationOptions: () => ({
          title: `EditReferrals`,
          header: null
        })
      },
      LabInvestigation: {
        screen: LabInvestigation,
        navigationOptions: () => ({
          title: `LabInvestigation`,
          header: null
        })
      },
      EditLabInvestigation: {
        screen: EditLabInvestigation,
        navigationOptions: () => ({
          title: `EditLabInvestigation`,
          header: null
        })
      },
  },
  {
    initialRouteName: 'Home'
  });

export default createAppContainer(rootNavigator);