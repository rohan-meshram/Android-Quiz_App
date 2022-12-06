import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import Title from '../components/Title'

import {useNavigation} from '@react-navigation/native'

const Home = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Title />
        <View style={styles.bannerContainer}>
            <Image 
            source={{uri: 'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png'}}
           // source={require('../assets/images/banner.png')}
            style={styles.banner}
            resizeMode='contain'
            />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Quiz')}
                            style={styles.button}>
            <Text style={{color: 'white', padding: 15, fontSize: 24, fontFamily: 'JosefinSans-Regular'}}>Start</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create ({
    container: {
        paddingHorizontal: 20,
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#52B69A'
    },
    bannerContainer: {
        justifyContent:'center',
        alignItems: 'center',
        flex: 1
    },
    banner: {
        height: 300,
        width: 300
    },
    button: {
        width: '75%',
        backgroundColor: '#1A759F',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 30
    }
})