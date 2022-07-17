import { combineReducers } from "redux";
import datos from './data/datos.json';
import subreducer from "./reducers/subreducer";
import stateedit from "./reducers/stateedit";
import stateeditp from "./reducers/stateeditp";
import statemodal from "./reducers/statemodal";

export default combineReducers({
    pedidos: () => datos,
    tabsub: subreducer,
    telstate: stateedit,
    pagstate: stateeditp,
    statemodal: statemodal
})