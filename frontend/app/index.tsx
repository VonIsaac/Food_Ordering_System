import { View, Text, StyleSheet,Button, ImageBackground } from 'react-native'
import React from 'react'
 import { Link } from 'expo-router' 

const App = () => {

  const handleFunction = () => {
    console.log("Function called");
  }
  return (
    <View style={styles.container}>
      <ImageBackground  source={require('@/assets/images/tsokolatea.jpg')} style={styles.image}>
        <Text style={styles.text}>Coffe Shop</Text>
          <Link href="/explore" asChild>
            <Text style={styles.linkText}>Go to Explore</Text>
          </Link>
          <Button title="Call Function" onPress={handleFunction} />
      </ImageBackground>
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',

  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold',
  },
  linkText: {
    color: 'blue',
    fontSize: 18,
    textDecorationLine: 'underline',
    marginTop: 20,
    marginBottom: 20,
  },
})
