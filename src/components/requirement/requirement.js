import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
export default function Requirement(props) {
  let icon = props.val
    ? require('./../../images/Check_Active.png')
    : require('./../../images/Check_Inactive.png');
  let size = props.fontSize ? ' ' + props.fontSize : '';
  return (
    <View
      style={
        props.order !== 'last'
          ? styles.requirementContainer
          : styles.requirementContainerLast
      }>
      <Image style={styles.requirementIcon} source={icon} />
      <Text>{props.rule + ' ' + props.number + size + ' ' + props.type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  requirementIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  requirementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  requirementContainerLast: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 53,
  },
});
