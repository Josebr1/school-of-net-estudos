import { createReducer, createActions } from 'reduxsauce';
import  Immutable  from 'seamless-immutable';
// Actions
const { Types, Creators } = createActions({
    handlePressHello: null
});

export const HelloTypes = Types;
export default Creators;

// Reducers
export const INITIAL_STATE = Immutable({
    str: null
})

export const sayHello = (state) => {
    return state.merge({ str: 'Hello ReduxSauce' })
    //return {...state, str: 'Hello ReduxSause'}
}

export const reducer = createReducer(INITIAL_STATE, {
    [Types.HANDLE_PRESS_HELLO]: sayHello
})