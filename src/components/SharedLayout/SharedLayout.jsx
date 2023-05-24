import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function SharedLayout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <ToastContainer/>
        <Outlet />
      </main>
    </>
  );
}

export default SharedLayout;
