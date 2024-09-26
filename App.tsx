import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Navigation from './src/navigation/navigation';
import Home from './src/screen/Home';

const App = () => {
  return (
    <>
    <Home/>
      {/* <Navigation/> */}
    </>

    // <View style={styles.container}>
    //   <Text style={styles.text}>Hello World</Text>
    // </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, // Takes up the entire available height and width
//     backgroundColor: 'red',
//     justifyContent: 'center', // Centers the text vertically
//     alignItems: 'center', // Centers the text horizontally
//   },
//   text: {
//     fontSize: 60, // No need for 'px' in React Native
//     color:'#fff',
//   },
// });

export default App;
