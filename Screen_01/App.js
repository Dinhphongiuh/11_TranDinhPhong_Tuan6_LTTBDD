import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    PixelFont: require('./font/VT323.ttf'),
    UbutuFont: require('./font/Ubuntu/Ubuntu-Bold.ttf'),
  });

  if (!fontsLoaded)
  {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.TitleContainer}>
        <Text style={styles.textTitle}>A premium online store for sporter and their stylish choice</Text>
      </View>
      <View style={styles.ImgContainer}>
        <Image
          style={styles.img}
          source={require('./assets/bifour_-removebg-preview.png')}
          resizeMode='contain'
        ></Image>
      </View>

      <View style={styles.ShopTitleContainer}>
        <Text style={styles.ShopTitle}>POWER BIKE SHOP</Text>
      </View>

      <TouchableOpacity style={styles.startBtn}>
        <Text style={styles.textBtn}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  TitleContainer:{
    width: '90%',
    marginTop: '10%',
  },
  textTitle:
  {
    fontFamily: 'PixelFont',
    fontWeight: '400',
    fontSize: 26,
    textAlign: 'center',
    lineHeight: 26,
  },
  ImgContainer:{
    backgroundColor: '#E941411A',
    width: '90%',
    height: '50%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img:{
    width: '70%',
    height: '65%',
  },
  ShopTitleContainer:{
    width: '50%',
    marginBottom: '10%',
  },
  ShopTitle:{
    fontWeight: '700',
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'UbutuFont',
  },
  startBtn:{
    backgroundColor: '#E94141',
    width: '90%',
    height: 61,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: '10%',
  },
  textBtn:{
    fontFamily: 'PixelFont',
    fontWeight: 400,
    fontSize: 27,
    color: '#FEFEFE',
  }
});
