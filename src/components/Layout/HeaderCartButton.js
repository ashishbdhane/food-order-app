import React from 'react'
import {ReactComponent as CartIcon} from './../Cart/CartIcon.svg'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.showCartHandler}>
      <span>
        <CartIcon className={classes.icon}/>
      </span>
        <span> My Cart</span>
        <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderCartButton
