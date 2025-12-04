import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CarIcon from 'react-native-vector-icons/AntDesign';
import UserIcon from 'react-native-vector-icons/AntDesign';
import HouseIcon from 'react-native-vector-icons/Feather';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

// Screens

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigatorLayout from './src/navigatorFolder/HomeNavigatorLayout';
import {myColor} from './src/constant/color';
import DetailsScreen from './src/screenFolder/DetailScreen';
import ProfileNavigatorLayout from './src/navigatorFolder/ProfileNavigatorLayout';
import BookingNavigatorLayout from './src/navigatorFolder/BookingNavigatorLayout';
import {Provider} from 'react-redux';
import store from './src/store';

// step 1 crate bottom tab navigator below
const Tab = createBottomTabNavigator();
// const toggleIconColorFunc = (focused: boolean) => {
//   return focused ? myColor.greenColor : myColor.darkYellow;
// }
const App = () => {
// all of code condition the same 34 to 37
  myColor?.borderColor; 
  // above if no border color execute
  myColor.iconColor ??'#ffcd05';
  myColor.darkYellow || '#FFCD06';
  myColor.greenColor ? '#0DB184' : '#000000';
  return (
    //wrape view with provider so that we can pass data from redux store
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          {/* // step 2 bootm tab nav - create tab navigator tag and tab.screen */}
          
          {/* increase paddint top at tab bar bottom navigation style */}
          <Tab.Navigator screenOptions={{tabBarStyle: {paddingTop: 10}}}>
            {/* //bottom tab screen go back to home screen */}
            <Tab.Screen
           
              name={'HomeTab'}
              // Home navigator come from file in navigation folder
              component={HomeNavigatorLayout}
              // we need word home to navigate to homscreen - to hide we use option
              options={{
              
                tabBarLabel(props) {
                  return null;
                },
                headerShown: false,
                tabBarIcon(props) {
          
                  return (
                    <HouseIcon name="home" size={25} color={ props.focused ? myColor.greenColor : myColor.iconColor} />
                  );
                  // <Text style={{color: props.color}}>🏠</Text>;
                },
              }}
            />
            <Tab.Screen
              name={'Profile Layout'}
              // Home navigator come from file in navigation folder
              component={ProfileNavigatorLayout}
              // we need word home to navigate to homscreen - to hide we use option
              options={{
                tabBarLabel(props) {
                  return null;
                },
                headerShown: false,
                tabBarIcon(props) {
                  return (
                    <UserIcon name="user" size={25} color={props.focused ? myColor.greenColor : myColor.iconColor} />
                  );
                  // <Text style={{color: props.color}}>🏠</Text>;
                },
              }}
            />
            <Tab.Screen
              name={'Booking Layout'}
              // Home navigator come from file in navigation folder
              component={BookingNavigatorLayout}
              // we need word home to navigate to homscreen - to hide we use option
              options={{
                tabBarLabel(props) {
                  return null;
                },
                headerShown: false,
                tabBarIcon(props) {
                  return (
                    <CarIcon name="car" size={25} color={props.focused ? myColor.greenColor : myColor.iconColor} />
                  );
                  // <Text style={{color: props.color}}>🏠</Text>;
                },
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
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
