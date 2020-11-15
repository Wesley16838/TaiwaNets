import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
export default function Inputbox(props) {
  let [showPassword, setShowPassword] = useState(true);
  let showPasswordImage =
    props.title === 'Password' ? (
      <TouchableOpacity
        style={styles.showpassword}
        onPress={() => setShowPassword(!showPassword)}>
        <Image
          style={{width: 24, height: 24}}
          source={require('./../../images/Show.jpg')}
        />
      </TouchableOpacity>
    ) : null;
  let notShowPasswordImage =
    props.title === 'Password' ? (
      <TouchableOpacity
        style={styles.showpassword}
        onPress={() => setShowPassword(!showPassword)}>
        <Image
          style={{width: 24, height: 24}}
          source={require('./../../images/Hide.jpg')}
        />
      </TouchableOpacity>
    ) : null;
  return (
    <View>
      <Text style={styles.inputBoxTitle}>
        {props.title ? props.title : null}
      </Text>
      <View
        style={props.title === 'Password' ? styles.passwordContainer : null}>
        <TextInput
          style={
            props.title === 'Password'
              ? styles.inputBoxPassword
              : styles.inputBox
          }
          autoCompleteType={props.autoComplete}
          placeholder={props.title}
          secureTextEntry={props.title === 'Password' ? !showPassword : false}
          onChangeText={(text) => props.onChange(text)}
        />
        {showPassword ? showPasswordImage : notShowPasswordImage}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBoxTitle: {
    fontSize: 14,
    color: '#111111',
  },
  inputBox: {
    width: 327,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#BDBDBD',
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  inputBoxPassword: {
    width: 327,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#BDBDBD',
    paddingHorizontal: 12,
    marginBottom: 12,
    paddingRight: 48,
  },
  passwordContainer: {
    position: 'relative',
  },
  showpassword: {
    position: 'absolute',
    right: 12,
    top: 8,
    alignSelf: 'flex-start',
  },
});
