import {useState, useEffect} from 'react';
import Meals from  './components/Meals';
import Header from './components/Header';

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
      <Header/>
      <Meals meals={meals}/>
    </>
  );
}

export default App;
