import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {screen} from '../../App';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [securePassword, setSecurePassword] = useState<boolean>(true);

  const submitFunc = () => {
    if (!email && !password) {
      Alert.alert('Please fill your email & password');
      return;
    } else {
      navigation.navigate(screen.home);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleLoginScreen}>LoginScreen</Text>

      <TextInput
        style={styles.inputBox}
        placeholder="Your Email"
        onChangeText={anothertext => setEmail(anothertext)}
        value={email}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Password"
        onChangeText={anothertext => setPassword(anothertext)}
        value={password}
        secureTextEntry={securePassword}
      />
      <View style={styles.eyeIcon}>
      <Icon
        name={securePassword ? 'eye-off' : 'eye'}
        size={30}
        color="black"
        onPress={() => setSecurePassword(!securePassword)}
      />
      </View>

      {/* <Icon name="eye-off" size={30} color="#900" /> */}

      <Text>Forget your password</Text>
     
      <TouchableOpacity onPress={() => submitFunc()} style={styles.inputBox}>
        <Text>Submit</Text>
      </TouchableOpacity>

      <View>
      <Text>Do not have ab account? </Text>
      <TouchableOpacity onPress={ ()=> navigation.navigate(screen.register)}>
        <Text style={{color:'blue'}} > Please Register</Text>
        </TouchableOpacity>
      </View>
   
    </View>
  
  );
};

const styles = StyleSheet.create({
  mainContainer:{
marginTop:50,
marginHorizontal:'auto',
width:'80%',
  },
  titleLoginScreen:{
paddingVertical:10,
textAlign:'center',
fontSize:20,
fontWeight:'bold'
  },
  parentView:{

  },
  inputBox: {
    width: '100%',
    padding: 10,
    borderColor: 'green',
    borderWidth: 2,
    marginVertical: 10,
  },
  eyeIcon:{
    position:'absolute',
    top:120,
    right:10
  }
});

export default LoginScreen;
