import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import { myCardBorder, myColor } from '../constant/color';

interface InputBoxProp {
  item?: string;
  placeholderAr: string;
  onchangeFuncProp?: (text: string) => void;
  value?: string;
}

const InputBox = ({item, placeholderAr, onchangeFuncProp, value}: InputBoxProp) => {
  const [text, setText] = React.useState<string>('');
  const onChangeTextFunc = (text: string) => {
    setText(text);
    if (onchangeFuncProp) {
      onchangeFuncProp(text);
    }
  };

  return (
    <View>
      <TextInput
        placeholder={placeholderAr}
        value={value}
        onChangeText={onChangeTextFunc}
        style={styles.wrapperInput}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperInput: {
    borderWidth: 2,
    borderColor: myColor.borderColor,
    padding: 10,
    borderRadius: myCardBorder,
    backgroundColor: 'white',
  },
});

export default InputBox;
