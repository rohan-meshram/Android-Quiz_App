import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

import {useNavigation} from '@react-navigation/native'

export default function Splash() {

    const navigation = useNavigation();

useEffect(() => {
    setTimeout(() => {
        timer();
    }, 2000)
})

const timer = (() => {
    navigation.navigate('Home')
}) 

  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  )
}