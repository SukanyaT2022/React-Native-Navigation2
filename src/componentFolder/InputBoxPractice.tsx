import React from 'react';
import {StyleSheet, TextInput, View, KeyboardTypeOptions} from 'react-native';
import { myCardBorder, myColor } from '../constant/color';
import { inputBoxHeight } from '../constant/inputBoxHeight';

interface InputBoxProp {
  item?: string;
  placeholderAr: string;
  onchangeFuncProp?: (text: string) => void;
  value?: string;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  inputType?: 'text' | 'number' | 'default';
}

const InputBox = ({
  item, 
  placeholderAr, 
  onchangeFuncProp, 
  value, 
  keyboardType = 'default',
  maxLength,
  inputType = 'default'
}: InputBoxProp) => {
  const [text, setText] = React.useState<string>('');
  
  const onChangeTextFunc = (text: string) => {
    let filteredText = text;
    
    // Apply validation based on inputType
    if (inputType === 'text') {
      // Only allow letters and spaces
      filteredText = text.replace(/[^a-zA-Z\s]/g, '');
    } else if (inputType === 'number') {
      // Only allow numbers
      filteredText = text.replace(/[^0-9]/g, '');
    }
    
    setText(filteredText);
    if (onchangeFuncProp) {
      onchangeFuncProp(filteredText);
    }
  };

  return (
    <View>
      <TextInput
        placeholder={placeholderAr}
        value={value}
        onChangeText={onChangeTextFunc}
        style={styles.wrapperInput}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperInput: {
    borderWidth: 1,
    height: inputBoxHeight,
    borderColor: myColor.borderColor,
    padding: 10,
    borderRadius: myCardBorder,
    backgroundColor: 'white',
  },
});

export default InputBox;
