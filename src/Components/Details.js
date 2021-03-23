import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';
import  ButtonContainer  from './Button';
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, company, img, info, price, title, inCart } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-primary my-5">
                  <h1>
                    {title}
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <img src={img} alt="product" className="img-fluid"/>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalized">
                  <h2>
                    model: {title}
                  </h2>
                  <h4 className="text-uppercase text-title text-muted mt-3 mb-2">
                    made by: 
                    <span className="test-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-primary">
                    <strong> price: <span>₹</span> {price}</strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    info
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to="/">
                      <ButtonContainer>
                        back to products
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={!!inCart}
                      onClick={ ()=> {
                        value.addProduct(id)
                      }}
                    >
                      {inCart ? 
                        "in Cart" : "add to Cart"
                      }
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}