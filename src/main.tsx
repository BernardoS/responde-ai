import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainRouter from './routes/MainRouter.tsx'
import './global.css'
import { UserProvider } from './contexts/UserContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <MainRouter />
    </UserProvider>
  </StrictMode>,
)
