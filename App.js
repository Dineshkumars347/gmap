import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Gmap from './Components/Gmap';
import NewGmap from './Components/Newgmap'


export default class  App extends Component {
render() {
  return (
    <View>
<Gmap></Gmap>
    </View>

    // <NewGmap></NewGmap>
    
  );
}


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
