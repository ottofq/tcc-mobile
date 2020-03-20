import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import Routes from './Routes/Main';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'PTSans-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'PTSans-Bold',
      fontWeight: 'normal',
    },
    italic: {
      fontFamily: 'PTSans-Italic',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#004B82',
  },
  fonts: configureFonts(fontConfig),
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <StatusBar content="ligh-content" backgroundColor="#426696" />
      <Routes />
    </PaperProvider>
  );
};

export default App;
