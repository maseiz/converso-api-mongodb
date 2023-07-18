import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Solicitud al backend para autenticar al usuario
    // Puedes utilizar librerías como axios para hacer la solicitud HTTP al backend
    // Ejemplo de solicitud usando axios:

    axios.post('/api/login', { username, password })
    .then(response => {

      // Procesar la respuesta del backend, como guardar el token de acceso en el estado o en las cookies
    })
    .catch(error => {
    //     // Manejar el error de autenticación, mostrar un mensaje de error, etc.
    });

    // Limpiar los campos del formulario después del envío
    setUsername('');
    setPassword('');
  };

  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.5)', // Fondo transparente
      }}
    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: '10px',
          padding: '20px',
          width: '300px',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)', // Sombra
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: '94%',
                padding: '8px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                marginBottom: '10px',
              }}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '94%',
                padding: '8px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                marginBottom: '10px',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '80%',
              padding: '10px',
              borderRadius: '5px',
              background: 'darkgreen',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
        </form>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <IconButton
            component={Link}
            to="/"
            style={{ color: 'darkblue' }}
            aria-label="Home"
          >
            <h6 style={{ textAlign: 'center' }}>Home</h6>
            <HomeIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Login;