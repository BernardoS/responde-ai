import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainRouter from './routes/MainRouter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainRouter />
  </StrictMode>,
)
