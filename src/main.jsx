import { StrictMode,lazy,Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Route,Routes}    from "react-router-dom"
const Index = lazy(()=>import( './pages/index.jsx'))
const Login = lazy(()=>import('./pages/login.jsx'))
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Suspense>
      <Routes>
        <Route path="/" element={<Index></Index>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
