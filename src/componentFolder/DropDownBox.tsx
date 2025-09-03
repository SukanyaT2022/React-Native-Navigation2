import {
  FlatList,
  FlatListComponent,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {myCardBorder, myColor} from '../constant/color';

var countryList =
  'https://countryapi.io/api/all?apikey=U84lmsMTELUagtHqL9VRIBm00db4w0mRAYuqWr6p';

interface DropDownBoxProp {
  onSelect: (value: string) => void; // pass function--onselec is a function
}

const DropDownBox = ({onSelect}: DropDownBoxProp) => {
  const [selectCountry, setSelectCountry] = useState('Select Country');
  const [data, setData] = useState({}) as any;
  const [showCountryModal, setShowCountryModal] = useState(false);

  const handleSelectFunc = (item: string) => {
    setSelectCountry(item);
    onSelect(item); // pass selected country to the home screen
    setShowCountryModal(false); //after select country --close popup modal
  };

  useEffect(() => {
    fetch(countryList) // Replace with your API URL
      .then(response => response.json())
      .then(result => {
        const formattedData = Object.keys(result).map(key => ({
          name: result[key].name,
          city: result[key].capital,
          // code: result[key].alpha2Code,
          // callingCode: result[key].callingCode,
        }));
        setData(formattedData);
      })
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <View>
      <TouchableOpacity
        style={styles.wrapperInput}
        onPress={() => setShowCountryModal(true)}>
        <View style={styles.wrapText}>
          <Text>Residency:</Text>
          <Text style={styles.countryText}>{selectCountry}</Text>
        </View>

        <View>
          <Icon name="down" size={25} color="#900" />
        </View>
      </TouchableOpacity>
      {/* start modal for location country city */}
      <View style={styles.mainViewModalCountry}>
        <Modal
          onRequestClose={() => setShowCountryModal(false)}
          animationType="slide"
          transparent={true}
          visible={showCountryModal}>
          <View style={styles.wrapperCountryModal}>
            <View style={styles.wrapFlatlist}>
              <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() =>
                      handleSelectFunc(item.name + ', ' + item.city)
                    }>
                    <Text>{item.name + ', ' + item.city}</Text>
                  </TouchableOpacity>
                )}
                //below line give space between country list
                ItemSeparatorComponent={item => (
                  <View style={styles.padding2CountryList} />
                )}
              />
            </View>
          </View>
        </Modal>
      </View>
      {/* end modal */}
    </View>
  );
};

export default DropDownBox;

const styles = StyleSheet.create({
  wrapText: {
    gap: 3,
  },
  countryText: {
    fontWeight: 'semibold',
  },
  wrapperInput: {
    borderWidth: 2,
    borderColor: myColor.borderColor,
    borderRadius: myCardBorder,
    padding: 10,
    // borderStyle:'dashed',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainViewModalCountry: {
    backgroundColor: 'white',
    borderRadius: 20,
    flex: 1,
  },
  wrapperCountryModal: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
  },
  wrapFlatlist: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    padding: 20,
    margin: 'auto',
    height: '90%',
  },
  padding2CountryList: {
    marginTop: 12,
  },
});
