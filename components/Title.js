import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Title({titleText}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titleText}</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
    container: {
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 44,
      //  fontWeight: 'bold',
        color: '#184E77',
        fontFamily: 'JosefinSans-Bold'
    }
})