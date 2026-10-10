import { useState } from "react";
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmar, setConfirmar] = useState('')
    const [erro, setErro] = useState('')
    const navigate = useNavigate()

    const [sucesso, setSucesso] = useState('')
    const [carregando, setCarregando] = useState(false)

    async function cadastrar(e) {
        e.preventDefault()
        setErro('')
        setSucesso('')

        if(senha.length < 6) {
            setErro('A senha precisa ter pelo menos 6 caracteres.')
            return
        }

        if(senha !== confirmar) {
            setErro('As senhas não conferem')
            return
        }

        setCarregando(true)

        try {
            const { error } = await supabase.auth.signUp({
                email,
                password: senha,
                options: { data: { nome } },
            })

            if (error) {
                setErro(error.message)
                return
            }

            setSucesso('Conta criada! Agora é só entrar.')
            setTimeout(() => navigate('/login'), 1500)
        } catch (error) {
            setErro(
                error instanceof Error
                    ? error.message
                    : 'Não foi possível concluir o cadastro. Tente novamente.'
            )
        } finally {
            setCarregando(false)
        }

    }

    return (
        <div className="auth-page">
            <Card className="auth-card">
                <div className="text-center mb-4">
                    <i className="bi bi-person-plus fs-1 text-primary"></i>
                    <h3 className="fw-bold mt-2">Criar conta</h3>
                    <p className="text-muted">Preencha os dados para começar</p>
                </div>

                {erro && <Alert variant="danger">{erro}</Alert>}

                {sucesso && <Alert variant="success">{sucesso}</Alert>}

                <Form onSubmit={cadastrar}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            placeholder="Seu nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="voce@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Mínimo 6 caracteres"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Confirmar senha</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Repita a senha"
                            value={confirmar}
                            onChange={(e) => setConfirmar(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button 
                        type="submit"
                        className="w-100 py-2"
                        disabled={carregando}
                    >
                        {carregando ? 'Cadastrando...' : 'Cadastrar'}
                    </Button>
                </Form>

                <p className="text-center mt-3 mb-0">
                    Já tem conta?
                    <Link to="/login">Entrar</Link>
                </p>
            </Card>
        </div>
    )
}