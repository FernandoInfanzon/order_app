import React from 'react'
import Meal from './Meal'

export default function Meals({meals}) {
  return (
    <div id='meals'>
        {meals.map((meal) => (
            <Meal key={meal.id} meal={meal} />
        ))}
    </div>
  )
}
