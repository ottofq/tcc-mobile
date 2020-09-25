import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import Routes from './Routes/MainNavigator';

import Snackbar from './components/Snackbar';

import { SnackbarProvider } from './contexts/Snackbar';
import { MenuProvider } from './contexts/menu';
import { UserProvider } from './contexts/User';
import { AuthProvider } from './contexts/auth';
import { colors } from './styles';

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
    primary: colors.primary,
  },
  fonts: configureFonts(fontConfig),
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <StatusBar content="light-content" backgroundColor={colors.secondary} />
      <SnackbarProvider>
        <MenuProvider>
          <UserProvider>
            <AuthProvider>
              <>
                <Routes />
                <Snackbar />
              </>
            </AuthProvider>
          </UserProvider>
        </MenuProvider>
      </SnackbarProvider>
    </PaperProvider>
  );
};

export default App;
