// AppLogo.jsx
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


const AppLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/Logo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 150,
    height: 50,
  },
});

export default AppLogo;
