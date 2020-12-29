import React, {useState} from 'react';
import {View, Animated, TouchableOpacity, Text} from 'react-native';

export default function App() {
  const value = useState(new Animated.ValueXY({x: 0, y: 0}))[0];

  function moveBall() {
    Animated.timing(value, {
      toValue: {x: 100, y: 100},
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }

  return (
    <View>
      <Animated.View style={value.getLayout()}>
        <View
          style={{
            borderRadius: 200,
            backgroundColor: 'red',
            height: 100,
            width: 100,
          }}></View>
      </Animated.View>

      <TouchableOpacity onPress={moveBall}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}
