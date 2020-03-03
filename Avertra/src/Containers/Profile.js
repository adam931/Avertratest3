import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Header from '../Components/Header';
import {connect} from 'react-redux';
import SignatureComp from '../Components/SignatureComp';
import UserSignature from '../Components/UserSignature';

const Profile = props => {
  const [addSignature, setAddSignature] = useState(false);
  const [signatureImage, setSignatureImage] = useState('');

  const showAddSignature = () => {
    setAddSignature(!addSignature);
  };
  
  return (
    <View style={styles.contStyles}>
      <Header navigation={props.navigation} pageName={props.language.profile} />
      <Image
        source={require('../../Assets/Images/amr-diab.jpg')}
        style={styles.imageStyles}
      />
      <Text style={styles.textStyles}>Name : Amr Diab</Text>
      <Text style={styles.textStyles}>Age: 11</Text>

      {addSignature ? (
        <View style={styles.contStyles}>
          <SignatureComp
            showAddSignature={showAddSignature}
            setSignatureImage={setSignatureImage}
          />
        </View>
      ) : (
        <UserSignature
          showAddSignature={showAddSignature}
          signatureImage={signatureImage}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  contStyles: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageStyles: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: '25%',
  },
  textStyles: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#000',
  },
});

const mapStateToProps = ({localization}) => {
  return {
    language:localization.language
  };
};

export default connect(
  mapStateToProps,
  {},
)(Profile);
