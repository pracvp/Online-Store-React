import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'
import PropTypes from 'prop-types'

const props = {
    children: PropTypes.Object
}
const ProductContext = React.createContext();
//Provider and Consumer two parts of context
class ProductProvider extends Component {
    state={
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
    }
    openModal = id => {
    const product = this. getItem(id);
    this.setState(()=>{
    return { modalProject: product, modalOpen: true }
    })
    }
    closeModal= () => {
    this.setState(()=>{
    return { modalOpen: false }
    })
    }
    componentDidMount(){
    this.setProducts();
    }
    increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item=>item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total= product.count*product.price;
    this.setState(()=> {
        return {cart: [...tempCart]}
    }, ()=>{
        this.addTotals()
    })
    }
    decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item=>item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count===0) {
        this.removeItem(id)
    } else {
        product.total= product.count*product.price;
        this.setState(()=> {
        return {cart: [...tempCart]}
        }, ()=>{
        this.addTotals()
        })
    }
    }
    
    clearCart =() =>{
    this.setState(()=>{
        return { cart: []}
    }, ()=> {
        this.setProducts()
        this.addTotals()
    })
    }
    setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item=>{
    const singleItem = {...item};
    tempProducts = [...tempProducts, singleItem]
    })
    this.setState(()=> {
        return {products: tempProducts};
    })
    }
    
    getItem=(id)=>{
    const product = this.state.products.find((item)=> item.id===id)
    return product;
    }
    handleDetail=(id)=>()=> {
    const product = this.getItem(id);
    this.setState({ detailProduct: product })
    }
    addProduct = (id) => {
    console.log("hey");
    let tempProducts = [...this.state.products];
    const product = this.getItem(id);
    const index = tempProducts.indexOf(product);
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(()=>{
    return {products:tempProducts, cart:[...this.state.cart, product]}
    },
    ()=>{
    this.addTotals();
    })
}
    removeItem= (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart=tempCart.filter(item=>item.id!==id);
    const index= tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart=false;
    removedProduct.count=0;
    removedProduct.total=0;
    this.setState(()=>{
    return {
        cart: [...tempCart],
        products: [...tempProducts]
    }
    }, ()=>{
    this.addTotals();
    })
    }

    addTotals =() => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax= subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(()=>{
        return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
        }
    })
    }
render() {
console.log("CONTEXT>>", this.state.cart )

    return (
        <ProductContext.Provider 
        value = {{
            ...this.state,
            handleDetail: this.handleDetail,
            addProduct: this.addProduct,
            openModal: this.openModal,
            closeModal: this.closeModal,
            increment: this.increment,
            decrement: this.decrement,
            clearCart: this.clearCart,
            removeItem: this.removeItem
        }
        }>
        {this.props.children}
        </ProductContext.Provider>
    )
}
}

const ProductConsumer = ProductContext.Consumer;
ProductProvider.propTypes = props;
export {ProductConsumer, ProductProvider};