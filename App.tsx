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

// Screens

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigatorLayout from './src/navigatorFolder/HomeNavigatorLayout';
import { myColor } from './src/constant/color';
import DetailsScreen from './src/screenFolder/DetailScreen';

// step 1 crate bottom tab navigator below 
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <View style={styles.container}>
    <NavigationContainer>
{/* // step 2 bootm tab nav - create tab navigator tag and tab.screen */}
<Tab.Navigator>

  {/* //bottom tab screen go back to home screen */}
<Tab.Screen
  name={"Home"}
  // Home navigator come from file in navigation folder
  component={HomeNavigatorLayout}
  // we need word home to navigate to homscreen - to hide we use option
  options={{ headerShown: false }}
/>
<Tab.Screen
  name={"Details"}
  // Home navigator come from file in navigation folder
  component={DetailsScreen}
  // we need word home to navigate to homscreen - to hide we use option
  options={{ headerShown: false }}
/>

</Tab.Navigator>

      {/* below only connect screen not include bottom tab */}
      {/* <Stack.Navigator
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
          options={{headerLeft: () =>  <Text style={{ fontFamily: 'Monoton-Regular', fontSize: 30,width:500, color: "green", paddingTop:5, paddingLeft:10, fontWeight:'bold' }}>
  Roam
         </Text>}}
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
      </Stack.Navigator> */}


    </NavigationContainer>
   </View>
  );
};

// Stack containing your actual screens

export default App;

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
