import React, { useEffect } from 'react';
import { mascotasContext } from '../../mascotasContext';
import { MascotaCard } from '../MascotaCard';
import { FiltroMascotas } from './FIltroMascotas';
function MascotasList() {
    const { state, onAdpotar } = React.useContext(mascotasContext)
    const [busqueda, setBusqueda] = React.useState('Todo')
    const onChange = (value) => {
        setBusqueda(value)
    }
    return (
        <div className='d-flex flex-column justify-content-center container-fluid w-100'>
            <FiltroMascotas onChange={onChange} />
            {state.mascotas.length > 0 ?
                busqueda == "Todo" ?
                    <div className='container w-80 d-flex flex-wrap justify-content-around cards-container'>
                        {state.mascotas.map(mascota => <MascotaCard mascota={mascota} key={mascota.id} />)}
                    </div > : <div className='container w-80 d-flex flex-wrap justify-content-around cards-container'>
                        {state.mascotas.map(mascota => mascota.estado == busqueda && <MascotaCard mascota={mascota} key={mascota.id} />)}
                    </div >
                : <p className='text-center text-end'>No hay nada en la lista de mascotas</p>}
        </div>
    )
}

export { MascotasList }