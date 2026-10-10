import { Routes, Route } from "react-router-dom";
import Layout from './layouts/Layout'
import Dashboard from './pages/Dashboard'
import Clientes from './pages/Clientes'
import Vendas from './pages/Vendas'
import Financeiro from './pages/Financeiro'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'

export default function App() {
  return(
    <Routes>

      <Route path="/login" element={<Login />} />

      <Route path="/cadastro" element={<Cadastro />}></Route>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/financeiro" element={<Financeiro />} />
      </Route>
    </Routes>
  )
}