// import React from 'react'
// import {View,Text} from 'react-native'

// export default class Capture extends React.Component{
//     render(){
//         return(
//             <View>
//                 <Text>Capture</Text>
//             </View>
//         )
//     }
// }


import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Dimensions, View } from 'react-native';

import {RNCamera }  from 'react-native-camera';
import Entypo from 'react-native-vector-icons/Entypo';

//const PicturePath = '';

export default class MyCamera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraType: 'back',
      mirrorMode: false,
      PicturePath:''
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={cam => {
            this.camera = cam;
          }}
          style={styles.preview}
          // aspect={RNCamera.constants.Aspect.fill}
          // captureTarget={Camera.constants.CaptureTarget.disk}
          captureAudio={false}
          type={this.state.cameraType}
          mirrorImage={this.state.mirrorMode}
        >
          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
         
          <Text style={styles.capture} onPress={this.storePicture.bind(this)}>
         [UPLOAD]
          </Text>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
            <Entypo name='camera' size={15}/>
          </Text>
          <Text
            style={styles.capture}
            onPress={this.changeCameraType.bind(this)}
          >
            [SWITCH O ROONEY]
          </Text>
          </View>
        </RNCamera>
      </View>
    );
  }

  changeCameraType() {
    if (this.state.cameraType === 'back') {
      this.setState({
        cameraType: 'front',
        mirrorMode: true
      });
    } else {
      this.setState({
        cameraType: 'back',
        mirrorMode: false
      });
    }
  }

  storePicture() {
    console.log("camera value",this.state.PicturePath)
    if (this.state.PicturePath) {
      // Create the form data object
      var data = new FormData();
      data.append('picture', {
        uri: this.state.PicturePath,
        name: 'selfie.jpg',
        type: 'image/jpg'
      });

      // Create the config object for the POST
      // You typically have an OAuth2 token that you use for authentication
      const config = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data;',
          Authorization: 'Bearer ' + 'SECRET_OAUTH2_TOKEN_IF_AUTH'
        },
        body: data
      };

      fetch('https://postman-echo.com/post', config)
        .then(responseData => {
          // Log the response form the server
          // Here we get what we sent to Postman back
          console.log(responseData,"response value");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  takePicture() {
    this.camera
      .takePictureAsync()
      .then(data => {
        console.log(data.uri,"capture dtata");
        //PicturePath = data.uri;
        this.setState({PicturePath:data.uri})
      })
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});