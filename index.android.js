/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
  Dimensions,
  TouchableOpacity
} from 'react-native';

 const { height, width } = Dimensions.get('window');
import MediaPlayer from './MediaPlayer'

export default class reactNativeAndroidMediaPlayer extends Component {
  constructor(props){
    super(props);
    this.state = {
      uri: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      play: true
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  play (){
    if (this.state.prepared === true) {
      this.setState({ playing: true });
      MediaPlayer.play();
      return true;
    }
    return false;
  }

  pause (){
    if (this.state.prepared === true && this.state.playing === true) {
      MediaPlayer.pause();
      this.setState({ playing: false })
      return true;
    }
    return false;
  }

  componentDidMount() {
    console.log(MediaPlayer)
  }

  play () {
    this.setState({
      play: true
    })
  }

  stop () {
    this.setState({
      play: false
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.play}><Text style={{fontSize: 20}}>Play</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.stop}><Text style={{fontSize: 20}}>Pause</Text></TouchableOpacity>
        <MediaPlayer style={{width, height}} uri={this.state.uri} speed={"0.5"} play={this.state.play}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reactNativeAndroidMediaPlayer', () => reactNativeAndroidMediaPlayer);
