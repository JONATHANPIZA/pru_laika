export default (state = false, action)=>{
    switch(action.type){
        case "MODAL_STATE":
            return action.payload
            break;
        default:
            return state
            break
    }

}