import React from "react";
import { View, FlatList, TouchableOpacity, Text, ScrollView} from "react-native";
import styles from '../../style'; 


const list = (props) =>{
    return(
        <View>
            <FlatList
            data={props.datos}
            renderItem={({item})=>(
                <View style={styles.tabs}>
                    <View style={{flexDirection: "column"}}>
                        <Text>ID {item.id}</Text>
                        <Text>fecha: {item.Fecha_ent}</Text>
                        <Text>Total: ${item.Total}</Text>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={()=>{props.navigacion("Detalles",{
                            id: item.id,
                            fecha_ped: item.fecha_ped,
                            Estado: item.Estado,
                            Direccion: item.Direccion,
                            Telefono: item.Telefono,
                            Fecha_ent: item.Fecha_ent,
                            Hora_entrega: item.Hora_entrega,
                            Pago: item.Pago,
                            Metodo_pago: item.Metodo_pago,
                            Total: item.Total,
                            Valordomicilio: item.Valordomicilio,
                            Productos: item.Productos,
                            Descuento: item.Descuento
                        })}}>
                            <Text>Detalles</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-end"}}>
                        <View style={item.Estado=="En Camino"||item.Estado=="Recibido"?styles.stateencamino:
                        item.Estado=="Devuelta"?styles.statedevuelto:
                        item.Estado=="Entregada"?styles.stateentregado:
                        item.Estado=="Cancelada"?styles.statecancelado: null}>
                            <Text>{item.Estado}</Text>
                        </View>
                        <Text>Calificar </Text>
                        <TouchableOpacity
                        style={styles.buttonvolver}>
                            <Text>Volver a Pedir</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        )}
        />
    </View>
    )
    
}

export default list;