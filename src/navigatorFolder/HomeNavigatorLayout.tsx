import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

// Screens

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screenFolder/HomeScreen';
import DetailsScreen from '../screenFolder/DetailScreen';
import RegisterScreen from '../screenFolder/RegisterScreen';
import LoginScreen from '../screenFolder/LoginScreen';
import ProductScreen from '../screenFolder/ProductScreen';
import InsuranceProtectionScreen from '../screenFolder/InsuranceProtectionScreen';
import ExtraServiceScreen from '../screenFolder/ExtraServiceScreen';

import BackScreen1 from '../screenFolder/BackScreen1';
import BackScreen2 from '../screenFolder/BackScreen2';
import { myColor } from '../constant/color';
import { getFontFamily } from '../constant/fonts';
import FinalScreen from '../screenFolder/FinalScreen';

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
  finalScreenKey: 'FinalScreen',
};

const CustomHeader = ({navigation}: any) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.arrowHeader}
        onPress={() => navigation.canGoBack() && navigation.goBack()}>
        <Icon name="chevron-left" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const HomeNavigatorLayout = () => {
  return (
    <View style={styles.container}>

{/* // step 2 bootm tab nav - create tab navigator tag and tab.screen */}
      {/* below only connect screen not include bottom tab */}
      <Stack.Navigator
        // initialRouteName={screen.home}
        screenOptions={({navigation}) => ({
          headerLeft: () => <CustomHeader navigation={navigation} />,
          headerTitle: '',
          // below change color header arrow back screen
          // headerStyle: {backgroundColor: "red"},

          //below remove boder out from the header
          headerStyle: {
            borderBottomWidth: 0,
            shadowOpacity: 0,
            elevation: 0,
          },
          //chnage all screen background color to cardStyle-- below
          cardStyle: {backgroundColor: '#fff', paddingTop:5},
  

        })}>
        <Stack.Screen
          name={screen.home}
          component={HomeScreen}
          //we put logo on option
          options={{headerLeft: () =>  <Text style={{ fontFamily: 'Monoton-Regular', fontSize: 30,width:500, color: "green", paddingBottom:2, paddingLeft:10}}>
  Roam
         </Text>}}
        />
        <Stack.Screen name={screen.details} component={DetailsScreen} />
        <Stack.Screen name={screen.register} component={RegisterScreen} />
        <Stack.Screen name={screen.login} component={LoginScreen} />
        <Stack.Screen name={screen.productscreen} component={ProductScreen} />
        <Stack.Screen
          name={screen.insuranceScreen}
          component={InsuranceProtectionScreen}
        />
        <Stack.Screen
          name={screen.extraServiceScreen}
          component={ExtraServiceScreen}
        />

        <Stack.Screen name={screen.backScreen1} component={BackScreen1} />
        <Stack.Screen name={screen.backScreen2} component={BackScreen2} />
        <Stack.Screen name={screen.finalScreenKey} component={FinalScreen} />
      </Stack.Navigator>
 
   </View>
  );
};

// Stack containing your actual screens

export default HomeNavigatorLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    height: 50,
    paddingTop: 20,
    marginBottom: 20,
    marginLeft: 10,

  },
  headerTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 16,
  },
  arrowHeader: {
    width: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: myColor.darkYellow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigatorContainer: {
    flex: 1,
  },
});
