import React, {Component, useRef} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import SignatureCapture from 'react-native-signature-capture';

const SCREEN_WIDTH = Dimensions.get('window').width;

class SignatureComp extends Component {
  saveSign() {
    this.refs['sign'].saveImage();
  }

  resetSign() {
    this.refs['sign'].resetImage();
  }

  _onSaveEvent = (result) => {
    this.props.setSignatureImage(result);
    this.props.showAddSignature()
  }

  render() {
    return (
      <View style={styles.contStyles}>
        <SignatureCapture
          style={styles.signatureStyles}
          ref="sign"
          onSaveEvent={this._onSaveEvent}
          saveImageFileInExtStorage={false}
          showNativeButtons={false}
          showTitleLabel={false}
          viewMode={'portrait'}
        />
        <View style={styles.buttonContStyles}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              this.saveSign();
            }}>
            <Text style={styles.buttonTextStyles}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              this.resetSign();
            }}>
            <Text style={styles.buttonTextStyles}>Reset</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.cancelButtonStyles}
          onPress={this.props.showAddSignature}>
          <Text style={styles.buttonTextStyles}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contStyles: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 16,
  },
  signatureStyles: {
    width: SCREEN_WIDTH,
    height: 150,
  },
  buttonContStyles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '5%',
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 100,
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
  cancelButtonStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 40,
    width: 100,
    margin: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 16,
  },
});

export default SignatureComp;
