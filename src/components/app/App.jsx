import React, { useReducer } from 'react';
import reducer, { initalState } from '../reducers/colorReducer';


export default function App() {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <>
      <button onClick={() => dispatch({ type: 'UNDO' })}>undo</button>
      <button onClick={() => dispatch({ type: 'REDO' })}>redo</button>
      <label htmlFor="color">Input Color</label>
      <input
        id="color"
        type="color"
        value={state.current}
        onChange={({ target }) => dispatch({
          type: 'CURRENT',
          payload: target.value
        })} 
      />
      <div
        data-testid="display"
        style={{ 
          backgroundColor: state.current,
          width: '10rem',
          height: '10rem'
        }}></div>
    </>
  );
}
