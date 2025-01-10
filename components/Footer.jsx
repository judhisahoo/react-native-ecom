import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MeActionSheet from '../components/MeActionSheet';
import SupportActionSheet from '../components/SupportActionSheet';

const Footer = ({ navigation }) => {
  const meActionSheetRef = useRef(null); // Reference for "Me" action sheet
  const supportActionSheetRef = useRef(null); // Reference for "Support" action sheet

  const openMeActionSheet = () => {
    meActionSheetRef.current?.setModalVisible(); // Open "Me" action sheet
  };

  const openSupportActionSheet = () => {
    supportActionSheetRef.current?.setModalVisible(); // Open "Support" action sheet
  };

  return (
    <View style={styles.footer}>
      {/* Home Tab */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.tab}>
        <Text style={styles.tabText}>Home</Text>
      </TouchableOpacity>

      {/* Cart Tab */}
      <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.tab}>
        <Text style={styles.tabText}>Cart</Text>
      </TouchableOpacity>

      {/* Me Tab */}
      <TouchableOpacity onPress={openMeActionSheet} style={styles.tab}>
        <Text style={styles.tabText}>Me</Text>
      </TouchableOpacity>

      {/* Support Tab */}
      <TouchableOpacity onPress={openSupportActionSheet} style={styles.tab}>
        <Text style={styles.tabText}>Support</Text>
      </TouchableOpacity>

      {/* Include the Action Sheets */}
      <MeActionSheet ref={meActionSheetRef} />
      <SupportActionSheet ref={supportActionSheetRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tab: {
    padding: 10,
  },
  tabText: {
    fontSize: 16,
    color: '#007BFF',
  },
});

export default Footer;
