import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Text>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Me')}>
        <Text>Me</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Support')}>
        <Text>Support</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
});

export default Footer;
