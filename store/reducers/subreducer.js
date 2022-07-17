export default (state = 0, action)=>{
    switch(action.type){
        case "SELECTED_SUB":
            return action.payload
            break;
        
        default:
            return state
            break
    }

}