import * as React from "react";
import {View, Text, Button, KeyboardAvoidingView, ScrollView, StatusBar, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback, Platform, Image, Alert, Modal, Pressable } from "react-native";
import {useState} from 'react';

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
  const [modalVisible, setModalVisible] = useState(false);
  const [modalAnn, setModalAnn] = useState(false);
  
  
  if (!login) {
    return(
      <View
      style={{
        padding: 25,
        backgroundColor: "#1f1f1f",
      }}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
                source={require('./assets/drone.gif')} 
                style={{
                  width: 300,
                  height: 220,
                  borderRadius: 5,
                  marginBottom: 10,
                }}
              />
              <Text 
                style={{
                  fontSize: 20,
                  marginBottom: 5,
                  fontWeight: "300",
                }}
              >
                drone<Text style={{color:'#007ce2'}}>Tech</Text>
              </Text>
              <Text style={styles.modalText}>A drone or a UAV (unmanned aerial vehicle) typically refers to a pilotless aircraft that operates through a combination of technologies, including computer vision, artificial intelligence, object avoidance tech, and others. But drones can also be ground or sea vehicles that operate autonomously.</Text>
              <Text style={styles.modalText}>There will be some more info about Drone Tech.</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Done Reading</Text>
              </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalAnn}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalAnn(!modalAnn);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Image
            source={require('./assets/ann.gif')} 
            style={{
              width: 300,
              height: 220,
              borderRadius: 5,
              marginBottom: 10,
              resizeMode:"contain",
            }}
          />
              <Text 
                style={{
                  fontSize: 20,
                  marginBottom: 5,
                  fontWeight: "300",
                }}
              >
                artificial<Text style={{color:'#007ce2'}}>NeuralNetwork</Text>
              </Text>
              <Text style={styles.modalText}>An artificial neural network (ANN) is the piece of a computing system designed to simulate the way the human brain analyzes and processes information. It is the foundation of artificial intelligence (AI) and solves problems that would prove impossible or difficult by human or statistical standards. ANNs have self-learning capabilities that enable them to produce better results as more data becomes available.</Text>
              <Text style={styles.modalText}>There will be some more info about Artificial Neural Networks soon.</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalAnn(!modalAnn)}
              >
                <Text style={styles.textStyle}>Done Reading</Text>
              </Pressable>
          </View>
        </View>
      </Modal>
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
            title='Login'
            onPress={() => setlogin(true)}
          />
          {/* <Text
            style={{
              color: 'white',
              marginTop: 4,
              fontSize: 20,
            }}
          > 
            insights
          </Text> */}
          <Image
            source={require('./assets/logo.png')} 
            style={{
              marginTop:-10,
              marginBottom:-15,
              width: 146,
              height: 90,
              resizeMode:"contain",
            }}
          />
          <Button 
            title='Info'
            onPress={() => Alert.alert('This is just a practice, react native application, trying to cover all the important concepts of this framework and trying to master the art, Nothing serious just practicing.')}
          />
        </View>
          <TextInput
            style={{
              height: 40,
              borderColor: "rgba(255, 255, 255, 0.390)",
              borderRadius:5,
              borderBottomWidth: 1,
              padding: 10,
              marginTop: 20,
              color: "white",
              width: '100%',
              
            }}
            placeholder="Search "
          />  
      </View>
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
              marginTop:-70,
              padding:10,
            }}
            >
              droneTech
            </Text>
            <View
              style={{
                width:'100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: -20,
              }}
            >
              <Text
              style={{
                color:'white',
                fontSize: 15,
                padding:10,
              }}
              ># 1 Topic of Research
              </Text>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.textStyle}>Read More</Text>
              </Pressable>
            </View>
          </View>
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

                  <View
                    style={{
                      width:'100%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: -20,
                    }}
                  >
                    <Text
                    style={{
                      color:'white',
                      fontSize: 15,
                      padding:10,
                    }}
                    ># 2 Topic of Research
                    </Text>
                    <Pressable
                      style={[styles.button, styles.buttonOpenAnn]}
                      onPress={() => setModalAnn(true)}
                    >
                      <Text style={styles.textStyle}>Read More</Text>
                    </Pressable>
                  </View>
            </View>
          <PostTopicsThree />
          <PostTopicsFour />
        </ScrollView>
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
          <TextInput secureTextEntry={false} placeholder ="Email id" style={styles.textInput}/>
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
    marginTop: 12,
  },
  modalView: {
    margin: 20,
    marginTop:130,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#1f1f1f",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "rgba(0, 59, 107, 0.384)",
    marginRight:5,
  },
  buttonOpenAnn: {
    backgroundColor: 'rgba(22, 22, 22, 0.315)',
    marginRight: 5,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "300",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "justify"
  }
});
export default MainArea;
 