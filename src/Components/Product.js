import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import {ProductConsumer} from '../Context';

const propTypes = {
  product: PropTypes.shape({ id: PropTypes.number, title: PropTypes.string, img: PropTypes.string, price: PropTypes.number, inCart: PropTypes.bool})
}
class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value=> (
              <div className="img-container p-5" onClick={value.handleDetail(id)}>
                <Link to='/details'>
                  <img src={img} alt="product img" className="card-img-top"/>
                </Link>
                <button 
                  className="cart-btn" 
                  disabled={!!inCart} 
                  onClick={
                    ()=>{
                      value.addProduct(id);
                      value.openModal(id);
                    }
                  }
                >
                  {inCart ? 
                    <p className="text-capitalize mb-0" disabled>
                      in Cart
                    </p>
                    : <i className="fas fa-cart-plus" />
                  }
                </button>
              </div>
                
              )
            )}
          </ProductConsumer>
          <div className="car-footer d-flex justify-content-between p-2">
            <p className="align-self-center mb-10">{title}</p>
            <h5 className="text-primary font-italic mb-0">
              <span className="mr-1">Rs</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0,0,0,0.2);
      box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer {
      background: rgba(247,247,247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.1s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    background: var(--mainBlue);
    cursor: pointer;
  }
`
Product.propTypes = propTypes

export default Product
