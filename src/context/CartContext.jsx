import React, { createContext, useEffect, useState } from 'react'


export const CartContext = createContext()
const CartProvider = ({children}) => {
  // const [quantity, setQuantity] = useState(1);
  const [cart,setCart] = useState([])
  const [itemAmount,setItemAmount] = useState(0)
  const [total,setTotal] = useState(0)

  useEffect(()=>{
    const totalPrice = cart.reduce((accumulator,currentItem)=>{
      return accumulator + currentItem.newPrice * currentItem.amount
    },0)
    setTotal(totalPrice)
  })


  useEffect(()=>{
    if(cart){
      const amount = cart.reduce((accumulator,currentItem)=> {
      return accumulator + currentItem.amount
    },0);
    setItemAmount(amount)
    }
  },[cart])

  const addToCart = (product,id) =>{
    const newItem = {...product, amount: 1}

    const cartItem = cart.find(item=>{
      return item.id === id
    })
    if(cartItem){
      const newCart = [...cart].map(item=>{
        if(item.id===id){
          return {...item, amount: cartItem.amount+1}
        }
        else{
          return item
        }
      })
      setCart(newCart)
    }
    else{
      setCart([...cart,newItem])
    }
  }

  const removeFromCart = (id) =>{
    const newCart = cart.filter(item=>{
      return item.id !== id
    })
    setCart(newCart)
  }

  const clearCart = () =>{
    setCart([])
  }
 
  const increaseAmount = (id) =>{
    const cartItems = cart.find(item=> item.id === id)
    addToCart(cartItems,id) 
  }

  const decreaseAmount = (id) =>{
    const cartItem = cart.find(item =>{
      return item.id === id
    })
    if(cartItem){
      const newCart = cart.map(item => {
        if(item.id === id){
          return {...item, amount: cartItem.amount-1}
        }else{
          return item
        }
      })
      setCart(newCart);
    }
    if(cartItem.amount < 2){
      removeFromCart(id)
    }
  }
  const decreaseAmountNotZero = (id) =>{
    const cartItem = cart.find(item =>{
      return item.id === id
    })
    if(cartItem){
      const newCart = cart.map(item => {
        if(item.id === id){
          return {...item, amount: cartItem.amount-1}
        }else{
          return item
        }
      })
      setCart(newCart);
    }
    if(cartItem.amount == 1){
      setCart(cart)
    }
  }
  return (
    <CartContext.Provider value={{cart,addToCart,removeFromCart,clearCart,increaseAmount,decreaseAmount,decreaseAmountNotZero,itemAmount,total}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider