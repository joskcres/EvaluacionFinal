import React from 'react';
import { mascotasContext } from '../../mascotasContext';

function EstadisticasMascotas() {
    const { state } = React.useContext(mascotasContext)

    let mascotasDisponibles = state.mascotas.filter(item => item.estado == 'Disponible')
    let mascotasAoptadas = state.mascotas.filter(item => item.estado == 'Adoptado')
    return (
        <div className='estadisticas card d-flex justify-content-center align-items-center p-3 font-monospace text-center'>
            <h3 className='card-tittle m-3 p-2'>Estadisticas de las mascotas</h3>
            <div className='card-body info-mascotas w-100 m-5'>
                <p className='card-text'>Total de mascotas en el centro: {state.mascotas.length}</p>
                <p className='card-text'>Mascotas Adoptadas: {mascotasAoptadas.length}</p>
                <p className='card-text'>Mascotas Disponibles: {mascotasDisponibles.length}</p>
            </div>
        </div>
    )
}

export { EstadisticasMascotas }