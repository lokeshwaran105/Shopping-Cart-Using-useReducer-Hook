import { useState } from 'react'
import './App.css'
import apple from './apple.jpg'
import lemon from './lemon.jpg'
import carrot from './ca.jpg'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  // State variables for each item's count and price
  const [appleCount, setAppleCount] = useState(0);
  const [lemonCount, setLemonCount] = useState(0);
  const [carrotCount, setCarrotCount] = useState(0);

  // Prices for each item
  const applePrice = 12;
  const lemonPrice = 15;
  const carrotPrice = 10;

  // Handlers for count updates
  const decrease = (item) => {
    switch(item) {
      case 'apple':
        if (appleCount > 0) setAppleCount(appleCount - 1);
        break;
      case 'lemon':
        if (lemonCount > 0) setLemonCount(lemonCount - 1);
        break;
      case 'carrot':
        if (carrotCount > 0) setCarrotCount(carrotCount - 1);
        break;
      default:
        break;
    }
  };

  const increase = (item) => {
    switch(item) {
      case 'apple':
        setAppleCount(appleCount + 1);
        break;
      case 'lemon':
        setLemonCount(lemonCount + 1);
        break;
      case 'carrot':
        setCarrotCount(carrotCount + 1);
        break;
      default:
        break;
    }
  };

  const reset = (item) => {
    switch(item) {
      case 'apple':
        setAppleCount(0);
        break;
      case 'lemon':
        setLemonCount(0);
        break;
      case 'carrot':
        setCarrotCount(0);
        break;
      default:
        break;
    }
  };

  // Amount for each item
  const appleAmount = appleCount * applePrice;
  const lemonAmount = lemonCount * lemonPrice;
  const carrotAmount = carrotCount * carrotPrice;

  // Total count and total amount
  const totalCount = appleCount + lemonCount + carrotCount;
  const totalAmount = appleAmount + lemonAmount + carrotAmount;

  return (
    <>
      <div className="my-5 text-center pt-5 row">
        <div className="col-4 card">
          <img src={apple} className='w-75'></img><br />
          <div className="text-center">
            <button className='btn btn-primary me-2' onClick={() => increase('apple')}>+</button>
            <button className='btn btn-primary me-2' onClick={() => decrease('apple')}>-</button>
            <button className='btn btn-primary me-2' onClick={() => reset('apple')}>Reset</button>
          </div>
          <br></br>
          <p>Count: {appleCount}</p>
          <p>Amount: ${appleAmount.toFixed(2)}</p>
        </div>
        <div className="col-4 card">
          <img src={lemon}  className='w-75 '></img><br />
          <div className="text-center">
            <button className='btn btn-primary me-2' onClick={() => increase('lemon')}>+</button>
            <button className='btn btn-primary me-2' onClick={() => decrease('lemon')}>-</button>
            <button className='btn btn-primary me-2' onClick={() => reset('lemon')}>Reset</button>
          </div><br></br>
          <p>Count: {lemonCount}</p>
          <p>Amount: ${lemonAmount.toFixed(2)}</p>
        </div>
        <div className="col-4 card ">
          <img src={carrot} className='w-75'></img><br />
          <div className="text-center">
            <button className='btn btn-primary me-2' onClick={() => increase('carrot')}>+</button>
            <button className='btn btn-primary me-2' onClick={() => decrease('carrot')}>-</button>
            <button className='btn btn-primary me-2' onClick={() => reset('carrot')}>Reset</button>
          </div>
          <p>Count: {carrotCount}</p>
          <p>Amount: ${carrotAmount.toFixed(2)}</p>
        </div>
      </div>
      <div className="text-center pt-3">
        <h3>Total Count: {totalCount}</h3>
        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      </div>
    </>
  )
}

export default App