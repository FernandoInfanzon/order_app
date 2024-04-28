import logo from '../assets/logo.jpg';
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Modal from './Modal';
import { useRef } from 'react';


export default function Header() {
  const modal = useRef();

  function handleShowCart() {
    modal.current.open();
    return;
}

  return (
       <>
        <Modal ref={modal} buttonCaption='Close' className="cart">
            <p className="text-stone-600 mb-4">Empty Cart</p>
        </Modal>
        <main id='main-header'>
          <div id='title'>
            <img src={logo} alt="" />
            <h1>Meal Planner</h1>
          </div>
          <ShoppingCartIcon  className="w-8 h-8 cursor-pointer" onClick={handleShowCart}/>
        </main>
      </>
  )
}
