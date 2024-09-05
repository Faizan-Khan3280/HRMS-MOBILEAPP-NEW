import React from 'react';
import {  StyleSheet } from 'react-native';
import Navigation from './Navigation';
import LoginScreen from './Components/Login/Login.jsx';

const App = () => {
  return (
    <>
    {/* <LoginScreen /> */}
    <Navigation />
    
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

