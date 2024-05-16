import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log(state);

  const onLogout = () => {
    navigate('/login', {
      replace: true,
    });
  };
  
  const onCurpClick = () => {
    navigate('/curp', {
      replace: true,
      state: {
        logged: true,
      },
    });
  };

  const onRfcClick = () => {
    navigate('/rfc', {
      replace: true,
      state: {
        logged: true,
      },
    });
  };

  const onDashboard = () => {
    navigate('/dashboard', {
      replace: true,
      state: {
        logged: true,
      },
    });
  };

  return (
    <>
      <header>
        <h1>
          <Link to='/'><img src="logo.png" width="50" alt="Logo" /></Link>
        </h1>

        {state?.logged ? (
          <div className='user'>
            <span className='username'>{state?.name}</span>
            <button className='btn-carding' onClick={onCurpClick}>
              CURP
            </button>
            <button className='btn-carding' onClick={onRfcClick}>
              RFC
            </button>
            <button className='btn-logout' onClick={onDashboard}>
              Dashboard
            </button>
            <button className='btn-logout' onClick={onLogout}>
              Cerrar sesión
            </button>
          </div>
        ) : (
          <nav>
            <Link to='/login'>Iniciar sesión</Link>
            <Link to='/register'>Registrarse</Link>
          </nav>
        )}
      </header>

      <Outlet />
    </>
  );
};
