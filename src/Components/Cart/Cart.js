import React, { Component } from 'react';
import CartColumns from "./CartColumns";
import EmptyCart from './EmptyCart';
import { ProductConsumer} from 'C:/Users/vamik/Desktop/Online-Store-React/src/Context.js';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {
            value => {
              const {cart} = value;
              if(cart.length>0){
                return (
                  <React.Fragment>
            
                    <CartColumns/>
                    <CartList value={value} />
                    <CartTotals value={value} history={this.props.history}/>
                  </React.Fragment>
                );
              }else{
                  return <EmptyCart/>;
              }
            }
          }
        </ProductConsumer>
      </section>
    )
  }
}
