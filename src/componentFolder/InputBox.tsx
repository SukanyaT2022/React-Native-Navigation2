import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

interface InputBoxProp{
    item?:string
    placeholderAr:string
    
}

const InputBox = ({item, placeholderAr}:InputBoxProp) => {
  return (
    <View>
        <TextInput
    placeholder={placeholderAr}
        style={styles.wrapperInput}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    wrapperInput:{
        borderWidth:1,
        borderColor:'black',
        padding:10,
        borderRadius:5,

    }
})

export default InputBox