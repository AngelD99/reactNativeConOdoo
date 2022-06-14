import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login';
import Productos from '../Screens/Productos';

const Stack = createStackNavigator();

const Navigator = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Login'
                component={Login}
            />

            <Stack.Screen
                name='Productos'
                component={Productos}
            />
        </Stack.Navigator>
    );
}

export default Navigator;