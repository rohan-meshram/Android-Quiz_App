import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../components/Title'

import { useNavigation } from '@react-navigation/native'

const Categories = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Title titleText='Select Quiz Type' />
            <View style={styles.boxButton}>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={{backgroundColor: '#1A759F', padding: 10, borderRadius: 10}}>
                        <Text style={styles.inputText}>Geography Medium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Geo_Hard')} style={{backgroundColor: '#1A759F', padding: 10, borderRadius: 10}}>
                        <Text style={styles.inputText}>Geography Hard</Text>
                    </TouchableOpacity>
                </View> 
            </View>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B5E48C'
    },
    boxButton: {
       // flexDirection: 'row',
        height: '100%'
    },
    inputText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'JosefinSans-Regular'
    },
    button: {
        //width: '60%',
        // marginLeft: 3,
        // marginRight: 3,
         justifyContent: 'space-between',
        // backgroundColor: '#1A759F',
        // paddingHorizontal: 20,
        flexDirection: 'row',
        padding: 16
    }
})