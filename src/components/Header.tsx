import React from 'react'
import Nav from './Nav'
import useCart from '../hooks/useCart'

type propsType = {
  viewCart:boolean,
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>,

}


    const header = ({viewCart, setViewCart}: propsType) => {
      const { totalItems, totalPrice } = useCart()  

    const content = (
      <header className='header'>
        <div className='header_title-bar'>
          <h1>Eletronic shop</h1>
          <div className="header__title-box">
            <p>Total Items: {totalItems}</p>
            <p>Total Price: {totalPrice}</p>
          </div>
        </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
      </header>
    )  

    return content
}

export default header