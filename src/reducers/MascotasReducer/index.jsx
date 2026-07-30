import React from 'react';
import { actionTypes } from '../../types/actionTypes';

const reducer = (state, action) => {
    let mascotas = [...state.mascotas]
    let mascotaCambiar;
    switch (action.type) {
        case actionTypes.agregar:
            return {
                ...state,
                mascotas: [...state.mascotas, action.payload]
            }
        case actionTypes.cambiarEstado:
            mascotaCambiar = mascotas.find(item => item.id == action.payload)
            mascotaCambiar.estado = mascotaCambiar.estado == 'Disponible' ? 'Adoptado' : 'Disponible'
            return {
                ...state,
                mascotas: mascotas
            }
        case actionTypes.eliminar:
            return {
                ...state,
                mascotas: mascotas.filter(item => item.id != action.payload)
            }
        default:
            return state
    }
}

export { reducer }