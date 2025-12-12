import React, {useRef, useMemo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import BottomSheet, {
  BottomSheetView,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import InputBox from './InputBoxPractice';
import {Edge} from 'react-native-safe-area-context';
import ButttonComp from './ButttonComp';
import CameraIcon from 'react-native-vector-icons/Feather';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import {launchCamera, launchImageLibrary, ImagePickerResponse} from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { updateImageProfile } from '../store/slices/addressSlice';
import PhotoSelectionModal from './PhotoSelectedModal';


interface EditProfileProps {
  handlePressProps?: () => void;
  bottomSheetRefprop: any;
}

export default function EditProfileBottomShiftComp({
  handlePressProps,
  bottomSheetRefprop,
}: EditProfileProps) {
  // redux step 1 below- 
  // also copy const{imageprofile} to profile screenn.tsx and selector to get datat image from redux
   const dispatch = useDispatch() as any; // to dispatch action to redux store
  const {imageProfile} =
    useSelector((state: any) => state.address);

  const [storeFname, setStoreFname] = useState<string>('');
  const [storeLname, setStoreLname] = useState<string>('');
  const [storeDOB, setStoreDOB] = useState<string>('');
  const [storeEmail, setStoreEmail] = useState<string>('');
  const [storeLocation, setStoreLocation] = useState<string>('');
  const [storePhone, setStorePhone] = useState<string>('');
  const [profileImage, setProfileImage] = useState<string | null>(imageProfile);

  // Snap points define where the bottom sheet stops when dragging
  const snapPoints = useMemo(() => ['50%', '75%', '95%'], []);

// redux bring image profileImage- dispatch / sent value to redux 
// and useSelector/ get value from redux





  // //  below comfrom ImagePickerTest.tsx
  // const [imageUri, setImageUri] = useState(null);
  
  //   const pickImageFromGallery = () => {
  //     const options = {
  //       mediaType: 'photo',
  //       quality: 1,
  //       selectionLimit: 1, // 0 for multiple images
  //     };
  
  //     launchImageLibrary(options, (response) => {
  //       if (response.didCancel) {
  //         console.log('User cancelled');
  //       } else if (response.errorCode) {
  //         console.log('Error: ', response.errorMessage);
  //       } else if (response.assets) {
  //         setImageUri(response.assets[0].uri);
  //       }
  //     });
  //   };
  
  //   const takePhoto = () => {
  //     const options = {
  //       mediaType: 'photo',
  //       quality: 1,
  //       saveToPhotos: true,
  //     };
  
  //     launchCamera(options, (response) => {
  //       if (response.didCancel) {
  //         console.log('User cancelled');
  //       } else if (response.errorCode) {
  //         console.log('Error: ', response.errorMessage);
  //       } else if (response.assets) {
  //         setImageUri(response.assets[0].uri);
  //       }
  //     });
  //   };
  

  const closeEditProfileFunc = () => {
    bottomSheetRefprop.current?.close();
  };

  const handleSavePress = () => {
    console.log('Saving profile:', {
      storeFname,
      storeLname,
      storeDOB,
      storeEmail,
      storeLocation,
      storePhone,
      profileImage,
    });
    // Close the bottom sheet after saving
    bottomSheetRefprop.current?.close();
  };

  const handleImagePicker = () => {
    Alert.alert(
      'Select Photo',
      'Choose an option',
      [
        {
          text: 'Take Photo',
          onPress: () => openCamera(),
        },
        {
          text: 'Choose from Library',
          onPress: () => openGallery(),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      {cancelable: true}
    );
  };
// take pic from take camera
  const openCamera = () => {
    const options = {
      mediaType: 'photo' as const,
      quality: 0.8 as const,
      saveToPhotos: true,
      cameraType: 'back' as const,
    };

    launchCamera(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorCode) {
        console.log('Camera Error: ', response.errorMessage);
        Alert.alert('Error', response.errorMessage || 'Failed to open camera');
      } else if (response.assets && response.assets[0]) {
        const imageUri = response.assets[0].uri;
        if (imageUri) {
          setProfileImage(imageUri);

          //redux dispatch here part 2 below
          dispatch(updateImageProfile(imageUri));

          console.log('Image selected from camera:', imageUri);
        }
      }
    });
  };
// take pic from library 
  const openGallery = () => {
    const options = {
      mediaType: 'photo' as const,
      quality: 0.8 as const,
      selectionLimit: 1,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
        Alert.alert('Error', response.errorMessage || 'Failed to open gallery');
      } else if (response.assets && response.assets[0]) {
        const imageUri = response.assets[0].uri;
        if (imageUri) {
          setProfileImage(imageUri);

          //redux dispatch here part 3 below
          dispatch(updateImageProfile(imageUri));


          console.log('Image selected from gallery:', imageUri);
        }
      }
    });
  };

  return (
  
    <View style={styles.container}>
      <PhotoSelectionModal />
      <BottomSheet
        ref={bottomSheetRefprop}
        index={-1} // Start closed (-1), or 0 for first snap point
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backgroundStyle={styles.bottomSheetBackground}
        handleIndicatorStyle={styles.handleIndicator}>
        <BottomSheetScrollView
          style={styles.bottomSheetContent}
          contentContainerStyle={styles.scrollContent}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.title}>Manage Account</Text>
            <CloseIcon onPress={closeEditProfileFunc}
            style={{position: 'absolute', right: 0, top:2}}
            name="close" size={30} color="green" />
          </View>

          <View style={styles.profileImageContainer}>
            <Image
              source={
                profileImage
                  ? {uri: profileImage}
                  : require('../../assets/imagesFolder/cat1.png')
              }
              style={styles.profileImage}
            />
            <TouchableOpacity 
              style={styles.cameraButton}
              onPress={handleImagePicker}
            >
              <CameraIcon name="camera" size={20} color="white" />
            </TouchableOpacity>
          </View>

          <InputBox
            placeholderAr="First Name"
            onchangeFuncProp={text => setStoreFname(text)}
            value={storeFname}
          />
          <InputBox
            placeholderAr="Last Name"
            onchangeFuncProp={text => setStoreLname(text)}
            value={storeLname}
          />
          <InputBox
            placeholderAr="Date of Birth"
            onchangeFuncProp={text => setStoreDOB(text)}
            value={storeDOB}
          />
          <InputBox
            placeholderAr="Email"
            onchangeFuncProp={text => setStoreEmail(text)}
            value={storeEmail}
          />
          <InputBox
            placeholderAr="Location"
            onchangeFuncProp={text => setStoreLocation(text)}
            value={storeLocation}
          />
          <InputBox
            placeholderAr="Phone"
            onchangeFuncProp={text => setStorePhone(text)}
            value={storePhone}
          />

          <ButttonComp
            buttonText="Save Changes"
            onPressProp={handleSavePress}
            selectedProp={true}
          />
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  profileImageContainer: {
    alignSelf: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'green',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'green',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
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
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingBottom: 40,
    gap: 20,
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
