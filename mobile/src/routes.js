import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const appstack = createStackNavigator();

import Incident from'./pages/incidents'
import Detail from './pages/detail'

export default function routes(){
    return(
        <NavigationContainer>
            <appstack.Navigator screenOptions={{ headerShown: false}}>
                
                <appstack.Screen name="Incidents" component={Incident}/>
                <appstack.Screen name="Detail" component={Detail}/>

            </appstack.Navigator>
        </NavigationContainer>
    )
}