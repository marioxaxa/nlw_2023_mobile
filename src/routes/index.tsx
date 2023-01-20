import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppRoutes from './app.routes'



type Props = {}

const Routes = (props: Props) => {
  return (
    <View className='flex-1 bg-background'>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}

export default Routes