export const initalState = {
  before: [],
  current: '#00FF00',
  after: [],
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'RECORD_VALUE':
      return { 
        ...state,
        before: [...state.before, state.current],        
        current: action.payload,
      };
    case 'UNDO_VALUE':
      return {
        ...state,
        after: [state.current, ...state.after],
        current: state.before[state.before.length - 1],
        before: state.before.slice(0, -1),
      };
    case 'REDO_VALUE':
      return {
        ...state,
        before: [...state.before, state.current],
        current: state.after[0],
        after: state.after.slice(1)
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

