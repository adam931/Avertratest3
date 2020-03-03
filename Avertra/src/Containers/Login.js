import React, {useEffect} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import Header from '../Components/Header';
import DialogComp from '../Components/DialogComp';
import {
  loginUserAction,
  handleCredentialsChange,
  closeModalAction,
  clearAuthInfo,
  changeLanguageAction
} from '../../store/actions';
import {localizedLanguage} from '../../config/localization'

const Login = props => {
  const handleValidLogin = () => {
    props.loginUserAction(props.user.username, props.user.password);
  };

  const handleClose = () => {
    props.closeModalAction();
  };

  const handleInputChange = (code, value) => {
    props.handleCredentialsChange(code, value);
  };

  useEffect(() => {
    props.changeLanguageAction(localizedLanguage('en'))
  },[])

  useEffect(() => {
    if (props.loginSuccess) {
      props.navigation.navigate('Dashboard');
      props.clearAuthInfo();
    }
  }, [props.loginSuccess]);

  return (
    <View style={styles.contStyles}>
      <Header hideDrawer pageName={props.language.login} />
      <Image
        source={require('../../Assets/Images/avertraImage.jpg')}
        style={styles.imageStyles}
      />

      <TextInput
        placeholder="Username"
        onChangeText={value => handleInputChange('username', value)}
        style={styles.textInputStyle}
      />

      <TextInput
        placeholder="Password"
        onChangeText={value => handleInputChange('password', value)}
        secureTextEntry
        style={styles.textInputStyle}
      />

      <TouchableOpacity onPress={handleValidLogin} style={styles.buttonStyles}>
        {!props.loading && <Text style={styles.textStyles}>Login</Text>}
        {props.loading && <ActivityIndicator />}
      </TouchableOpacity>

      <DialogComp
        open={props.loginError}
        handleClose={handleClose}
        dialogText="invalid username or password"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  contStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageStyles: {
    width: 150,
    height: 150,
    marginBottom: '20%',
  },
  buttonStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    width: '80%',
    height: 45,
    borderRadius: 5,
    marginTop: 8,
    marginBottom: 8,
  },
  textStyles: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  textInputStyle: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: '80%',
    backgroundColor: '#f0f0f0',
    marginBottom: 16,
  },
});

const mapStateToProps = ({auth,localization}) => {
  return {
    user: auth.user,
    loading: auth.loading,
    loginError: auth.loginError,
    loginSuccess: auth.loginSuccess,
    language:localization.language
  };
};

export default connect(
  mapStateToProps,
  {
    loginUserAction,
    handleCredentialsChange,
    closeModalAction,
    clearAuthInfo,
    changeLanguageAction
  },
)(Login);
