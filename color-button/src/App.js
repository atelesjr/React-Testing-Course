import { useState } from 'react'

export function replaceCameWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [ buttonColor, setButtonColor ] = useState('MediumVioletRed')
  const [ checkBox, setCheckbox ] = useState(false)
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      
      <button 
        style={{ backgroundColor: checkBox ? 'gray' : buttonColor }}
        onClick={ () => setButtonColor(newButtonColor) }
        disabled={checkBox}
      >
        Change to { replaceCameWithSpaces(newButtonColor) }
      </button>

      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={ checkBox }
        //aria... accessibility
        aria-checked={ checkBox }
        onChange={ (e) => setCheckbox(e.target.checked)} 
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
  
    </div>
  );
}

export default App;
