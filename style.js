
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: "center"
    },
    subcontainer:{
        width: "80%",
        height: "80%"
    },  
    submenu:{
        flexDirection: "row",
        marginTop: 10
    }, 
    buttonsub:{
        margin: 7,
    },
    menusinactive:{
        margin: 7,
    },
    menusactive:{
        width: "100%",
        height: 3,
        backgroundColor: "#f199"
    },
    tabs: {
        flexDirection: "row",
        margin: "auto",
        padding: 20,
        backgroundColor: '#c4bbbb',
        borderRadius: 10,
        margin: 10
    },
    button:{
        padding: 5,
        margin: 5,
        backgroundColor: "#f199",
        borderRadius: 10
    },
    buttonvolver:{
        padding: 5,
        margin: 5,
        borderColor: "#f199",
        borderWidth: 1,
        borderRadius: 10
    },
    stateencamino:{
        padding: 5,
        backgroundColor: "#243bad",
        borderRadius: 10
    },
    statecancelado:{
        padding: 5,
        backgroundColor: "#bd1919",
        borderRadius: 10
    },
    statedevuelto:{
        padding: 5,
        backgroundColor: "#fce303",
        borderRadius: 10
    },
    stateentregado:{
        padding: 5,
        backgroundColor: "#20fc03",
        borderRadius: 10
    },
    containerstate: {
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#c4bbbb",
        borderRadius: 10
    },
    containercontent:{
        justifyContent: "flex-start", 
        alignItems: "flex-start", 
        backgroundColor: "#c4bbbb",
        borderRadius: 10
    },
    containercontentrow:{
        flexDirection: "row", 
        justifyContent: "flex-start", 
        alignItems: "center", 
        backgroundColor: "#c4bbbb",
        borderRadius: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 40,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 1
      },
      input: {
        flexDirection: 'row',
        height: "10%",
        width: "70%",
        padding: 4,
        marginBottom: 20, 
        alignItems: 'center' 
      },
});
export default styles;