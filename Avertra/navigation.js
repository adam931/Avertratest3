import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from './src/Containers/Login';
import Dashboard from './src/Containers/Dashboard';
import Profile from './src/Containers/Profile';
import Localization from './src/Containers/Localization'
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();


function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

function RightDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerPosition={'right'}>
      <Drawer.Screen name="Dashboard" component={HomeStack} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Logout" component={Login} />
      <Drawer.Screen name="Localization" component={Localization} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RightDrawer />
    </NavigationContainer>
  );
}

export default App;
