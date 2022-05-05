import { ADD ,SUB} from "../Constants/Constants"
export const Add =(amount)=>{
    return (e)=>{
        e({
            type:ADD,
            payload:amount
        })
    }
}

export const Sub =(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:SUB,
            payload:amount
        })
    }

}