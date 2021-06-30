import * as React from "react";
import { View, Text, ScrollView, TextInput, Image } from "react-native";

const MainArea = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 26,
        backgroundColor: "#1f1f1f",
      }}
    >
      <View 
        style={{
          overflow: "hidden",
          top: 0,
          position: 'fixed',
        }}
      >
      <Text
        style={{
          color: 'white',
          marginTop: 40,
          fontSize: 20,
        }}
      >sauravDutt</Text>
      <Text
      style={{
        color: 'white',
        fontSize: 20,
      }}
      >
      First-App🖖 
      </Text>
      <TextInput
        style={{
          height: 40,
          borderRadius: 10,
          borderWidth: 1,
          marginTop: 20,
          padding: 10,
          color: "white",
          backgroundColor: 'transparent',
          borderColor: 'gray'
        }}
        placeholder="Your Research !!"
      />
      </View>
      <View
        style={{
          width:320,
          height: 420,
        }}
      >

      </View>
      <Image
        source={require('./assets/drone.gif')} 
        style={{
          width: 320,
          height: 420,
          marginTop: 20,
          borderRadius: 5,
        }}
      />
      
    </ScrollView>
  );
}

export default MainArea;
 