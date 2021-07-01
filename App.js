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
        >Insights</Text>
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
const PostTopicsOne = () => {
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
          droneTech
        </Text>

        <Text
        style={{
          color:'white',
          fontSize: 15,
          marginTop: -20,
          padding:10,
        }}
        ># 1 Topic of Research
        </Text>
      </View>
  );
}

const PostTopicsTwo = () => {
  return (
    <View
    style={{
      padding: 0,
      marginTop: 15,
      textAlign: 'left',
      lineHeight: 1,
    }}
    >
    <Image
        source={require('./assets/hero.gif')} 
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
          artificialNeuralNetwork
        </Text>

        <Text
        style={{
          color:'white',
          fontSize: 15,
          marginTop: -20,
          padding:10,
        }}
        ># 2 Topic of Rwsearch
        </Text>
      </View>
  );
}

const PostTopicsThree = () => {
  return(
    <View
    style={{
      padding: 0,
      marginTop: 15,
      textAlign: 'left',
      lineHeight: 1,
    }}
    >
    <Image
        source={require('./assets/python.gif')} 
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
          automation
        </Text>

        <Text
        style={{
          color:'white',
          fontSize: 15,
          marginTop: -20,
          padding:10,
        }}
        ># 3 Topic of Research
        </Text>
      </View>
  );
}

const PostTopicsFour = () => {
  return(
    <View
    style={{
      padding: 0,
      marginTop: 15,
      marginBottom: 20,
      textAlign: 'left',
      lineHeight: 1,
    }}
    >
    <Image
        source={require('./assets/rickMoty.gif')} 
        style={{
          width: 300,
          height: 220,
          borderRadius: 5,
        }}
        />
        <Text
        style={{
          color:'#000',
          fontSize: 20,
          marginTop:-60,
          padding:10,
        }}
        >
          tvShows
        </Text>

        <Text
        style={{
          color:'#000',
          fontSize: 15,
          marginTop: -20,
          padding:10,
        }}
        ># 4 Topic of Rwsearch
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
      <PostTopicsOne />
      <PostTopicsTwo />
      <PostTopicsThree />
      <PostTopicsFour />
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
 