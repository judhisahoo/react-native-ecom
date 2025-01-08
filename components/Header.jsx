import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Modal, FlatList, Text } from "react-native";

const Header = () => {
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  const categories = ["Category 1", "Category 2", "Category 3"];

  const handleCategorySelect = (category) => {
    setCategoryVisible(false);
    alert(`Selected Category: ${category}`);
  };

  return (
    <View style={styles.header}>
      {/* Category Icon */}
      <TouchableOpacity onPress={() => setCategoryVisible(true)} style={styles.icon}>
        <Text style={styles.iconText}>☰</Text>
      </TouchableOpacity>

      {/* Search Box */}
      <TextInput
        style={styles.searchBox}
        placeholder="Search"
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Category Dropdown */}
      <Modal visible={categoryVisible} transparent animationType="slide">
        <View style={styles.modal}>
          <FlatList
            data={categories}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleCategorySelect(item)} style={styles.categoryItem}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity onPress={() => setCategoryVisible(false)} style={styles.closeButton}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
  },
  icon: { padding: 10 },
  iconText: { fontSize: 20 },
  searchBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  modal: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" },
  categoryItem: { padding: 10, backgroundColor: "#fff", marginVertical: 5, borderRadius: 5 },
  closeButton: { marginTop: 10, padding: 10, backgroundColor: "#fff", borderRadius: 5 },
});

export default Header;
