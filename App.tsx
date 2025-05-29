import React from 'react';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';

export default function App() {
  const handlePress = () => {
    Alert.alert("Assignment 1 Completed");
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' }}
        style={styles.logo}
      />
      <Text style={styles.heading}>Millions of Songs. Free on Spotify.</Text>
      <Button title="Sign Up Free" onPress={handlePress} />
      <Button title="Continue with Google" onPress={() => {}} />
      <Button title="Log In" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1DB954',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30
  },
  heading: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30
  }
});
