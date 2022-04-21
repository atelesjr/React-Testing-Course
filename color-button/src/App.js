import { useState } from 'react'

function App() {
  const [ buttonColor, setButtonColor ] = useState('red')
  const [ checkBox, setCheckbox ] = useState(false)
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      
      <button 
        style={{ backgroundColor: buttonColor }}
        onClick={ () => setButtonColor(newButtonColor) }
        disabled={checkBox}
      >
        Change to { newButtonColor }
      </button>
      <input
        type="checkbox"
        id="enable-button-checkbox"
        defaultChecked={ checkBox }
        //aria... accessibility
        aria-checked={ checkBox }
        onChange={ (e) => setCheckbox(e.target.checked)}
      />
    </div>
  );
}

export default App;
