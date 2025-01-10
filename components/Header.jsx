import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../store/slices/categorySlice';
import CategoryList from '../components/CategoryList'; // Import the new component

const Header = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const { data: categories, loading } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = React.useState('');

  useEffect(() => {
    dispatch(fetchCategories()); // Fetch categories on component mount
  }, [dispatch]);

  const showCategoryModel = () => {
    console.log('categories ::', categories); // Debugging
    setModalVisible(true); // Show the modal
  };

  const handleCategorySelect = (category) => {
    //setModalVisible(false); // Close the modal
    alert(`Selected Category: ${category.id}`);
  };

  const handleCloseModel = () =>{
    setModalVisible(false);
  }

  return (
    <View style={styles.header}>
      {/* Category Icon */}
      <TouchableOpacity onPress={showCategoryModel}>
        <Text style={styles.icon}>☰</Text>
      </TouchableOpacity>

      {/* Search Box */}
      <TextInput
        style={styles.searchBox}
        placeholder="Search"
        value={searchText}
        onChangeText={setSearchText}
      />

      {loading && <Text>Loading...</Text>}

      {/* Modal for Categories */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modal}>
          {categories.length > 0 ? (
            <CategoryList categories={categories} onSelect={handleCategorySelect} onPress={()=>handleCloseModel()}/>
          ) : (
            <Text style={styles.noDataText}>No Categories Available</Text>
          )}
          {/*<TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>*/}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  icon: {
    fontSize: 20,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    /*paddingHorizontal: 40,*/
    paddingRight:150,
    paddingLeft:10,
  },
  noDataText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  searchBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
});

export default Header;
