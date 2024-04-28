import React from 'react'


export default function Meal({meal}) {
    const PATH = 'http://localhost:3000/';
  return (
        <div className='meal-item' key={meal.id}>
            <article>
                <img src={PATH + meal.image} alt={meal.title} />
                <h3>{meal.title}</h3>
                <p className='meal-item-description'>{meal.description}</p>
                <p className='meal-item-price'>${meal.price}</p>
                <button className='button'>Add to Cart</button>
            </article>
        </div>
  )
}

