import React from 'react'
import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa'
import { splitTitle } from '../helpers/functions/helperFuncs'
import { decreaseItem, increaseItem, removeItem } from '../redux/cart/cartAction'

function CartDetailItem({cardDispatch , data}) {
  return (
    <div className="card-detail-item">
          <div className="card-detail-left">
            <img src={data.image} alt={data.title}/>
          </div>
          <div className="card-detail-right">
            <p className="card-detail-title">
              {data.title}

              <span className="card-detail-price">
                  $ {(data.price*data.quantity).toFixed(2)}
              </span>
            </p>
            <p className="card-detail-counter">
                {data.quantity}
            </p>
            <div className="card-detail-button-container">
            {
                        data && 
                        <button className="card-btn trash"  onClick={()=>cardDispatch(removeItem(data))}>
                        <FaTrashAlt></FaTrashAlt>
                        </button>
                    }
                    {
                        data && data.quantity !== 1 && 
                        <button className="card-btn"  onClick={()=>cardDispatch(decreaseItem(data))}>
                        <FaMinus></FaMinus>
                        </button>
                    }
                    <button 
                    className="card-btn"   
                    onClick= { ()=>cardDispatch(increaseItem(data)) }>
                        <FaPlus></FaPlus>
                    </button>
            </div>
          </div>
        </div>
  )
}

export default CartDetailItem