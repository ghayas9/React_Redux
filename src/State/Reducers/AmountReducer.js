import { ADD ,SUB} from "../Constants/Constants"
const init = 100;
const Amount=(state =init,action)=>{
    if(action.type===ADD){
        return state+action.payload;
    }
    else if(action.type===SUB){
        return state-action.payload;
    }
    else{
        return state;
    }

}
export default Amount;