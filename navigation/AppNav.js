import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react';


import Home from '../src/Home';
import Quiz from '../Different Quizs/Geography_Medium';
import Result from '../src/Result';
import Splash from '../src/Splash';
import Categories from '../src/Categories';
import Geography_Hard from '../Different Quizs/Geography_Hard';

const Stack = createStackNavigator();

function AppNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen name="Categories" component={Categories} options={{headerShown: false}}/>
                <Stack.Screen name="Quiz" component={Quiz} options={{headerShown: false}}/>
                <Stack.Screen name="Geo_Hard" component={Geography_Hard} options={{headerShown: false}}/>
                <Stack.Screen name="Result" component={Result} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AppNav