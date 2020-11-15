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
export default function SignUpPage({navigation}) {
  const [pass, setPass] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="light-content" />
      <Text style={styles.title}>Join the TAIWANETS</Text>
      <View style={styles.buttonGroup}>
        <AppButton
          type="general"
          onPress={() => {
            console.log('Google');
          }}
          title="Google"
          source={require('./../images/Google.jpg')}
        />
        <AppButton
          type="general"
          onPress={() => {
            console.log('Facebook');
          }}
          title="Facebook"
          source={require('./../images/Facebook.jpg')}
        />
      </View>
      <Text style={{margin: 20}}>or sign up with email</Text>
      <View>
        <InputBox title="Email" autoComplete="email" />
        <InputBox title="Password" autoComplete="password" />
        <View>
          <Requirement
            val={false}
            type="characters"
            number={8}
            rule="Minimun"
          />
          <Requirement
            val={false}
            type="letter"
            fontSize="capital"
            number={1}
            rule="At Least"
          />
          <Requirement
            val={false}
            type="number"
            number={1}
            rule="At Least"
            order="last"
          />
        </View>
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
