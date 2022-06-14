import { View, Text } from 'react-native'
import React from 'react'

const ShowProducto = ({name,producto,categoria,precio, cantidad}) => {
  return (
    <View>
      <Text>Id: {name}</Text>
      <Text>producto: {producto}</Text>
      <Text>categoria: {categoria} </Text>
      <Text>precio: {precio} mx</Text>
      <Text>cantidad disponible: {cantidad}</Text>
    </View>
  )
}

export default ShowProducto;