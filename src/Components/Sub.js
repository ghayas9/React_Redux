import React from 'react';
import { useDispatch } from 'react-redux';
import * as actionCreator from "../State/Actions/Actions"
import { bindActionCreators } from 'redux';

const Sub = () => {
    const dispatch = useDispatch()
    const action = bindActionCreators(actionCreator,dispatch)
    return (
        <button
        onClick={()=>{
            action.Sub(100)
        }}
        >-</button>
    );
}

export default Sub;
