import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React, {useState, useRef} from 'react';
import ExtraServiceOneMainBoxComp from '../componentFolder/ExtraServiceOneMainBoxComp';
import gaspump from '../asset/imagesFolder/gaspumpimg2.jpg';
import truck from '../asset/imagesFolder/cat1.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';
import {extraServiceData} from '../constant/extraServiceData';
import ButttonComp from '../componentFolder/ButttonComp';
import {screen} from '../navigatorFolder/HomeNavigatorLayout';

const ExtraServiceScreen = ({navigation}: any) => {
  const [selectedItem, setSelectedItem] = useState<string[]>([]);
  const scrollY = useRef(new Animated.Value(0)).current;
  const [showContinueButton, setShowContinueButton] = useState(false);

  const handleSelectBox = (id: string) => {
    //if click again the green border chnage to gray as original color
    var checkIfAlreadyCkick = selectedItem.includes(id);
    if (checkIfAlreadyCkick) {
      setSelectedItem(prevState => prevState.filter(item => item !== id));
    } else {
      setSelectedItem(pervState => [...pervState, id]);
    }
  };

  // const handleScroll = Animated.event(
  //   [{ nativeEvent: { contentOffset: { y: scrollY } } }],
  //   {
  //     useNativeDriver: false,
  //     listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
  //       const offsetY = event.nativeEvent.contentOffset.y;
  //       if (offsetY > 100) { // Show button after scrolling 100 units
  //         setShowContinueButton(true);
  //       } else {
  //         setShowContinueButton(false);
  //       }
  //     }
  //   }
  // );

  return (
    <View style={styles.main}>
      <Text style={styles.header}>Coverages & Improve your trip</Text>
      <View style={styles.wrapFlatlistStyle}>
        <FlatList
          contentContainerStyle={{gap: 15, paddingBottom: 30, paddingTop: 20}}
          data={extraServiceData}
          keyExtractor={item => item.id.toString()}
          // onScroll={handleScroll}
          scrollEventThrottle={16}
          renderItem={({item}) => (
            <ExtraServiceOneMainBoxComp
              recommendationTag={item.type === 'Recommended'}
              title={item.name}
              smallImg={item.icon as any}
              message={item.description}
              iconProp={<Icon name="shield" size={30} color="green" />}
              shieldMessage={item.benefits}
              priceText={item.price.toString()}
              selected={selectedItem.includes(item.id.toString())}
              onPressXtraProp={() => handleSelectBox(item.id.toString())}
            />
          )}
        />
      </View>
      {/* // close view flate list */}

      {/* {selectedItem.length > 0 && (
        <Animated.View 
          style={[
            styles.buttonContainer,
            {
              opacity: scrollY.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 1],
                extrapolate: 'clamp'
              }),
              transform: [{
                translateY: scrollY.interpolate({
                  inputRange: [0, 100],
                  outputRange: [50, 0],
                  extrapolate: 'clamp'
                })
              }]
            }
          ]}
        >
       
        </Animated.View>
      )}
       */}
      <View style={styles.submitBtnStyle}>
        <ButttonComp
          buttonText="Continue"
          selectedProp={false}
          onPressProp={() => navigation.navigate(screen.checkout)}
        />
      </View>
    </View>
  );
};

export default ExtraServiceScreen;

const styles = StyleSheet.create({
  wrapFlatlistStyle: {
    // backgroundColor:'red',
    // padding:10,
    // flex:1,
    height: '85%',
    // width:'100%',
  },
  main: {
    padding: 10,
    // flex: 1,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
    alignSelf: 'center',
  },
 
  submitBtnStyle: {
    // marginVertical:10,
    // paddingVertical:10,
  },
});

{
  /* if not use flat list do like below code */
}
{
  /* <ScrollView contentContainerStyle={{gap:15, paddingBottom:50, paddingTop:20}}> */
}
{
  /* <Text>ExtraServiceScreen</Text> */
}

{
  /* <ExtraServiceOneMainBoxComp
      recommendationTag = {true}// leave it like that it's a boolean
        title="Skip the Pump and Save Time"
        smallImg={gaspump as any}
        message="Save time, Return wihout refueling"
        iconProp={<Icon name="shield" size={30} color="green" />}
        shieldMessage={[
          'Comparable to local fuel prices',
          'Avoid $9.99 for not refueling',
        ]}
        priceText="$50.99/ rental"
      />
        <ExtraServiceOneMainBoxComp
      recommendationTag = {true}// leave it like that it's a boolean
        title="Emergency & Roadside Assistant"
        smallImg={truck as any}
        message="For unexpected situations"
        iconProp={<Icon name="shield" size={30} color="green" />}
        shieldMessage={[
          'Flat tires or spare installation',
          'Lost car keys or locked out',
          'Run out of fuel or tow',
        ]}
        priceText="$9.99/ rental"
      />
        <ExtraServiceOneMainBoxComp
      recommendationTag = {true}// leave it like that it's a boolean
        title="Toll-free travel made easy"
        smallImg={gaspump as any}
        message="Save time, Return wihout refueling"
        iconProp={<Icon name="shield" size={30} color="green" />}
        shieldMessage={[
          'Unlimited toll usage 24/7',
          'Fixed daily rate',
          'No waiting in toll lanes',
        ]}
        priceText="$19.99/ rental"
      /> */
}
{
  /* </ScrollView> */
}
