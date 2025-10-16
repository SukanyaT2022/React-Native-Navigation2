import { Platform } from 'react-native';

// Font configuration for cross-platform compatibility
export const fonts = {
  monoton: 'Monoton-Regular' ,
  righteous:'Righteous-Regular' 
};

// Helper function to get font family
export const getFontFamily = (fontName: keyof typeof fonts) => {
  return fonts[fontName];
};
