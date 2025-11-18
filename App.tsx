import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';
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

const App = () => {
  return (
    //wrape view with provider so that we can pass data from redux store
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          {/* // step 2 bootm tab nav - create tab navigator tag and tab.screen */}
          <Tab.Navigator>
            {/* //bottom tab screen go back to home screen */}
            <Tab.Screen
              name={'Home'}
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
                    <Icon name="home" size={30} color={myColor.iconColor} />
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
              options={{headerShown: false}}
            />
            <Tab.Screen
              name={'Booking Layout'}
              // Home navigator come from file in navigation folder
              component={BookingNavigatorLayout}
              // we need word home to navigate to homscreen - to hide we use option
              options={{headerShown: false}}
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
