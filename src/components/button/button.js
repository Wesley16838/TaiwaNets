import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

export default function AppButton(props) {
  console.log('button,', props);
  if (props.type === 'primary') {
    return (
      <TouchableOpacity
        style={
          props.onSubmit
            ? styles.primaryButtonContainer
            : styles.primaryButtonContainerUnSubmit
        }
        onPress={props.onPress}
        activeOpacity={0.8}>
        <Text style={styles.primaryButtonText}>{props.title}</Text>
      </TouchableOpacity>
    );
  } else if (props.type === 'secondary') {
    return (
      <TouchableOpacity
        style={styles.secondaryButtonContainer}
        onPress={props.onPress}
        activeOpacity={0.8}>
        <Text style={styles.secondaryButtonText}>{props.title}</Text>
      </TouchableOpacity>
    );
  } else if (props.type === 'general') {
    return (
      <TouchableOpacity
        style={styles.appButtonContainer}
        onPress={props.onPress}
        activeOpacity={0.8}>
        <Image
          style={{width: 24, height: 24, marginRight: 12}}
          source={props.source}
        />
        <Text style={styles.appButtonText}>{props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  appButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#111111',
    borderWidth: 1,
    borderRadius: 22,
    paddingVertical: 10,
    width: 159,
    height: 40,
  },
  appButtonText: {
    fontSize: 14,
    color: '#111111',
    fontWeight: 'normal',
    alignSelf: 'center',
  },
  primaryButtonContainerUnSubmit: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(53, 94, 160, 0.3)',
    borderRadius: 22,
    paddingVertical: 10,
    width: 327,
    height: 40,
  },
  primaryButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#355EA0',
    borderRadius: 22,
    paddingVertical: 10,
    width: 327,
    height: 40,
  },
  primaryButtonText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'normal',
    alignSelf: 'center',
  },
  secondaryButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#355EA0',
    borderWidth: 1,
    borderRadius: 22,
    paddingVertical: 10,
    width: 327,
    height: 40,
  },
  secondaryButtonText: {
    fontSize: 14,
    color: '#355EA0',
    fontWeight: 'normal',
    alignSelf: 'center',
  },
});
