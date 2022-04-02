import React  from "react";
import styled from 'styled-components';
import ProductDetail from '../components/ProductDetail';
import { checkProductExist, splitTitle } from '../helpers/functions/helperFuncs';
import {FaPlus , FaMinus , FaTrashAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addFirstItem, decreaseItem, increaseItem, removeItem } from "../redux/cart/cartAction";

function StoreProductItem({data}) {

    const cardValues = useSelector(state => state.cartState) 
    const cardDispatch = useDispatch();

    const item = checkProductExist(cardValues , data.id);

  return (
    <div className="store-item">

       <img className="product-item-image" src={data.image} alt={data.title} />

        <p className="product-item-title">
           {splitTitle(data.title)}
        </p>

        <p className="product-item-price">
            ${data.price}
        </p>

        <div className="product-item-button-container">
            <div className="product-item-button-container_left">
                <Link to={`/products/product/${data.id}`}>
                    detail
                </Link>
            </div>
            <div className="product-item-button-container_right">
                    {
                        item && 
                        <button className="card-btn trash"  onClick={()=>cardDispatch(removeItem(data))}>
                        <FaTrashAlt></FaTrashAlt>
                        </button>
                    }
                    {
                        item && item.quantity !== 1 && 
                        <button className="card-btn"  onClick={()=>cardDispatch(decreaseItem(data))}>
                        <FaMinus></FaMinus>
                        </button>
                    }
                    {
                       item && 
                       <span className="item-quantity">
                           {item.quantity}
                       </span>
                        
                    }
                    {
                        !item ? 
                        <button className="card-btn" onClick={()=>cardDispatch(addFirstItem(data))}>
                                ADD TO CART
                            </button> :
                            <button className="card-btn"   onClick={()=>cardDispatch(increaseItem(data))}>
                                <FaPlus></FaPlus>
                            </button>
                    }
                
            </div>
        </div>
    </div>
  )
  
}

export default StoreProductItem