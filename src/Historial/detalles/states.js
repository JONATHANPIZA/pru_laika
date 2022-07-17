import React from "react";
import { View, FlatList, TouchableOpacity, Text} from "react-native";
import styles from '../../../style'; 
import Icon from 'react-native-vector-icons/AntDesign';


const states = (props) =>{
    return(
        props.Estado=="Recibido"||props.Estado=="En Camino"||props.Estado=="Entregada"?
            <View style={styles.containerstate}>
                <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center", margin: 10}}>
                    <Icon name="checkcircleo" size={24} color="#f199"/>
                    <Text>Recibido</Text>
                </View>
                <Icon name="ellipsis1" size={24} color={props.Estado=="En Camino"||props.Estado=="Entregada"?"#f199":"#000"}/>
                <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center", margin: 10}}>
                    <Icon name="checkcircleo" size={24} color={props.Estado=="En Camino"||props.Estado=="Entregada"?"#f199":"#000"}/>
                    <Text>En Camino</Text>
                </View>
                <Icon name="ellipsis1" size={24} color={props.Estado=="Entregada"?"#f199":"#000"}/>
                <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center", margin: 10}}>
                    <Icon name="checkcircleo" size={24} color={props.Estado=="Entregada"?"#f199":"#000"}/>
                    <Text>Entregada</Text>
                </View>
            </View>
        :
        props.Estado=="Devuelta"?
            <View style={styles.containerstate}>
                <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center", margin: 10}}>
                    <Icon name="exclamationcircleo" size={24} color="#fce303"/>
                    <Text>Devuelta</Text>
                </View>
            </View>
        :
        props.Estado=="Cancelada"?
            <View style={styles.containerstate}>
                <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center",margin: 10}}>
                    <Icon name="closecircleo" size={24} color="#bd1919"/>
                    <Text>Cancelada</Text>
                </View>
            </View>
        :
        null
    )
    
}

export default states;