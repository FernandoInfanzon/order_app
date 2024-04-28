import {useState, useEffect} from 'react';
import Meals from  './components/Meals';
import logo from './assets/logo.jpg';
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function App() {
  const [isFetching, setIsFetching] = useState(false);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    setIsFetching(true);
    async function fetchMeals() {
      const response = await fetch('http://localhost:3000/meals');
      const resData = await response.json();
      setMeals(resData);
      setIsFetching(false);
  }
  fetchMeals();
},[])

  return (
    <>
      <main id='main-header'>
        <div id='title'>
          <img src={logo} alt="" />
          <h1>Meal Planner</h1>
        </div>
        <ShoppingCartIcon  className="w-8 h-8" />
      </main>
      <Meals meals={meals}/>
    </>
  );
}

export default App;
