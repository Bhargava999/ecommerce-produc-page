import cart from '../assets/icons/cart.svg';
import menu from '../assets/icons/menu.svg';
import logo from '../assets/icons/logo.svg';
import avatar from '../assets/images/avatar.png';
import SideBar from './SideBar';
import { useState } from 'react';
import Cart from './Cart';
// eslint-disable-next-line react/prop-types
function Header({ itemCount, setItemCount }) {
  const [showSideBar, setShowSideBar] = useState(false);
  const [ShowCart, setShowCart] = useState(false);
  const names = ['Collections', 'Men', 'Women', 'About', 'Contact'];
  return (
    <>
      <header>
        <div className="flex items-center justify-between px-6 py-6 border-b sm:pb-6 lg:max-w-screen-lg mx-auto">
          <div className="flex items-center gap-4">
            <button onClick={() => setShowSideBar(true)}>
              <img
                src={menu}
                className="h-4
            sm:hidden"
              />
            </button>
            <img src={logo} alt="logo" className="mb-1" />
            <nav className="hidden sm:block ">
              <ul className=" ml-10 flex text-xs gap-4 items-center text-neutral-200 cursor-pointer ">
                {names.map((name) => (
                  <li
                    key={name}
                    className="hover:text-primary hover:border-b-2 hover:border-primary"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-5">
            <button className="relative" onClick={() => setShowCart(!ShowCart)}>
              {itemCount > 0 ? (
                <span className="absolute left-3 bottom-4 bg-primary block text-white font-bold text-[10px] px-1 text-center rounded-lg">
                  {itemCount}
                </span>
              ) : null}
              <img src={cart} alt="cart" className="h-5" />
            </button>
            <button className="hover:ring-primary hover:ring-2 rounded-xl">
              <img src={avatar} alt="avatar" className="h-6 sm:h-7" />
            </button>
          </div>
        </div>
      </header>
      {showSideBar && <SideBar setShowSideBar={setShowSideBar} />}
      {ShowCart && <Cart itemCount={itemCount} setItemCount={setItemCount} />}
    </>
  );
}

export default Header;
