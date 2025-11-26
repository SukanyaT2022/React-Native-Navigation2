import React, { useRef, useMemo, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import InputBox from './InputBoxPractice';

export default function EditProfileBottomShiftComp() {
  const [storeFullname, setStoreFullname] = useState<string>("")

  const bottomSheetRef = useRef(null) as any;

  // Snap points define where the bottom sheet stops when dragging
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  const handleOpenPress = () => {
    bottomSheetRef.current?.expand();
  };

  const handleClosePress = () => {

    bottomSheetRef.current?.close();
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Bottom Sheet Demo</Text>
        <Button title="Open Bottom Sheet" onPress={handleOpenPress} />
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1} // Start closed (-1), or 0 for first snap point
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backgroundStyle={styles.bottomSheetBackground}
        handleIndicatorStyle={styles.handleIndicator}
      >
        <BottomSheetView style={styles.bottomSheetContent}>
          {/* <Text style={styles.bottomSheetTitle}>Bottom Sheet Content</Text>
          <Text style={styles.bottomSheetText}>
            Drag the handle to resize or swipe down to close.
          </Text>
          <Button title="Close" onPress={handleClosePress} /> */}

          <Text>Edit Profile</Text>
          <InputBox
           placeholderAr = "Fullname"
           onchangeFuncProp= {(text) => setStoreFullname(text)}   
           value={storeFullname}
           />
           <InputBox
           placeholderAr = "Fullname"
           onchangeFuncProp= {(text) => setStoreFullname(text)}   
           value={storeFullname}
           />

        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bottomSheetBackground: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  handleIndicator: {
    backgroundColor: '#ccc',
    width: 40,
  },
  bottomSheetContent: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  bottomSheetTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bottomSheetText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
});