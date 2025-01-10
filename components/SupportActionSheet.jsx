import React, { forwardRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

const SupportActionSheet = forwardRef((_, ref) => {
  return (
    <ActionSheet ref={ref}>
      <View style={styles.actionSheetContent}>
        <Text style={styles.actionTitle}>Support Options</Text>
        <TouchableOpacity style={styles.actionItem} onPress={() => alert('Contact Support')}>
          <Text>Contact Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem} onPress={() => alert('FAQ')}>
          <Text>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem} onPress={() => alert('Report Issue')}>
          <Text>Report Issue</Text>
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

export default SupportActionSheet;
