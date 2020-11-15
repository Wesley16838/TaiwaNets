import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LogInPage from '../pages/logInPage';
import SignUpPage from '../pages/signUpPage';
const AuthStack = createStackNavigator();

export default function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <AuthStack.Screen name={'Login'} component={LogInPage} />
      <AuthStack.Screen name={'Signup'} component={SignUpPage} />
    </AuthStack.Navigator>
  );
}
