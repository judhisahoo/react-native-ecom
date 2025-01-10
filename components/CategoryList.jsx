import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const CategoryList = ({ categories, onSelect, onPress }) => {
  const [expandedParentId, setExpandedParentId] = useState(null); // State to track the expanded parent category

  const handleParentPress = (parentId) => {
    // Toggle the expanded state for the selected parent category
    setExpandedParentId((prevId) => (prevId === parentId ? null : parentId));
  };

  const renderCategoryItem = ({ item }) => (
    <View>
      {/* Parent Category */}
      <TouchableOpacity onPress={() => handleParentPress(item.id)} style={styles.categoryItem}>
        <Text style={styles.categoryName}>{item.name}</Text>
      </TouchableOpacity>

      {/* Child Categories */}
      {expandedParentId === item.id && item.children && item.children.length > 0 && (
        <FlatList
          data={item.children}
          keyExtractor={(child, index) => child.id || index.toString()}
          renderItem={({ item: child }) => (
            <TouchableOpacity onPress={() => onSelect(child)} style={styles.childCategoryItem}>
              <Text style={styles.childCategoryName}>- {child.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton} onPress={onPress}>
        <Text style={styles.footerButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
    <FlatList
      data={categories}
      keyExtractor={(item, index) => item.id || index.toString()}
      renderItem={renderCategoryItem}
      ListFooterComponent={renderFooter} // Add the footer button here
    />
    </>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  categoryName: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  childCategoryItem: {
    paddingLeft: 30,
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
  },
  childCategoryName: {
    fontSize: 10,
    color: '#555',
  },
  footer: {
    paddingRight:145,
    paddingLeft:10,
    alignItems: 'left',
    backgroundColor: '#fff',
  },
  footerButton: {
    padding: 5,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  footerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
  },
});

export default CategoryList;
