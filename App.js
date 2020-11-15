/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import SignUpPage from './src/pages/signUpPage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStackNavigator from './src/navigators/AuthStackNavigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import persist from './src/config/store';

const RootStack = createStackNavigator();
const persistStore = persist();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Provider store={persistStore.store}>
          <PersistGate loading={null} persistor={persistStore.persistor}>
            <RootStack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <RootStack.Screen
                name={'AuthStack'}
                component={AuthStackNavigator}
              />
            </RootStack.Navigator>
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
