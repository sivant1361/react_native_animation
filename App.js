import React from 'react';
import {View, Animated, TouchableOpacity, Text} from 'react-native';

export default function App() {
  function moveBall() {}

  return (
    <View>
      <Animated.View style={{borderRadius:200,backgroundColor:'red',height:100,width:100}}>

      </Animated.View>

      <TouchableOpacity>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}
