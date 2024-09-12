import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {  StyleSheet } from 'react-native';
import Navigation from './Navigation';
import LoginScreen from './Components/Login/Login.jsx';
import BankAccount from './screen/BankAccount.jsx';
import Workexp from './screen/Workexp.jsx';
import Document from './screen/Document.jsx'
import SocialPRofile from './screen/SocialProfile.jsx'
import Qualification from './screen/Qualification.jsx';
import EmergencyContact from './screen/Emergency.jsx';
import Immigration from './screen/Immigration.jsx';
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
    {/* <LoginScreen /> */}
    <NavigationContainer>
    <Stack.Navigator                                                                                             
      initialRouteName="Drawer"
      screenOptions={{
        headerStyle: { backgroundColor: "#004080" },
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
    
      <Stack.Screen name="BankAccount" component={BankAccount} />
      <Stack.Screen name="SocialProfile" component={SocialPRofile} />

      <Stack.Screen name="WorkExp" component={Workexp} />
      <Stack.Screen name="Document" component={Document} />
      <Stack.Screen name="Qualification" component={Qualification} />
      <Stack.Screen name="Emergency" component={EmergencyContact} />
      <Stack.Screen name="Immigration" component={Immigration} />



      



      <Stack.Screen name="Drawer" component={Navigation} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;

