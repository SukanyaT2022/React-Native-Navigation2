import { Platform } from 'react-native';

// Font configuration for cross-platform compatibility
export const fonts = {
  monoton: Platform.OS === 'ios' ? 'Monoton-Regular' : 'Monoton-Regular',
  righteous: Platform.OS === 'ios' ? 'Righteous-Regular' : 'Righteous',
};

// Helper function to get font family
export const getFontFamily = (fontName: keyof typeof fonts) => {
  return fonts[fontName];
};
