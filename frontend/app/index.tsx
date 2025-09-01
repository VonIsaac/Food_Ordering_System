import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ImageBackground } from 'expo-image'
import { Link } from 'expo-router'

const App = () => {
  return (
    <View style ={styles.container}>
        <ImageBackground source={require('@/assets/images/mtea.jpg')} style={styles.image}>
            <Text style={styles.title}>Tsokolatea</Text>
            <Link href="/pages/user/login">
                <Text style={styles.linkText}>Browse</Text>
            </Link>
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
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
      linkText: {
    color: 'blue',
    fontSize: 18,
    textDecorationLine: 'underline',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
})