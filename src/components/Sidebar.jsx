import { NavLink } from "react-router-dom";

const itens = [
    {to: '/', icone: 'bi-speedometer2', texto: 'Dashboard'},
    {to: '/clientes', icone: 'bi-people', texto: 'Clientes'},
    {to: '/vendas', icone: 'bi-bag-check', texto: 'Vendas'},
    { to: '/financeiro', icone: 'bi-cash-coin', texto: 'Financeiro' },
]

export default function Sidebar() {
    return (
        <aside className="sidebar p-3">
            <h4 className="text-white fw-bold mb-4 px-2">
                <i className="bi bi-graph-up-arrow me-2"></i>
                Minhas Vendas
            </h4>

            <nav className="nav flex-column">
                {itens.map((item) => (
                    <NavLink key={item.to} to={item.to} end className={"nav-link"}>

                        <i className={`bi ${item.icone} mr-2`}></i>
                        {item.texto}
                    </NavLink>
                ))}
            </nav>
        </aside>
    )
}