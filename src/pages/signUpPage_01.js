import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import AppButton from './../components/button/button';
import InputBox from './../components/inputbox/inputbox';
import Requirement from './../components/requirement/requirement';
export default function SignUpPage_01({navigation}) {
  const [pass, setPass] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="light-content" />
      <Text style={styles.title}>Complete your profile</Text>

      <View>
        <InputBox title="First Name" autoComplete="name" />
        <InputBox title="Last Name" autoComplete="name" />
        <AppButton
          type="primary"
          onSubmit={false}
          onPress={() => {
            console.log('Submit');
          }}
          title="Sign Up"
        />
      </View>
      <View style={styles.signupText}>
        <Text>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={{fontWeight: 'bold', marginLeft: 5}}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: 327,
    textAlign: 'left',
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 32,
  },
  buttonGroup: {
    width: 327,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  signupText: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
  },
});
