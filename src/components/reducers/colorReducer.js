export const initalState = {
  current: '#00FF00',
  undo: [],
  redo: [],
};

export function reducer(state, action) {
  switch(action.type) {
    case 'CURRENT':
      return { ...state,
        undo: [...state.undo, state.current],        
        current: action.payload,
      };
    case 'UNDO':
      return {
        ...state,
        redo: [...state.undo, state.redo],
        undo: [state.current, ...state.redo],
        current: state.undo[state.undo.length - 1]
      };
    case 'REDO':
      return {
        ...state,
        current: state.redo[0],
        redo: state.redo.slice(-1)
      };
    default:
      return state;
  }
}

// const useRecord = (init) => {
//   const [before, setBefore] = useState([]);
//   const [current, setCurrent] = useState(init);
//   const [after, setAfter] = useState([]);

//   const undo = () => {
//     setAfter(after => [current, ...after]);
//     setCurrent(before[before.length - 1]);
//     setBefore(before => before.slice(0, -1));
//   };

//   const redo = () => {
//     setBefore(before => [...before, current]);
//     setCurrent(after[0]);
//     setAfter(after => after.slice(1));
//   };

//   const record = val => {
//     setBefore(before => [...before, current]);
//     setCurrent(val);
//   };

//   return {
//     undo,
//     record,
//     redo,
//     current,
//   };
// };

