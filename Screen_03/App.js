import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const App = () => {
  const [activePressable, setActivePressable] = useState(1);

  const handlePress = (pressableNumber) => {
    setActivePressable(pressableNumber);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.pressable,
          activePressable === 1 && pressed && { borderColor: 'red' },
        ]}
        onPress={() => handlePress(1)}
      >
        <Text
          style={[
            styles.text,
            activePressable === 1 && { color: 'red', fontWeight: 'bold' },
          ]}
        >
          Pressable 1
        </Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.pressable,
          activePressable === 2 && pressed && { borderColor: 'red' },
        ]}
        onPress={() => handlePress(2)}
      >
        <Text
          style={[
            styles.text,
            activePressable === 2 && { color: 'red', fontWeight: 'bold' },
          ]}
        >
          Pressable 2
        </Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.pressable,
          activePressable === 3 && pressed && { borderColor: 'red' },
        ]}
        onPress={() => handlePress(3)}
      >
        <Text
          style={[
            styles.text,
            activePressable === 3 && { color: 'red', fontWeight: 'bold' },
          ]}
        >
          Pressable 3
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressable: {
    width: 200,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default App;
