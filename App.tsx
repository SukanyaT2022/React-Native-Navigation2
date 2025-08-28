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
import {myColor} from './src/constant/color';

// Screens
import HomeScreen from './src/screenFolder/HomeScreen';
import DetailsScreen from './src/screenFolder/DetailScreen';
import RegisterScreen from './src/screenFolder/RegisterScreen';
import LoginScreen from './src/screenFolder/LoginScreen';
import ConfirmScreen from './src/screenFolder/ConfirmScreen';
import ProductScreen from './src/screenFolder/ProductScreen';
import InsuranceProtectionScreen from './src/screenFolder/InsuranceProtectionScreen';
import ExtraServiceScreen from './src/screenFolder/ExtraServiceScreen';
import BackScreen1 from './src/screenFolder/BackScreen1';
import BackScreen2 from './src/screenFolder/BackScreen2';
import CheckoutScreen from './src/screenFolder/CheckoutScreen';

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

const CustomHeader = ({navigation}:any) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.arrowHeader}
        onPress={() => navigation.canGoBack() && navigation.goBack()}>
        <Icon name="chevron-left" size={20} color="white" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>My App Header</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={screen.home}
        screenOptions={{
          headerShown: false, // Disable built-in headers
        }}>
        <Stack.Screen
          name="MainLayout"
          component={MainLayoutWithHeader}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// This wraps all screens and adds your header
const MainLayoutWithHeader = ({navigation}:any) => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader navigation={navigation} />
      <View style={styles.navigatorContainer}>
        <InnerStack />
      </View>
    </SafeAreaView>
  );
};

// Stack containing your actual screens
const InnerStack = () => {
  const Inner = createStackNavigator();

  return (
    <Inner.Navigator
      screenOptions={{
        headerShown: false, // No headers here
 
      }}>
      <Inner.Screen name={screen.home} component={HomeScreen} />
      <Inner.Screen name={screen.details} component={DetailsScreen} />
      <Inner.Screen name={screen.register} component={RegisterScreen} />
      <Inner.Screen name={screen.login} component={LoginScreen} />
      <Inner.Screen name={screen.confirm} component={ConfirmScreen} />
      <Inner.Screen name={screen.productscreen} component={ProductScreen} />
      <Inner.Screen
        name={screen.insuranceScreen}
        component={InsuranceProtectionScreen}
      />
      <Inner.Screen
        name={screen.extraServiceScreen}
        component={ExtraServiceScreen}
      />
      <Inner.Screen name={screen.checkout} component={CheckoutScreen} />
      <Inner.Screen name={screen.backScreen1} component={BackScreen1} />
      <Inner.Screen name={screen.backScreen2} component={BackScreen2} />
    </Inner.Navigator>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    height:50,
    paddingTop:10,
    marginLeft:10,

    // flexDirection: 'row',
    // alignItems: 'center',
    // paddingHorizontal: 16,
    backgroundColor: myColor.lightGray,
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
