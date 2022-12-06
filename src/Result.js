import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../components/Title'

import {useNavigation} from '@react-navigation/native'

const Result = ({route}) => {

 const {score} = route.params
 //console.log(params);   

const navigation = useNavigation();

const resultBanner = score > 40 ? "https://cdni.iconscout.com/illustration/premium/thumb/boy-celebrating-victory-6596271-5599591.png" 
: "https://cdni.iconscout.com/illustration/premium/thumb/businessman-dealing-with-business-failure-5623858-4678583.png"

    return (
        <View style={styles.container}>
        <Title titleText='Result'/>
        <Text style={styles.scoreValue}>{score}</Text>
        <View style={styles.bannerContainer}>
            <Image 
            source={{uri:resultBanner }}
           
            style={styles.banner}
            resizeMode='contain'
            />
        </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
                    <Text style={{color: 'white', fontFamily: 'JosefinSans-Regular', fontSize: 24}}>Go to Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Result

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300
    },
    bannerContainer: {
        justifyContent:'center',
        alignItems: 'center',
        flex: 1
    },
    button: {
        padding: 12,
        paddingHorizontal: 16,
        backgroundColor: '#1A759F',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 20,
        width: '60%',
        alignSelf: 'center',
        marginBottom: 50
    },
    container: {
        paddingHorizontal: 20,
        height: '100%',
        backgroundColor: '#52B69A'
    },
    scoreValue: {
        color: '#184E77',
        fontFamily: 'JosefinSans-Bold',
        fontSize: 33,
        alignSelf: 'center'
    }
})