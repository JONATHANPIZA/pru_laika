import React, { Component } from "react";
import { View, TouchableOpacity, Modal, Text, TextInput, ScrollView} from "react-native";
import styles from '../../style'; 
import States from "./detalles/states";
import Products from "./detalles/products";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as actions from '../../store/actions';

class Detalles extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <ScrollView>
                        <States Estado={this.props.route.params.Estado}/>
                        <View style={{marginTop: 10}}></View>
                        <View style={styles.containercontentrow}>
                            <Text style={{margin: 10}}>Escribenos Al WhatsApp</Text>
                            <Icon style={{margin: 10, marginLeft: "50%"}} name="whatsapp" size={24} color="#20f203"/>
                        </View>
                        <View style={styles.containercontentrow}>
                            <Text style={{margin: 10}}>Llámanos</Text>
                            <Icon style={{margin: 10, marginLeft: "65%"}} name="phone" size={24} color="#000"/>
                        </View>
                        <Text style={{fontWeight: "bold"}}>Informacion de Entrega</Text>
                        <View style={styles.containercontent}>
                            <Text style={{margin: 10, fontWeight: "bold"}}>Direccion:</Text>
                            <Text style={{margin: 10}}>{this.props.route.params.Direccion}</Text>
                            <Text style={{margin: 10, fontWeight: "bold"}}>Telefono:</Text>
                            <View style={{flexDirection: "row"}}>
                                {this.props.telstate==false?
                                    <Text style={{margin: 10}}>{this.props.route.params.Telefono}</Text>
                                :
                                    <TextInput style={{width: "70%", backgroundColor: "#fff", height: 30, borderRadius: 5, margin: 5}}/>
                                }
                                <TouchableOpacity style={{margin: 10}} onPress={()=>this.props.edit_tel(!this.props.telstate)}>
                                    <Icon name="edit" size={24} color="#fff"/>
                                </TouchableOpacity>
                            </View>
                            <Text style={{margin: 10, fontWeight: "bold"}}>Entrega: {this.props.route.params.Hora_entrega}</Text>
                            <Text style={{margin: 10}}>Valor domicilio: ${this.props.route.params.Valordomicilio}</Text>
                            {this.props.pagstate==false?
                                <Text style={{margin: 10, fontWeight: "bold"}}>{this.props.route.params.Pago}</Text>
                            :
                                <TextInput style={{width: "70%", backgroundColor: "#fff", height: 30, borderRadius: 5, margin: 5}}/>
                            }
                            <View style={{flexDirection: "row"}}>
                                {this.props.pagstate==false?
                                    <Text style={{margin: 10}}>Pago {this.props.route.params.Metodo_pago}</Text>
                                :
                                    <TextInput style={{width: "70%", backgroundColor: "#fff", height: 30, borderRadius: 5, margin: 5}}/>
                                }
                                <TouchableOpacity style={{margin: 10}} onPress={()=>this.props.edit_pag(!this.props.pagstate)}>
                                    <Icon name="edit" size={24} color="#fff"/>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.button} onPress={()=>this.props.modal_state(true)}>
                                <Text>Productos</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{fontWeight: "bold"}}>Resumen</Text>
                        <View style={styles.containercontent}>
                            <Text style={{margin: 5, fontWeight: "bold"}}>Total:</Text>
                            <Text style={{margin: 5}}>${this.props.route.params.Total-this.props.route.params.Descuento}</Text>
                            <Text style={{margin: 5}}>Subtotal:</Text>
                            <Text style={{margin: 5}}>${this.props.route.params.Total}</Text>
                            <Text style={{margin: 5}}>Descuento:</Text>
                            <Text style={{margin: 5}}>${this.props.route.params.Descuento}</Text>
                        </View>
                    </ScrollView>
                </View>
                <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.statemodal}
                >
                    <Products data={this.props.route.params.Productos}/>
                </Modal>
            </View>
        )
    }
}
const StateToProps = state => { 
    return {
        telstate: state.telstate,
        pagstate: state.pagstate,
        statemodal: state.statemodal
    }
}

export default connect(StateToProps, actions)(Detalles);