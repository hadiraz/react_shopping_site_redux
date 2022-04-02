import React , { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
    const cardValues = useSelector(state => state.cartState) ;
    const [showMiniCart , setShowCart] = useState(false);

    const openMiniCart = (e) => {
        setShowCart(true)
    }
    const closeMiniCart = (e) => {
        setShowCart(false)
    }

  return (
    <section className="nav-bar">
        <div className="nav-links-container">
            <Link to="/products">
                Products
            </Link>
        </div>
        <div className="nav-icon-container">
            <Link to="/cart" >
                <FaShoppingCart onMouseEnter={openMiniCart} onMouseLeave={closeMiniCart} className="nav-card-icon"></FaShoppingCart>
            </Link>
            <span className="nav-card-counter">
                {
                cardValues.selectedItemsCounter < 10 ? cardValues.selectedItemsCounter : "+9"
                }
            </span>
                {/* <NavBarMiniCart className="nav-mini-checkout-container" status={showMiniCart}>

                </NavBarMiniCart> */}
        </div>
    </section>
  )
}

export default NavBar