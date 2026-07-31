import React from 'react';
import { mascotasContext } from '../../mascotasContext';
import { Mascota } from '../../clases/mascota';

function MascotasForm() {

    const { onAgregar } = React.useContext(mascotasContext)
    const [inputNombre, setInputNombre] = React.useState('')
    const [inputEdad, setinputEdad] = React.useState('')
    const [tipoMascota, setTipoMascota] = React.useState('nada')
    const [tamanioMascota, setTamanioMascota] = React.useState('nada')
    const [error, setError] = React.useState(false)
    const [message, setMessage] = React.useState('')


    const onSubmit = (event) => {
        event.preventDefault()

        if (inputNombre.trim() == '') {
            setError(true)
            setMessage('El nombre debe tener al menos un caracter')
        } else if (inputEdad < 0 || inputEdad > 100) {
            setError(true)
            setMessage('Escriba una edad valida entre 1 a 100')
        } else if (inputEdad.trim() == '') {
            setError(true)
            setMessage('Escriba la edad de su mascota')
        } else if (tamanioMascota == 'nada') {
            setError(true)
            setMessage('Selccione un tamaño para su mascota')
        } else if (tipoMascota == "nada") {
            setError(true)
            setMessage('Selccione un tipo de mascota')
        } else {
            let mascota = new Mascota({
                nombre: inputNombre,
                edad: inputEdad,
                tipo: tipoMascota,
                tamanio: tamanioMascota
            })
            onAgregar(mascota)
            setError(false)
            setMessage('')
            setInputNombre('')
            setinputEdad('')
            setTamanioMascota('nada')
            setTipoMascota('nada')
        }


    }


    const onChange = (event, tipo) => {
        switch (tipo) {
            case 'nombre':
                setInputNombre(event.target.value)
                break;
            case 'edad':
                setinputEdad(event.target.value)
                break;
            case 'tipo':
                setTipoMascota(event.target.value)
                break;
            case 'tamanio':
                setTamanioMascota(event.target.value)
                break;
            default:
                setError(true)
                setMessage('opcion escogida no valida')
        }
    }
    return (
        <div className=' d-flex flex-column gap-2 mb-2 card p-3 bg-secondary text-light'>
            {error && <h3 className='error bg-danger p-3'>{message}</h3>}
            <form className='form d-flex flex-column gap-2' autoComplete='off' onSubmit={onSubmit}>
                <label htmlFor="mascotaNombre">Ingrese el nombre de la Mascota</label>
                <input value={inputNombre} onChange={(event) => onChange(event, 'nombre')} className='form-control' type="text" name='mascotaNombre' />
                <label htmlFor="mascotaEdad">Ingrese la edad de la Mascota</label>
                <input value={inputEdad} onChange={(event) => onChange(event, 'edad')} className='form-control' type="number" name='mascotaEdad' />
                <select value={tipoMascota} onChange={(event) => onChange(event, 'tipo')} className='form-control mb-3 mt-3' name="tiposMascotas" id="tiposMascota">
                    <option value='nada'>Seleccione el tipo de mascota que va a agregar</option>
                    <option value="Perro">Perro</option>
                    <option value='Gato'>Gato</option>
                    <option value="Otro">Otro</option>
                </select>
                <select value={tamanioMascota} onChange={(event) => onChange(event, 'tamanio')} className='form-select mb-3' name="TamaniosMascotas">
                    <option value='nada'>Selecciones el tamaño de su mascota</option>
                    <option value="Pequeño">Pequeño</option>
                    <option value="Mediano">Mediano</option>
                    <option value="Grande">Grande</option>
                </select>
                <button type='submit' className='btn btn-success'>Agregar</button>
            </form>
        </div>

    )
}


export { MascotasForm }