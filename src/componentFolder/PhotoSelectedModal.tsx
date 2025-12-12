import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Pressable,
  
} from 'react-native';

interface PhotoSelectionModalProps {
  onVisible?: boolean;
  onClose?: () => void;
  takePhotoFunc?: () => void;
  chooseFromLibraryFunc?: () => void;
} 

const PhotoSelectionModal = ({ onVisible, onClose, takePhotoFunc, chooseFromLibraryFunc}: PhotoSelectionModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Demo Button */}
      <TouchableOpacity
        style={styles.demoButton}
        onPress={() => setIsVisible(true)}
      >
        <Text style={styles.demoButtonText}>Open Photo Selector</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        visible={onVisible}
        transparent
        animationType="none"
        onRequestClose={onClose}
      >
        <View style={styles.modalOverlay}>
          {/* Backdrop */}
          <Pressable style={styles.backdrop} onPress={onClose} />

          {/* Modal Content */}
          <View style={styles.modalContent}>
            {/* Header */}
            <View style={styles.header}>
              <View>
                <Text style={styles.title}>Select Photo</Text>
                <Text style={styles.subtitle}>Choose an option</Text>
              </View>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={onClose}
              >
                <Text style={styles.closeIcon}>✕</Text>
              </TouchableOpacity>
            </View>

            {/* Options */}
            <View style={styles.optionsContainer}>
              {/* Take Photo */}
              <TouchableOpacity
                style={[styles.optionButton, styles.cameraOption]}
                onPress={takePhotoFunc}
              >
                <View style={[styles.iconCircle, styles.cameraIconBg]}>
                  <Text style={styles.iconText}>📷</Text>
                </View>
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionTitle}>Take Photo</Text>
                  <Text style={styles.optionSubtitle}>Use your camera</Text>
                </View>
              </TouchableOpacity>

              {/* Choose from Library */}
              <TouchableOpacity
                style={[styles.optionButton, styles.libraryOption]}
                onPress={chooseFromLibraryFunc}
              >
                <View style={[styles.iconCircle, styles.libraryIconBg]}>
                  <Text style={styles.iconText}>🖼️</Text>
                </View>
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionTitle}>Choose from Library</Text>
                  <Text style={styles.optionSubtitle}>Select from gallery</Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Cancel Button */}
            <View style={styles.cancelContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={onClose}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  demoButton: {
    backgroundColor: '#0d9488',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
  },
  demoButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
  },
  closeButton: {
    width: 40,
    height: 40,
    backgroundColor: '#e0f2f1',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    fontSize: 18,
    color: '#0d9488',
    fontWeight: '600',
  },
  optionsContainer: {
    padding: 16,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  cameraOption: {
    backgroundColor: '#e0f2f1',
  },
  libraryOption: {
    backgroundColor: '#e0f2fe',
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIconBg: {
    backgroundColor: '#0d9488',
  },
  libraryIconBg: {
    backgroundColor: '#0284c7',
  },
  iconText: {
    fontSize: 24,
  },
  optionTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 2,
  },
  optionSubtitle: {
    fontSize: 13,
    color: '#64748b',
  },
  cancelContainer: {
    padding: 16,
    paddingTop: 8,
  },
  cancelButton: {
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#64748b',
  },
});

export default PhotoSelectionModal;