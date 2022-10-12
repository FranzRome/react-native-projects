import React, { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import Constants from 'expo-constants';

const AppFC = () => {

   // Inserisco lo stato iniziale nelle parentesi tonde
   const [key, setKey] = useState(1);
   const [array, setArray] = useState([]);
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [secureText, setSecureText] = useState(true);

   useEffect(() => {
      console.warn('componente renderizzato');
      setKey(2); //Ho cambiato il valore da 1 a 2
      setArray([1, 2, 3]);
      //setArray(...array, 4);
   }, []);

   const onPressShowPassword = () => {
      setSecureText(!secureText);
   }

   const loginAlert = () => {
      alert('Login success');
   }

   const accessDeniedAlert = () => {
      alert('Access Denied!');
   }

   const checkLogin = (username, password) => {
      if (username === '123' && password === '123') return true;

      return false;
   }

   return (
      <View style={{ flex: 1 }}>
         <View style={{ flex: 1, padding: 28, backgroundColor: 'yellow', justifyContent: 'center' }}>
            <TextInput placeholder="Username" onChangeText={setUsername} style={styles.input} />
            <TextInput placeholder="Password" secureTextEntry={secureText} onChangeText={setPassword} style={styles.input} />
            <Button title={secureText ? 'Mostra password' : 'Nascondi Password'} style={{ backgroundColor: 'rgba(52, 52, 52, 0.8)' }} onPress={onPressShowPassword}></Button>

         </View>
         <View style={{ flex: 1, backgroundColor: 'brown', justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Login" style={styles.button} onPress={() => {
               console.warn(username);
               console.warn(password);

               if (checkLogin(username, password) == true) {
                  loginAlert();
               } else {

                  accessDeniedAlert();
               }
            }
            }></Button>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      alignItems: "center",
      padding: 8,
   },
   input: {
      marginBottom: 16,
      padding: 16,
      borderRadius: 32,
      fontSize: 16,
      borderWidth: 1,
   },
   button: {
      padding: Constants.statusBarHeight,
   },
});

export default AppFC;
