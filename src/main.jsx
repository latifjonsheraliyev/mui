import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SimpleDialog from './App.jsx'
import Selected from './selected.jsx'
import FormDialog from './selected.jsx'
import FullScreenDialog from './fullscren.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex flex-col'> 
    <SimpleDialog />
    <FormDialog/>
    <FullScreenDialog/>
    </div>
 

  </StrictMode>,
)
