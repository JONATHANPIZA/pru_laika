import React, { Component } from "react";
import { View, TouchableOpacity, Text} from "react-native";
import { connect } from "react-redux";
import styles from '../style'; 
import List from "./Historial/list";
import * as actions from '../store/actions';

class Inicio extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <View style={styles.submenu}>
                        <TouchableOpacity
                        style={styles.buttonsub}
                        onPress={()=> this.props.selected_sub(1)}>
                            <Text>Pedidos</Text>
                            <View style={this.props.statetab==1?styles.menusactive:styles.menusinactive}></View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.buttonsub}
                        onPress={()=> this.props.selected_sub(2)}>
                            <Text>Servicios</Text>
                            <View style={this.props.statetab==2?styles.menusactive:styles.menusinactive}></View>
                        </TouchableOpacity>
                    </View>
                    {this.props.statetab==1?
                    //PEDIDOS
                        <List datos={this.props.pedidos} navigacion={this.props.navigation.navigate}/>
                    :
                    this.props.statetab==2?
                    //SERVICIOS
                        <Text>Aqui van  los Servicios</Text>
                    : 
                        null
                    }
                </View>
            </View>
        )
    }
}

const StateToProps = state => { 
    return {
        statetab: state.tabsub,
        pedidos: state.pedidos
    }
}

export default connect(StateToProps, actions)(Inicio)