import React, { useReducer } from 'react';
import reducer, { initalState } from '../reducers/colorReducer';


export default function App() {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <>
      <button onClick={() => dispatch({ type: 'UNDO_VALUE' })}>undo</button>
      <button onClick={() => dispatch({ type: 'REDO_VALUE' })}>redo</button>
      <label htmlFor="color">Input Color</label>
      <input
        id="color"
        type="color"
        value={state.current}
        onChange={({ target }) => dispatch({
          type: 'RECORD_VALUE',
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
