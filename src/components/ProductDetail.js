import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProductsAction } from '../redux/product/productAction';

function ProductDetail () {
  const productId = Number(useParams().id) ;
  const data = useSelector(state => state.productState.data);
  const product = data[productId-1];
  
  return (
    <section className="product-detail-container">

      <div className="product-detail-image">
        <img className="product-detail-image" alt={product.title} src={product.image} />
      </div>

      <div className="product-detail-info">
        <p>title : {product.title}</p>
        <p>category : {product.category}</p>
        <p>description : {product.description}</p>
        <Link to="/products" className="checkout-btn">Back</Link>
      </div>

    </section>
  )
}

export default ProductDetail