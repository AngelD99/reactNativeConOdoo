import React,{useState} from 'react';
import { View, Text, Button,StyleSheet,TextInput, Image} from 'react-native';
import ShowProducto from './ShowProducto';

const ShowProductos = ({productos}) => {


  return (
      <>
     
          <Text>Productos disponibles</Text>
          {productos.map(producto=>{
              console.log("estoy adentro")
              return (
                  <div style={{border:'1px solid black',borderRadius:'5px', 
                  marginBottom:'10px', padding:'10px'}}>
              <ShowProducto name={producto.name} categoria={producto.categoria}
                precio={producto.precio} producto={producto.producto} cantidad={producto.cantidad} />
                </div>
                )
          })}
       
      </>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    datos:{
        border:'1px black',
        borderRadius:'5px'
    },

    text:{
        marginBottom:'15px'
    },  

    boton:{
        marginTop:'10px'
    }
  });

export default ShowProductos