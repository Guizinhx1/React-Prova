import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://68224562b342dce8004dbb6d.mockapi.io/api/v1/login', { email, password });
            setAuth({ token: response.data.token, user: response.data.user });
            navigate('/dashboard');
        } catch (error) {
            alert('Erro ao fazer login. Verifique suas credenciais.');
        }
    };

    return (
        <form onSubmit={handleLogin} className='login-container form'>
            <input className='login-container input[type="email"]'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input className='login-container input[type="password"]'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha"
                required
            />
            <button type="submit">Entrar</button>
        </form>
    );
};

export default Login;
