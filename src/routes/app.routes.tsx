
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const {Navigator, Screen} = createNativeStackNavigator()

import Home from '../screens/Home'
import Habit from '../screens/Habit'
import New from '../screens/New'

type Props = {}

const AppRoutes = (props: Props) => {
    return (
        <Navigator screenOptions={{headerShown: false}} >
            <Screen 
                name='home'
                component={Home}
            />
            <Screen 
                name='habit'
                component={Habit}
            />
            <Screen 
                name='new'
                component={New}
            />
        </Navigator>
    )
}

export default AppRoutes