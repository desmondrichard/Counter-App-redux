import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store=configureStore({ //our store name is store only so we have to use it in index.js store={storename}
    reducer:{
        counter:counterReducer  //goes to reducer present in counterSlice.js and perform logic for actions
    }
})