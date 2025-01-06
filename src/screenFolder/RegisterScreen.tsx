import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { screen } from "../../App";

const RegisterScreen = ({ navigation }:any) => {
  const [fname,setFname] = useState<string>('')
  const [lname,setLname] = useState<string>('')
  const [email,setEmail] = useState<string>('')
  const [error, setError] = useState('');

  const validateEmail = (inputemail:string) => {
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(inputemail);
  };

  const checkEmailFunc=()=>{
    // if (validateEmail(email)&& fname && lname !== "") {
      if (!validateEmail(email)) {
      setError('');
  //  navigation.navigate('Details')
  Alert.alert('Please fill your email!');
  setError('Invalid email format');
  return
    } 
// !fname?  Alert.alert('plz fill fname'): !lname?    Alert.alert('plz fill lname'):  navigation.navigate('Details') 
    if (!fname){
      Alert.alert('plz fill fname')
      return
    }
    if (!lname) {
      Alert.alert('plz fill lname')
      return
    }
     navigation.navigate('Details') 
  }
  
  return(<View style={{ flex: 1, alignItems: 'center' , marginTop:70}}>
  
    <Text>Register Page</Text>
    <TextInput style={styles.inputBox}  placeholder="Your First Name" onChangeText={(text)=>setFname(text)} value={fname}/>
    <TextInput style={styles.inputBox}  placeholder="Your Last Name" onChangeText={(anothertext)=>setLname(anothertext)} value={lname}/>
    <TextInput style={styles.inputBox}  placeholder="Your Email" onChangeText={(anothertext)=>setEmail(anothertext)} value={email}/>


    <TouchableOpacity
     onPress={()=>checkEmailFunc()}
     style={styles.inputBox}
    // disabled={fname == ""}
    >
      <Text style={{textAlign:'center'}}>Submit</Text>
    </TouchableOpacity>

<Text>Already have an account?</Text>
{/* //how we link screen */}
<TouchableOpacity onPress={()=>navigation.navigate(screen.login)}><Text>Log in</Text></TouchableOpacity>
  </View>
  )
};
const styles = StyleSheet.create({
  inputBox:{
    width:'80%',padding:10, borderColor:'green', borderWidth:2, marginVertical:10
  }

})
export default RegisterScreen