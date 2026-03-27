import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center">
              <img src={assets.logo_main} alt="Fabby Logo" className="h-12 w-auto object-contain" />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <NavLink className="text-sm font-semibold text-slate-600 hover:text-[var(--color-primary)] transition-colors" to="/">Home</NavLink>
              <NavLink className="text-sm font-semibold text-slate-600 hover:text-[var(--color-primary)] transition-colors" to="/collection">Products</NavLink>
              <NavLink className="text-sm font-semibold text-slate-600 hover:text-[var(--color-primary)] transition-colors" to="/about">About</NavLink>
              <NavLink className="text-sm font-semibold text-slate-600 hover:text-[var(--color-primary)] transition-colors" to="/education">Education</NavLink>
              <NavLink className="text-sm font-semibold text-slate-600 hover:text-[var(--color-primary)] transition-colors" to="/contact">Contact</NavLink>
            </nav>
          </div>
          <div className="flex items-center gap-4">

            <Link to='/cart' className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors relative">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="absolute top-1 right-1 bg-[var(--color-primary)] text-white text-[10px] font-bold px-1.5 rounded-full">{getCartCount()}</span>
            </Link>

            <div className="group relative">
              <button onClick={() => !token ? navigate('/login') : null} className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors">
                <span className="material-symbols-outlined">person</span>
              </button>
              {/* Dropdown Menu */}
              {token && (
                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                  <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-slate-600 rounded shadow-lg border border-slate-200">
                    <p className="cursor-pointer hover:text-black font-semibold text-sm">My Profile</p>
                    <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black font-semibold text-sm">Orders</p>
                    <p onClick={logout} className="cursor-pointer hover:text-black font-semibold text-sm">Logout</p>
                  </div>
                </div>
              )}
            </div>

            <button onClick={() => setVisible(true)} className="md:hidden p-2 hover:bg-slate-100 rounded-full text-slate-600">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white z-[60] transition-all min-h-screen ${visible ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-slate-600">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-4 cursor-pointer border-b bg-slate-50">
            <span className="material-symbols-outlined text-slate-400 font-bold">arrow_back</span>
            <p className="font-bold text-lg text-slate-900">Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-4 pl-6 border-b font-medium text-lg text-slate-800 hover:text-[var(--color-primary)] transition-colors" to="/">Home</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-4 pl-6 border-b font-medium text-lg text-slate-800 hover:text-[var(--color-primary)] transition-colors" to="/collection">Products</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-4 pl-6 border-b font-medium text-lg text-slate-800 hover:text-[var(--color-primary)] transition-colors" to="/about">About</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-4 pl-6 border-b font-medium text-lg text-slate-800 hover:text-[var(--color-primary)] transition-colors" to="/education">Education</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-4 pl-6 border-b font-medium text-lg text-slate-800 hover:text-[var(--color-primary)] transition-colors" to="/contact">Contact</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
