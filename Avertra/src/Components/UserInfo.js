import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';

const UserInfo = props => {
  return (
    <View style={styles.contStyles}>
      {props.item.completed ? (
        <Image
          source={require('../../Assets/Icons/completed.png')}
          style={styles.imageStyles}
        />
      ) : (
        <Image
          source={require('../../Assets/Icons/non-completed.png')}
          style={styles.imageStyles}
        />
      )}

      <Text style={styles.textStyles}>{props.item.title}</Text>

      <Image
        source={require('../../Assets/Images/amr-diab.jpg')}
        style={styles.profileImageStyles}
      />

    </View>
  );
};
const styles = StyleSheet.create({
  contStyles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    height: 70,
    margin: 8,
    backgroundColor: '#f0f0f0',
  },
  profileImageStyles: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  textStyles: {
    width: '70%',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  imageStyles: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
});

export default UserInfo;
