import React,{useState,useEffect} from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import ShowProductos from '../components/ShowProductos';
import Odoo from 'odoo-xmlrpc';

const Productos = ({navigation}) =>{

    const [productos,setProductos] = useState([]);

    var odoo = new Odoo({
        url: 'http://13.56.193.12',
        port: 80, /* Defaults to 80 if not specified */
        db: 'elvendido',
        username: 'migue', /* Optional if using a stored session_id */
        password: '123', /* Optional if using a stored session_id */
      });

    const getData = () => {
        var inParams = [];
        var params = [];
        params.push(inParams);
        odoo.execute_kw('puntoventa.producto', 'search_read', params, function (err, value) {
            if (err) { return console.log(err); }
            setProductos(value)
        });
    }
    
    useEffect(()=>{
    
          odoo.connect(function (err) {
            if (err) { return console.log(err); }
            console.log('Connected to Odoo server.');    
        });

    },[]);

    

    return(
        <View style={styles.container}>
            <ShowProductos productos = {productos}/>
            <Button style={styles.boton}
            title='get'
            onPress={getData} />
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

    text:{
        marginBottom:'15px'
    },  

    input:{
        textAlign:'center',
        marginBottom:'15px',
        borderRadius:"5px"
    },
    boton:{
        marginTop:'10px'
    }
  });

export default Productos;