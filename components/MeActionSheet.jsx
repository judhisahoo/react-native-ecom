import React, { forwardRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

const MeActionSheet = forwardRef((_, ref) => {
  return (
    <ActionSheet ref={ref}>
      <View style={styles.actionSheetContent}>
        <Text style={styles.actionTitle}>Me Options</Text>
        <TouchableOpacity style={styles.actionItem} onPress={() => alert('Profile')}>
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem} onPress={() => alert('Settings')}>
          <Text>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem} onPress={() => alert('Logout')}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  );
});

const styles = StyleSheet.create({
  actionSheetContent: {
    padding: 20,
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  actionItem: {
    paddingVertical: 10,
  },
});

export default MeActionSheet;
