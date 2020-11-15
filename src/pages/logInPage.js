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
export default function LogInPage({navigation}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  let [success, setSuccess] = useState({
    requireOne: false,
    requireTwo: false,
    requireThree: false,
    requireTotal: false,
  });
  const onChangePassword = (val) => {
    let objRequired = {
      requireOne: false,
      requireTwo: false,
      requireThree: false,
      requireTotal: false,
    };
    if (val.length >= 8) {
      objRequired.requireOne = true;
    }
    for (let i = 0; i < val.length; i++) {
      if (!isNaN(val[i])) {
        objRequired.requireThree = true;
      }
      if (/[A-Z]/.test(val[i])) {
        objRequired.requireTwo = true;
      }
    }
    if (
      objRequired.requireOne === true &&
      objRequired.requireTwo === true &&
      objRequired.requireThree === true
    ) {
      objRequired.requireTotal = true;
    }
    setPass(val);
    setSuccess(objRequired);
  };
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
      <Text style={{margin: 20}}>or log in with email</Text>
      <View>
        <InputBox
          title="Email"
          autoComplete="email"
          onChange={(text) => {
            setEmail(text);
          }}
        />
        <InputBox
          title="Password"
          autoComplete="password"
          onChange={(text) => {
            onChangePassword(text);
          }}
        />
        <View>
          <Requirement
            val={success.requireOne}
            type="characters"
            number={8}
            rule="Minimun"
          />
          <Requirement
            val={success.requireTwo}
            type="letter"
            fontSize="capital"
            number={1}
            rule="At Least"
          />
          <Requirement
            val={success.requireThree}
            type="number"
            number={1}
            rule="At Least"
            order="last"
          />
        </View>
        <AppButton
          type="primary"
          onSubmit={email.length !== 0 && success.requireTotal === true}
          onPress={() => {
            console.log('Submit');
          }}
          title="Log In"
        />
      </View>
      <View style={styles.signupText}>
        <Text>Don't have an account yet?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Text style={{fontWeight: 'bold', marginLeft: 5}}>Sign Up</Text>
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
