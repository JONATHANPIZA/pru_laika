export default (state = false, action)=>{
    switch(action.type){
        case "EDIT_TEL":
            return action.payload
            break;
        default:
            return state
            break
    }

}