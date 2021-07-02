import * as React from "react";
import {View, ActivityIndicator, Text, Button , ScrollView, TextInput, Image, Alert } from "react-native";

const Header = () => {
  return (
    <View 
        style={{
          overflow: "hidden",
          top: 0,
          position: 'fixed',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 40,
          }}
        >
          <Button 
            title='Add'
            onPress={() => Alert.alert("Soon this button will let you add an insight, when I'll figure out how to add backend to a react native app")}
          />
          <Text
            style={{
              color: 'white',
              marginTop: 4,
              fontSize: 20,
            }}
          > 
            insights
          </Text>
          <Button 
            title='Info'
            onPress={() => Alert.alert('This is just a practice, react native application, trying to cover all the important concepts of this framework and trying to master the art.')}
          />
        </View>
          <TextInput
            style={{
              height: 40,
              borderRadius: 10,
              borderWidth: 0.1,
              padding: 10,
              marginTop: 20,
              color: "white",
              width: '100%',
              borderColor: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.031)'
              
            }}
            placeholder="Search "
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
        ># 2 Topic of Research
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
        ># 4 Topic of Research
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
      Choose a topic of interest 👇 
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
 