import React from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';
import styles from '../Style';
import { LocalizedStrings } from '../../enums/LocalizedStrings';


const examinationRadioButtons = (props) => {
    return (
        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
            <Text style={{ color: '#FFFFFF', flex: 1, flexDirection: 'column', flexWrap: 'wrap' }}>{props.prompt}</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => props.action(!props.field)}>
                    <View style={styles.outerRadioButton}>
                        {props.field ? <View style={styles.selectedRadioButton} /> : null}
                    </View>
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF' }}>Normal</Text>

                <TouchableOpacity onPress={() => {
                    props.field === null ? props.action(false) : props.action(!props.field)
                }}>
                    <View style={styles.outerRadioButton}>
                        {(!props.field && props.field !== null) ? <View style={styles.selectedRadioButton} /> : null}
                    </View>
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF' }}>Abnormal</Text>
            </View>
        </View>
    )
}

export default examinationRadioButtons