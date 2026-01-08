import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {myCardBorder, myColor} from '../constant/color';
import {inputBoxHeight} from '../constant/inputBoxHeight';
import {Button} from '@react-navigation/elements';
import ButttonComp from './ButttonComp';

interface InputboxDropdownMenuCompProps {
  placeholderProp: string;
  onchangeFuncProp: (text: string) => void;
  onSelectFuncProp?: (itemCountryStateCity: any) => void;
  dataProp: any[];
}
const InputboxDropdownMenuComp = ({
  placeholderProp,
  onchangeFuncProp,
  dataProp,
  onSelectFuncProp,
}: InputboxDropdownMenuCompProps) => {
  // for toggle arrow show drop down or no show-- fasle is mean close dropdown
  const [showOptions, setShowOptions] = React.useState<boolean>(false);
  //belw selectedValue just hold value that we selected-- country
  const [selectedValue, setSelectedValue] = React.useState<string>('');

  // Function for toggle arrow show drop down or no show
  const toggleOptionsFunc = () => {
    //set state option to true to open dropdown  -- fasle is mean close
    setShowOptions(!showOptions);
  };
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={toggleOptionsFunc}>
        {/* if select thailand it will show thailand if not click show select country*/}
        <Text>{selectedValue? selectedValue : placeholderProp}</Text>

        {/* below other way to write above line if not setvalue get placehoder */}
        {/* <Text>{selectedValue??placeholderProp}</Text> */}

        {/* below other way to write above line if not setvalue get placehoder */}
        {/* <Text>{selectedValue||placeholderProp}</Text> */}

        <Icon
          name={showOptions ? 'chevron-up' : 'chevron-down'}
          size={20}
          color={myColor.greenColor}
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showOptions}
        onRequestClose={() => {
          setShowOptions(!showOptions);
        }}>
          {/* blow is background behind the model */}
        <TouchableOpacity style={styles.bgOverlayStyle} onPress={()=>setShowOptions(false)}>
          {/* below is the model box */}
          <View style={styles.modalView}>
            <FlatList
              data={dataProp}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={{
                    padding: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: myColor.borderColor,
                  }}
                  onPress={() => {
                    //item below comform item line 70
                  onSelectFuncProp && onSelectFuncProp(item);  
                    
                    // when we select any country from the dropdown list
                    // below setSelectedValue hold the selected country value
                    setSelectedValue(item.name);
                    // below onchangeFuncProp send the selected country value to the parent component
                    onchangeFuncProp(item.value);
                    // after selecting any country from the dropdown list close the dropdown list
                    setShowOptions(false);
                    
                  }}>
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default InputboxDropdownMenuComp;

const styles = StyleSheet.create({
  // control modal box style
  bgOverlayStyle: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    borderWidth: 1,
    height: inputBoxHeight,
    borderColor: myColor.borderColor,
    padding: 10,
    borderRadius: myCardBorder,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  // centeredView: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  modalView: {
    height: 600,
    width: '80%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
