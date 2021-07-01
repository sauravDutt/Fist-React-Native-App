import * as React from "react";
import { View, Text, ScrollView, TextInput, Image } from "react-native";

const Header = () => {
  return (
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
        >Research</Text>
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
  );
}
const Footer = () => {
  return (
    <Text 
        style={{
          textAlign: 'center',
          color: "rgba(255, 255, 255, 0.562)",
          marginBottom:20,
        }}
      > 
      @ sauravDutt - This is just a practice project
      </Text>
  );
}
const PostTopics = (props) => {
  return (
    <View
    style={{
      padding: 0,
      textAlign: 'left',
      lineHeight: 1,
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
        <Text
        style={{
          color:'white',
          fontSize: 20,
          marginTop:-60,
          padding:10,
        }}
        >
          {props.title}
        </Text>

        <Text
        style={{
          color:'white',
          fontSize: 15,
          marginTop: -20,
          padding:10,
        }}
        ># {props.number} Topic of Research
        </Text>
      </View>
  );
}

const Posts = () => {
  return (
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
      <PostTopics  title = "droneTech" number='1'/>
      </ScrollView>
  );
}

const Caption = () => {
  return (
    <Text
      style ={{
        textAlign:'center',
        color:'rgba(255, 255, 255, 0.562)',
        marginTop: 10,
        marginBottom: -10,
      }}
    >
      Choose A Topic For Research 👇 
    </Text>
  )
}
const MainArea = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 26,
        backgroundColor: "#1f1f1f",
      }}
    >
      <Header />
      <Caption />
      <Posts />
      <Footer />

    </View>
  );
}

export default MainArea;
 