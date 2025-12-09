import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

// we need line 4 to put onto editprofiledhiftcomp.tsx
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const ImagePickerTest = () => {

  // copy line 9 to 45 and put on where to use where to take camera. 
  //this one just for test 
  // we put line 9 to 45 to editprofiledhiftcomp.tsx

  const [imageUri, setImageUri] = useState(null);

  const pickImageFromGallery = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      selectionLimit: 1, // 0 for multiple images
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled');
      } else if (response.errorCode) {
        console.log('Error: ', response.errorMessage);
      } else if (response.assets) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const takePhoto = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: true,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled');
      } else if (response.errorCode) {
        console.log('Error: ', response.errorMessage);
      } else if (response.assets) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Pick from Gallery" onPress={pickImageFromGallery} />
      <Button title="Take Photo" onPress={takePhoto} />
      
      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
    borderRadius: 10,
  },
});

export default ImagePickerTest;