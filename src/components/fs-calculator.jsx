import { useReducer } from 'react';
import style from './fs-calculator.module.css';

const initialState = {
  startingLevel: 0,
  targetLevel: 1,
  books: 5,
};


function calculateBooksNeeded(startingLevel, targetLevel) {
  if(startingLevel >= targetLevel) {
    return 0;
  }

  let books = 0;
  for(let i = startingLevel; i < targetLevel; i++) {
    if(i < 10) {
      books += 5;
    } else if(i < 20) {
      books += 25;
    } else if(i < 30) {
      books += 60;
    }
  }

  return books;
}

function calculateNewTargetLevel(startingLevel, books) {
  let newTargetLevel = startingLevel;

  for(let i = startingLevel + 1; i < 30; i++) {
    const booksNeeded = calculateBooksNeeded(startingLevel, i);
    if(booksNeeded <= books) {
      newTargetLevel = i;
    } else {
      break;
    }
  }

  return newTargetLevel;
}

// Define the reducer function
function calculatorReducer(state, action) {
  switch (action.type) {
      case 'STARTING_LEVEL':
        return {startingLevel: action.value, targetLevel: state.targetLevel, books: calculateBooksNeeded(action.value, state.targetLevel)};
      case 'TARGET_LEVEL':
        return {startingLevel: state.startingLevel, targetLevel: action.value, books: calculateBooksNeeded(state.startingLevel, action.value)};
      case 'BOOKS':
        return {startingLevel: state.startingLevel, targetLevel: calculateNewTargetLevel(state.startingLevel, action.value), books: action.value};
    default:
      return state;
  }
}

export default function ForgottenPowerCalculator() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const handleInputChange = (type) => (e) => {
    const value = parseFloat(e.target.value);
    dispatch({
      type: type,
      value: isNaN(value) ? 0 : value,
    });
  };

  return (
    <div className={style.grid}>
      <label htmlFor="startingLevel">Starting level:</label>
      <input
        type="number"
        id="startingLevel"
        min={0}
        max={30}
        className={style.input}
        value={state.startingLevel}
        onChange={handleInputChange('STARTING_LEVEL')}
      />
      <label htmlFor="targetLevel">Target level:</label>
      <input
        type="number"
        id="targetLevel"
        min={0}
        max={30}
        className={style.input}
        value={state.targetLevel}
        onChange={handleInputChange('TARGET_LEVEL')}
      />
      <label htmlFor="books">Books have/needed:</label>
      <input
        type="number"
        id="books"
        min={0}
        className={style.input}
        value={state.books}
        onChange={handleInputChange('BOOKS')}
      />
    </div>
  );
}