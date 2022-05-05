import React from 'react';
import { useDispatch } from 'react-redux';
import * as actionCreator from "../State/Actions/Actions"
import { bindActionCreators } from 'redux';

const Add1 = () => {
    const dispatch = useDispatch()
    const action = bindActionCreators(actionCreator,dispatch)
    return (
        <button onClick={()=>{
            action.Add(100)
        }}>+</button>
    );
}

export default Add1;
