import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkoutCart, clearCart } from '../redux/cart/cartAction';
import CartDetailItem from './CartDetailItem';
function CartDetail() {
  const cardValues = useSelector(state => state.cartState);
  const cardDispatch = useDispatch()
  console.log(cardValues)
  return (
    <section className="cart-detail-container">
      <section className="cart-detail-items-container">
            {          
              cardValues.addedItems.map(value => {
                return <CartDetailItem key={value.id} cardDispatch={cardDispatch} data={value} />
              }) 
            }
            {
            !cardValues.addedItems.length && !cardValues.checkout && <button className="checkout-btn" 
            onClick={()=>cardDispatch(clearCart())}>
              <Link to="/products">
                go to shop
              </Link>
            </button>
            }
      </section>
      <section className="cart-checkout-container">
        {
          !cardValues.checkout ?
          <div>
            <p className="checkout-title">
              total items : 
              <span className="checkout-data">
                {cardValues.selectedItemsCounter}
              </span>
            </p>
            <p className="checkout-title">
              total payment : 
              <span className="checkout-data">
                ${cardValues.totalPrice.toFixed(2)}
              </span>
            </p>
              { cardValues.selectedItemsCounter > 0 &&
            <div className="cart-checkout-buttons">
                  <button className="checkout-btn clear"
                  onClick={()=>cardDispatch(clearCart())}>
                    clear
                  </button>
                  <button className="checkout-btn" 
                  onClick={()=>cardDispatch(checkoutCart())}>
                    checkout
                  </button>
            </div>
              }
          </div> : 
          <div>
            <h3 className="checkout-message">
              checked out successfully
            </h3>
            <button className="checkout-btn" 
            onClick={()=>cardDispatch(clearCart())}>
              <Link to="/products">
                go to shop
              </Link>
            </button>
          </div>
        }
      </section>
    </section>
  )
}

export default CartDetail