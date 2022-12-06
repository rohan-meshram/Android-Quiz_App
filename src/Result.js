import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import {useNavigation} from '@react-navigation/native'

const Result = () => {

const navigation = useNavigation();

    return (
        <View>
            <View>
                <Text>Result</Text>
            </View>
            <View style={styles.bannerContainer}>
                <Image
                    source={{uri: 'https://cdni.iconscout.com/illustration/premium/thumb/q-and-a-services-3678714-3098907.png'}}
                    //source={require('../assets/images/banner.png')}
                    style={styles.banner}
                    resizeMode='contain'
                />
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text>Go to Home</Text>
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
        alignItems: 'center'
    }
})