import * as React from "react";
import { View, Text, ScrollView, TextInput, Image } from "react-native";

const MainArea = () => {
  return (
    <View
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
            borderColor: 'gray'
            
          }}
          placeholder="Your Research !!"
        />
      </View>
      <ScrollView
        style={{
          width:320,
          height: 20,
          padding: 10,
          marginTop: 20,
          marginBottom: 15,
          borderRadius: 10,
          backgroundColor: "rgba(255, 255, 255, 0.021)",
        }}
      >
          <Image
          source={require('./assets/drone.gif')} 
          style={{
            width: 300,
            height: 220,
            borderRadius: 5,
          }}
        />
      </ScrollView>
      <Text 
        style={{
          textAlign: 'center',
          color: "white",
          marginBottom:20,
        }}
      > 
      @ sauravDutt - This is just a practice project
      </Text>
        {/* <Image
          source={require('./assets/drone.gif')} 
          style={{
            width: 320,
            height: 420,
            marginTop: 20,
            marginBottom: 80,
            borderRadius: 5,
          }}
        /> */}

    </View>
  );
}

export default MainArea;
 