import React, { children } from 'react';
import { reducer } from '../reducers/MascotasReducer';
import { initialState } from './initialState';
import { actionTypes } from '../types/actionTypes';
const mascotasContext = React.createContext()
import { Mascota } from '../clases/mascota';


const MascotasProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    //actualizar estados

    const onAgregar = (mascota) => {
        dispatch({ type: actionTypes.agregar, payload: mascota })
    }

    const onCambiarEstado = (id) => {
        dispatch({ type: actionTypes.cambiarEstado, payload: id })
    }

    const onEliminar = (id) => {
        dispatch({ type: actionTypes.eliminar, payload: id })
    }

    //eventos



    return (
        <mascotasContext.Provider value={
            {
                onCambiarEstado,
                onEliminar,
                state,
                onAgregar
            }
        }>
            {children}
        </mascotasContext.Provider>
    )
}

export { mascotasContext, MascotasProvider }