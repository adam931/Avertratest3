import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import { changeLanguageAction } from '../../store/actions'
import {localizedLanguage} from '../../config/localization'

const Localization = props => {

  const handleLanguageChange = (language) => {
    props.changeLanguageAction(localizedLanguage(language))
    props.navigation.navigate('Dashboard')
  }

  return (
    <View style={styles.contStyles}>
      <View>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => handleLanguageChange('ar')}>
          <Text style={styles.textStyles}>العربية</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => handleLanguageChange('en')}>
          <Text style={styles.textStyles}>English</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contStyles: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyles: {
    width: 100,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    margin: 16,
    justifyContent:'center',
    alignItems:'center'
  },
  textStyles: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  {changeLanguageAction},
)(Localization);
