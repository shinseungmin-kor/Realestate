/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {
   StyleSheet,
   SafeAreaView,
   View,
   Button,
   Text,
   TextInput,
 } from 'react-native';
 
 const Calculator = () => {
 
   return (
     <SafeAreaView style={styles.container}>
       <View style={styles.form}>
         <Text style={styles.title}>Send SMS using react-native on Android</Text>
       </View>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#eee',
   },
   form: {
     padding: 20,
   },
   title: {
     fontSize: 20,
     marginBottom: 20,
   },
   textInput: {
     backgroundColor: '#fff',
     marginBottom: 5,
   },
 });
 
 export default Calculator;