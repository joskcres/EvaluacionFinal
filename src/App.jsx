
import './scss/styles.scss'
import './index.css'
import 'bootstrap'
import { MascotasForm } from './componentes/MascotasForm'
import { MascotasList } from './componentes/MascotasList'
import { EstadisticasMascotas } from './componentes/EstadisticasMacotas'
import { FiltroMascotas } from './componentes/MascotasList/FIltroMascotas'

function App() {
  return (
    <div className='container-fluid d-flex flex-wrap gap-3'>
      <div className='w-100 text-center p-1'>
        <h1 className='tittle'>Adopcion de mascotas</h1>
      </div>
      <div className='w-100 d-flex justify-content-around gap-5 container-fluid '>
        <MascotasForm />
        <EstadisticasMascotas />
      </div>
      <MascotasList />
    </div>
  )
}

export default App
