import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import icedCoffeeImg from "@/assets/images/iced-coffee.png"
import { Link } from 'expo-router'

const app = () => {
  return (
    <View style={Styles.container}>
      <ImageBackground
      source = {icedCoffeeImg}
      resizeMode="cover"
      style={Styles.image}
      >
      <Text style={Styles.title}>Coffee shop</Text>

      <Link href="/contact" style={{ marginHorizantal: 'auto' }} asChild>
      <pressable style={Styles.button}>
        <Text style={Styles.buttonText}>Contact Us</Text>
      </pressable>
      </Link>

      </ImageBackground>
    </View>
  )
}

export default app
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

  },

  image: {
width: '100%',
height:'100%',
flex: 1,
resizeMode:'Cover',
justifyContent : 'center',
  },

   title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120,
  },


  link: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4,
  },

button: {
height: 60,
borderRadius: 20,
justifyContent: 'center',
backgroundColor:'rgba(0,0,0,0.75)',
padding: 6,
},

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  }
})