import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tja nööööööööörd!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
