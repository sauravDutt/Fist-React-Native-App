import * as React from "react";
import {View, Text, Button, KeyboardAvoidingView, ScrollView, StatusBar, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback, Platform, Image, Alert } from "react-native";
import {useState} from 'react';
import Login from "./components/Login";

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
          width:330,
          height: 20,
          padding: 15,
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
  const [login, setlogin] = useState(false);
  const [signin, setSignin] = useState(false);
  if (!login) {
    return(
      <View
      style={{
        padding: 25,
        backgroundColor: "#1f1f1f",
      }}
    >
      < View 
        style={{
          width: '100%',
          height: '100%',
        }}
      >
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
            onPress={() => setlogin(true)}
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
            onPress={() => Alert.alert('This is just a practice, react native application, trying to cover all the important concepts of this framework and trying to master the art, Nothing serious just practicing.')}
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
        <Caption />
        <Posts />
        <Footer />
      </View>

    </View>
    );
  }
  if(signin) {
    return(
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar
        barStyle= 'dark-content'
        />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Sign in</Text>
          <TextInput placeholder="Any unique Username" style={styles.textInput} />
          <TextInput placeholder ="Email id" style={styles.textInput}/>
          <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Password" />
          <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Confirm Password" />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => setSignin(false)} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar
        barStyle= 'dark-content'
        />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Login</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Password" />
          <View style={styles.btnContainer}>
            <Button title="Login" onPress={() => setlogin(false)} />
            <Button title="Sign in" onPress={() => setSignin(true)} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 40,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "white",
    marginTop: 12
  }
});
export default MainArea;
 