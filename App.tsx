import 'react-native-gesture-handler'; // Make sure to import this at the top
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import HomeScreen from './src/screenFolder/HomeScreen';
import DetailsScreen from './src/screenFolder/DetailScreen';
import RegisterScreen from './src/screenFolder/RegisterScreen';
import LoginScreen from './src/screenFolder/LoginScreen';
import ConfirmScreen from './src/screenFolder/ConfirmScreen';
import Products from './src/screenFolder/ProductScreen';
import ProductScreen from './src/screenFolder/ProductScreen';
import InsuranceProtectionScreen from './src/screenFolder/InsuranceProtectionScreen';
import ExtraServiceOneMainBoxComp from './src/componentFolder/ExtraServiceOneMainBoxComp';
import ExtraServiceScreen from './src/screenFolder/ExtraServiceScreen';
import BackScreen1 from './src/screenFolder/BackScreen1';
import BackScreen2 from './src/screenFolder/BackScreen2';
import CheckoutScreen from './src/screenFolder/CheckoutScreen';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { myColor } from './src/constant/color';
const Stack = createStackNavigator();
export const screen = {
  home: 'Home',
  details: 'Details',
  register: 'Register',
  login: 'Login',
  confirm: 'Confirm',
  productscreen: 'ProductScreen',
  insuranceScreen: 'InsuranceProtectionScreen',
  extraServiceScreen: 'ExtraServiceScreen',
  checkout: 'CheckoutScreen',
  backScreen1: 'BackScreen1',
  backScreen2: 'BackScreen2',
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={screen.home}
         // {navigation}: any -- use it for move one screen to other sceen look line 42 and 43
        screenOptions={({navigation}) => ({
         
          headerLeft: () => (
            <TouchableOpacity style={styles.arrowHeader} onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={30} color= "white"/>
            </TouchableOpacity>
          ),
          headerTransparent: true,
          headerTitle: '',
          headerStyle: {height: 100},
        })}>
        {/* //options={{headerShown:false}} if donot want header on the screen*/}
        <Stack.Screen
          name={screen.home}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name={screen.details} component={DetailsScreen} />
        <Stack.Screen name={screen.register} component={RegisterScreen} />
        <Stack.Screen name={screen.login} component={LoginScreen} />
        <Stack.Screen name={screen.confirm} component={ConfirmScreen} />
        <Stack.Screen name={screen.productscreen} component={ProductScreen} />
        <Stack.Screen
          name={screen.insuranceScreen}
          component={InsuranceProtectionScreen}
        />
        <Stack.Screen
          name={screen.extraServiceScreen}
          component={ExtraServiceScreen}
        />
        <Stack.Screen name={screen.checkout} component={CheckoutScreen} />
        <Stack.Screen name={screen.backScreen1} component={BackScreen1} />
        <Stack.Screen name={screen.backScreen2} component={BackScreen2} />
      </Stack.Navigator>
      <View style={styles.spaceBtHeaderAndBody}>

      </View>
    </NavigationContainer>
  );
};

export default App;
const styles = StyleSheet.create({
  arrowHeader: {
    width: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: myColor.darkYellow,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
   
  },
  spaceBtHeaderAndBody: {
    height: 60,
    backgroundColor: 'transparent',
  },
});
