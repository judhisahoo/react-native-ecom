import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import MeScreen from '../screens/MeScreen';
import SupportScreen from '../screens/SupportScreen';
import { useNavigation } from 'expo-router';

const Tab = createBottomTabNavigator();

const Layout = () => {
  const navigation = useNavigation();
  return (
      
        <View style={styles.container}>
          <Header />
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Me" component={MeScreen} />
            <Tab.Screen name="Support" component={SupportScreen} />
          </Tab.Navigator>
          <Footer navigation={navigation}/>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Layout;
