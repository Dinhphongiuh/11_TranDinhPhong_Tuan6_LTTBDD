import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Pressable, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const [fontsLoaded] = useFonts({
    PixelFont: require('./font/VT323.ttf'),
    UbutuFont: require('./font/Ubuntu/Ubuntu-Bold.ttf'),
    VoltaireFont: require('./font/Voltaire/Voltaire-Regular.ttf'),
  });
  const [activePressable, setActivePressable] = useState(1);
  const [isHeartActive, setIsHeartActive] = useState(false);

  const handlePressHeartActive = () =>{
    setIsHeartActive(!isHeartActive);
  };

  // const products = [
  //   { id: 1, name: 'Pinarello', price: '1800', image: require('./assets/product1.png'), heartActive: true},
  //   { id: 2, name: 'Pina Mountai', price: '1700', image: require('./assets/product2.png'), heartActive: false },
  //   { id: 3, name: 'Pina Bike', price: '1500', image: require('./assets/product3.png'), heartActive: false },
  //   { id: 4, name: 'Pinarello', price: '1900', image: require('./assets/product4.png'), heartActive: false },
  //   { id: 5, name: 'Pinarello', price: '2700', image: require('./assets/product5.png'), heartActive: false },
  //   { id: 6, name: 'Pinarello', price: '1350', image: require('./assets/product6.png'), heartActive: false },
  // ];

  const [products, setProducts] = useState([
    { id: 1, name: 'Pinarello', price: '1800', image: require('./assets/product1.png'), heartActive: true },
    { id: 2, name: 'Pina Mountai', price: '1700', image: require('./assets/product2.png'), heartActive: false },
    { id: 3, name: 'Pina Bike', price: '1500', image: require('./assets/product3.png'), heartActive: false },
    { id: 4, name: 'Pinarello', price: '1900', image: require('./assets/product4.png'), heartActive: false },
    { id: 5, name: 'Pinarello', price: '2700', image: require('./assets/product5.png'), heartActive: false },
    { id: 6, name: 'Pinarello', price: '1350', image: require('./assets/product6.png'), heartActive: false },
  ]);

  const handlePressHeartActive1 = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        // Đặt lại trạng thái heartActive thành true
        if (product.heartActive === true)
          return { ...product, heartActive: false };
        else
        return { ...product, heartActive: true };
      }
      return product;
    });

    // Cập nhật mảng sản phẩm với trạng thái mới
    setProducts(updatedProducts);
  };

  if (!fontsLoaded)
  {
    return null;
  }

  const handlePress = (pressableNumber) => {
    setActivePressable(pressableNumber);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TitleTContainer}>
        <Text style={styles.TitleTText}>The world’s Best Bike</Text>
      </View>

      <View style={styles.MenuNavContainer}>
       <Pressable 
        style={({pressed}) => [
          styles.pressable, 
          activePressable === 1 &&  
          pressed && activePressable === 1
        ]}
        onPress={() => handlePress(1)}
       >
        <Text style={[styles.pressableText,
          activePressable === 1 && styles.pressableTextActive,
        ]}>
          All
        </Text>
       </Pressable>

       <Pressable 
        style={({pressed}) => [
          styles.pressable, 
          activePressable === 2 &&  
          pressed && activePressable === 2
        ]}
        onPress={() => handlePress(2)}
       >
        <Text style={[styles.pressableText,
          activePressable === 2 && styles.pressableTextActive,
        ]}>
          Roadbike
        </Text>
       </Pressable>

       <Pressable 
        style={({pressed}) => [
          styles.pressable, 
          activePressable === 3 &&  
          pressed && activePressable === 3
        ]}
        onPress={() => handlePress(3)}
       >
        <Text style={[styles.pressableText,
          activePressable === 3 && styles.pressableTextActive,
        ]}>
          Mountain
        </Text>
       </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.ContainerProductScoll}>
        {products.map((product => (
          <TouchableOpacity 
            key={product.id}
            style={styles.productContainer}
          >
            <View style={styles.ImageIconButoonContainer}>
              <TouchableOpacity 
                style={styles.HeartButton}
                onPress={() => handlePressHeartActive1(product.id)}
                >
                <Icon
                  style={[styles.heartIcon, product.heartActive ? styles.heartIconActive : null]}
                  size={25}
                  name='heart'
                ></Icon>
              </TouchableOpacity>
              <Image
                resizeMode='contain'
                style={styles.productImage}
                source={product.image}
              ></Image>  
            </View>  
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.prudctPrice}><Text style={{color: '#F7BA83'}}>$ </Text>{product.price}</Text>
          </TouchableOpacity>         
        )))}
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  TitleTContainer:{
    marginBottom: '10%',
    marginTop: '15%',
    width: '90%',
  },
  TitleTText:{
    // fontFamily: 'UbutuFont',
    fontFamily: 'PixelFont',
    color: '#E94141',
    // fontSize: 25,
    fontSize: 30,
    fontWeight: '700',
  },
  MenuNavContainer:
  {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  pressable:{
    width: 99,
    height: 32,
    borderWidth: 1,
    borderColor: '#E9414187',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressableText: {
    fontFamily: 'VoltaireFont',
    fontWeight: '400',
    color: '#BEB6B6',
    fontSize: 20,
  },
  pressableTextActive: {
    color: '#E94141',
    fontWeight: 'bold',
    fontFamily: 'PixelFont',
    fontSize: 28,
  },

  // 
  ContainerProductScoll:{
    flex: 1,
    // width: '100%',
    minHeight: 700,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  productContainer:{
    width: '45%',
    margin: 5,
    padding: 10,
    backgroundColor: '#F7BA8326',
    borderRadius: 5,

    
  },
  productImage: {
    width: 135,
    height: 127,
  },
  productName:{
    fontFamily: 'VoltaireFont',
    fontSize: 20,
    color: '#00000099',
    opacity: 0.6,
    textAlign: 'center',
    fontWeight: '400',
  },
  prudctPrice: {
    textAlign: 'center',
    fontFamily: 'VoltaireFont',
    fontSize: 20,
    fontWeight: '400',
  },
  HeartButton:{
    width: 25,
    height: 25,
  },
  heartIcon:{
    color: '#54545426',
  },
  heartIconActive:{
    color: '#E94141',
  }
});
