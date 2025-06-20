import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

interface InputBoxProp {
  item?: string;
  placeholderAr: string;
  onchangeFuncProp?: (text: string) => void;
}

const InputBox = ({item, placeholderAr, onchangeFuncProp}: InputBoxProp) => {
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
        value={text}
        onChangeText={onChangeTextFunc}
        style={styles.wrapperInput}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperInput: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
});

export default InputBox;
