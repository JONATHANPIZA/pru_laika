import React from "react";
import { View, FlatList, SafeAreaView, TouchableOpacity, Text, Image} from "react-native";
import styles from '../../../style'; 
import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from "react-redux";
import * as actions from '../../../store/actions';

const Products = (props) =>{
    return(
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <SafeAreaView>
                    <FlatList
                    data={props.data}
                    renderItem={({item})=>
                    <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                        <Image style={{width: 100, height: 100, margin: 5}} source={{uri: item.imagen}}/>
                        <View style={{flexDirection: "column"}}>
                            <Text>ID {item.id_pro}</Text>
                            <Text>Nombre: {item.nombre}</Text>
                            <Text>Peso: {item.peso}</Text>
                            <Text>Cantidad: {item.cantidad}</Text>
                            <Text>Valor Unitario: ${item.valor}</Text>
                            <Text>Valor Total: ${item.cantidad*item.valor}</Text>
                        </View>
                    </View>
                    }
                    />
                </SafeAreaView>
                <TouchableOpacity
                style={styles.buttonvolver}
                onPress={()=>props.modal_state(!props.statemodal)}
                >
                    <Text>Cerrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const StateToProps = state => { 
    return {
        statemodal: state.statemodal
    }
}

export default connect(StateToProps, actions)(Products);