import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import RegisterScreen from './screen/RegisterScreen'
import WelcomeScreenn from './screen/WelcomeScreen'

export default class App extends React.Component {
  render() {
    return (
      // <View style={{flex: 1}}>
      //   <View style={{width: 150, height: 150, backgroundColor: 'red',justifyContent:'flex-end'}}>
      //     <View style={{width: 100, height: 100, backgroundColor: 'green'}}/>
      //   </View>
      //   <View style={{width: 150, height: 150, backgroundColor: 'skyblue',justifyContent:'center', alignItems:'center'}}>
      //     <View style={{width: 100, height: 100, backgroundColor: 'green'}}/>
      //   </View>
      //   <View style={{width: 150, height: 150, backgroundColor: 'steelblue',justifyContent:'flex-end', alignItems:'flex-end'}}>
      //     <View style={{width: 100, height: 100, backgroundColor: 'green'}}/>
      //   </View>
      // </View>
      // <View style={{flex: 1, backgroundColor:'#9E9E9E'}}>
      //   <View style={styles.header}>
      //     <Image
      //       source={{uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiK1I-s9bXhAhWwgUsFHb2iAAAQjRx6BAgBEAU&url=https%3A%2F%2Fblog.novoda.com%2Freact-native-flutter-xamarin-a-comparison%2F&psig=AOvVaw2lJ_vFtPPD877AFACEr_c1&ust=1554449366801296'}} 
      //       style={{width: 250, height: 100, jus}}
      //     />
      //     <Text>
      //       I am learninng React Native
      //     </Text>
      //   </View>
      // </View>
      <View style={styles.container}>
        <WelcomeScreenn/>
      </View>
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
