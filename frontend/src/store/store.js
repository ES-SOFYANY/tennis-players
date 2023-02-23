import {configureStore} from '@reduxjs/toolkit';
import HomeReducer from "../app/home-reducer";
import thunk from 'redux-thunk';
import {applyMiddleware} from "redux";

export const store = configureStore({
    reducer: {
        HomeReducer,
    }
}, applyMiddleware(thunk));
