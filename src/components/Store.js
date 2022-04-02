import React , { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { clearCheckOut } from '../redux/cart/cartAction';
import { getProductsAction } from '../redux/product/productAction';
import StoreProductItem from '../shared/StoreProductItem';

function Store() {

  const getProductDispatch = useDispatch() ;

    const getProductData = useSelector(state => state.productState);
    
    const cartDispatch  = useDispatch()

    useEffect(()=>{
      cartDispatch(clearCheckOut());
      if(!getProductData.data.length){
        getProductDispatch(getProductsAction())
      }
    },[])

  return (
    <section className="product-items-container">
        {
          getProductData.loading ? <h2>Loading ...</h2> :
          getProductData.error ? <h2>something went wrong</h2> :
          getProductData.data.length ? 
            getProductData.data.map(value => {
                return <StoreProductItem key={value.id} data={value} />
            }) : ""
        }
    </section>
  )
}

export default Store