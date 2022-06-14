import React, {useState} from 'react';
import { View, Text, Button,StyleSheet,TextInput, Image} from 'react-native';
import { color } from 'react-native-reanimated';

const Login = ({navigation}) =>{

    const [user,onChangeUser] = useState("");
    const [password,onChangePassword] = useState("");

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Introduce tus datos para logearte</Text>
            <Image style={styles.image}
             source={require('../Images/loginImage.png')} />

            <TextInput 
                style={styles.input}
                placeholder="Usuario"
                onChangeText={onChangeUser}
                value={user}
            />
            <TextInput 
                style={styles.input}
                placeholder='Contraseña'
                onChangeText={onChangePassword}
                value={password}
            />

            <Button 
                style={styles.boton}
                title='Entrar'
                onPress={()=>navigation.navigate("Productos")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    image:{
        width:'50px',
        height:'50px',
        margin:'10px'
    },

    text:{
        marginBottom:'15px'
    },  

    input:{
        textAlign:'center',
        marginBottom:'15px',
        backgroundColor:'#bdddf2',
        borderRadius:"5px",
        color:'black'
    },
    boton:{
        marginTop:'10px'
    }
  });


export default Login;

