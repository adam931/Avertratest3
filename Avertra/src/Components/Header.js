import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

const Header = props => {
  const handleDrawerToggle = () => {
    props.navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <View style={styles.contStyles}>
      {!props.hideDrawer && <View></View>}

      <Text style={styles.titleStyles}>{props.pageName}</Text>

      {!props.hideDrawer && (
        <TouchableWithoutFeedback onPress={handleDrawerToggle}>
          <Image
            style={styles.imageStyles}
            source={require('../../Assets/Icons/menu-icon.png')}
          />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  contStyles: {
    flex: 1,
    position: 'absolute',
    zIndex:100,
    top: '3%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
  },
  imageStyles: {
    width: 30,
    height: 30,
  },
  titleStyles: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Header;
