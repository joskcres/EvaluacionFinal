import React from 'react';

function FiltroMascotas({ onChange }) {

    return (
        <div className='container gap-2 d-flex flex-column mb-4 text-center'>
            <h2 className='h2 bg-warning-subtle w-100 p-2 filtro'>Busqueda de mascotas</h2>
            <p className='text-dark filtro-text' htmlFor="filtro">Seleccione el estado de las mascotas para filtrar</p>
            <select className='form-select text-center select-search' name='filtro' onChange={(event) => onChange(event.target.value)}>
                <option value='Todo' selected>Todas</option>
                <option value="Disponible">Disponible</option>
                <option value="Adoptado">Adoptado</option>
            </select>
        </div>
    )
}

export { FiltroMascotas }