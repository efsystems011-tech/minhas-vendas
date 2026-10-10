import { useState } from "react";
import { Card, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from "../lib/supabase";

export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()
    const [erro, setErro] = useState('')
    const [carregando, setCarregando] = useState(false)
    
    
    async function entrar(e) {
        e.preventDefault()
        setErro('')
        setCarregando(true)

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password: senha,
        })
        
        setCarregando(false)

        if (error) {
            setErro('E-mail ou senha incorretos.')
            return
        }

        navigate('/')
    }

    return (
        <div className="auth-page">
            <Card className="auth-card">
                <div className="text-center mb-4">
                    <i className="bi bi-graph-up-arrow fs-1 text-primary"></i>
                    <h3 className="fw-bold mt-2">Bem-vindo de volta</h3>
                    <p className="text-muted">Entre para gerenciar suas vendas.</p>
                </div>

                <Form onSubmit={entrar}>
                    <Form.Group className="mb-3">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="nome@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button
                        type="submit"
                        className="w-100 py-2"
                    >
                        Entrar
                    </Button>
                </Form>

                <p className="text-center mt-3 mb-0">
                    Não tem conta?
                    <Link to="/cadastro">Cadastre-se</Link>
                </p>
            </Card>
        </div>
    )
}