import React from 'react';
import { mascotasContext } from '../../mascotasContext';

function MascotaCard({ mascota }) {
    const { onCambiarEstado, onEliminar } = React.useContext(mascotasContext)
    return (
        <div key={mascota.id} className='card mascota-card p-4 m-2 '>
            <p className='card-tittle p-2'> Nombre de la mascota: {mascota.nombre}</p>
            <div className='card-body info-card d-flex gap-2 flex-column'>
                <p className='card-text'>Tipo de mascota: {mascota.tipo}</p>
                <p className='card-text'>Edad de la mascota: {mascota.edad} años</p>
                <p className='card-text'>Estado de la mascota: {mascota.estado}</p>
                <p className=' card-text'>Tamaño de la mascota: {mascota.tamanio}</p>
                <button onClick={() => onCambiarEstado(mascota.id)} className='btn btn-info'>{mascota.estado == 'Disponible' ? 'Cambiar a adoptado' : 'Cambiar a Disponible'}</button>
                <button className='btn btn-danger' onClick={() => onEliminar(mascota.id)}>Eliminar Mascota</button>
            </div>
        </div>
    )
}
export { MascotaCard }