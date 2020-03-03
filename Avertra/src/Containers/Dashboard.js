import React, {useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator, FlatList} from 'react-native';
import UserInfo from '../Components/UserInfo';
import Header from '../Components/Header';
import {connect} from 'react-redux';
import {fetchTodosApiAction} from '../../store/actions';

const Dashboard = props => {
  useEffect(() => {
    props.fetchTodosApiAction();
  }, []);
  
  return (
    <View style={styles.contStyles}>
      <Header
        navigation={props.navigation}
        pageName={props.language.dashboard}
      />

      {props.loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={props.users}
          style={styles.flatListStyles}
          renderItem={({item}) => {
            return <UserInfo item={item} />;
          }}
          keyExtractor={item => `${item.id}`}
        />
      )}
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
  flatListStyles: {
    marginTop: '25%',
  },
});

const mapStateToProps = ({todos, localization}) => {
  return {
    users: todos.users,
    loading: todos.loading,
    language: localization.language,
  };
};

export default connect(
  mapStateToProps,
  {fetchTodosApiAction},
)(Dashboard);
