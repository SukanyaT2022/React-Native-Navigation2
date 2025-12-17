import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';


const FinalScreen = () => {
  return (
    <View>
      <Text>Thanks for your booking with Roam!</Text>
      <Text>We have emailed your confirmation to : </Text>
      <Text>Confirmation number:</Text>

      {/* car typee and picture */}
      <View>
        <View>
          <Text>Car size:</Text>
          <Text>Car Type:</Text>
        </View>
        <View>
            <Image source={require('../../assets/imagesFolder/gaspumpimg2.jpg')} />
        </View>
      </View>
      {/* end car type */}


    </View>
  );
};

export default FinalScreen;

const styles = StyleSheet.create({});
