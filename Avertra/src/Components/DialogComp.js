import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Dialog, {SlideAnimation, DialogContent} from 'react-native-popup-dialog';

const DialogComp = props => {
  return (
    <Dialog
      visible={props.open}
      onTouchOutside={props.handleClose}
      style={styles.contStyles}
      dialogAnimation={
        new SlideAnimation({
          slideFrom: 'bottom',
        })
      }>
      <DialogContent>
        <Text style={styles.errorText}>{props.dialogText}</Text>
      </DialogContent>
    </Dialog>
  );
};
const styles = StyleSheet.create({
  contStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%'
  },
  errorText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red',
    padding:16
  },
});

export default DialogComp;
