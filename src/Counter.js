import react, {useState} from 'react';

function Counter() {
  const [state, setState] = useState(0);
  return (
    <div className="Counter">
     <h1>This is a counter text</h1>
     <span>{state}</span>
     <button id="increment-btn" onClick={() => setState(state + 1)}>Increment</button>
     
    </div>
  );
}

export default Counter;
