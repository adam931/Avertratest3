import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;

const UserSignature = props => {
  return (
    <View style={styles.contStyles}>
        {props.signatureImage.encoded && props.signatureImage.encoded.length ? (
          <Image
            source={{
              uri: `data:image/gif;base64,${props.signatureImage.encoded}`,
            }}
            style={styles.imageStyles}
          />
        ) : (
          <View style={styles.placeholderCont}>
            <Text style={styles.placeholderStyles}>You Have No Signature</Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={props.showAddSignature}>
          <Text style={styles.buttonTextStyles}>Add Signature</Text>
        </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  contStyles: {
    alignItems: 'center',
    borderRadius: 5,
    height: 70,
  },
  imageStyles: {
    height: 150,
    width: SCREEN_WIDTH,
    borderWidth: 1,
    borderColor: '#000',
    marginTop: '10%',
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 120,
    margin: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
  buttonTextStyles: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
  placeholderCont: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: SCREEN_WIDTH,
  },
  placeholderStyles: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserSignature;
