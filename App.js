import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './src/helpers/theme';

import Navigation from './src/navigation/navigation';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.bg}}>
        <Navigation />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
