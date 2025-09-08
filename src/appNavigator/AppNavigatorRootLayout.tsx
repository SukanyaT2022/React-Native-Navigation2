import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const TabVar = createBottomTabNavigator();
const AppNavigatorRootLayout
 = () => {
  return (
<NavigationContainer>
  <TabVar.Navigator>
  
  <TabVar.Screen name="Home" component={View} />
  <TabVar.Screen name="Search" component={Text} />
    
  <TabVar.Screen name="Message" component={View} />
  <TabVar.Screen name="Profile" component={Text} />
  </TabVar.Navigator>
</NavigationContainer>
  )
}

export default AppNavigatorRootLayout


const styles = StyleSheet.create({})