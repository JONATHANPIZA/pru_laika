import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Stacks
import Inicio from './inicio';
import Detalles from './Historial/detalles';

const Stack = createNativeStackNavigator();

export default function Home({navigation}){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Historial" component={Inicio} />
            <Stack.Screen name="Detalles" component={Detalles} />
        </Stack.Navigator>
    )
}   