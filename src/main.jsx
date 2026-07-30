import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { MascotasProvider } from './mascotasContext/index.jsx'

createRoot(document.getElementById('root')).render(
  <MascotasProvider>
    <App />
  </MascotasProvider>

  ,
)
