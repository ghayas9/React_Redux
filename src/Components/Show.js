import React from 'react';
import { useSelector } from 'react-redux';
import Add1 from './Add';
import Sub from './Sub';



const Show = () => {
    const state = useSelector(state=>state.amount)
    return (
        <div>
            <Add1 />
            <h1>{state}</h1>
            <Sub/>
        </div>
    );
}

export default Show;
