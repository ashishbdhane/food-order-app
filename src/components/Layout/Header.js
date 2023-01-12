import React from 'react'
import MealImage from '../../assets/food.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton showCartHandler={props.showCartHandler}/>
      </header>
      <div className={classes['main-image']}>
        <img src={MealImage} alt="Table full of food"/>
      </div>
    </>
  )
};

export default Header