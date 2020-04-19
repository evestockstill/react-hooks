import React from 'react';
import { useForm } from './hooks/useForm';



// const App = () => {
//   const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });
//   return (
//     <>
//       <div>
//         <button
//           onClick={() =>
//             setCount((currentState) => ({

//               count: currentState.count + 1,
//               count2: currentState.count2 + 1
//             }))
//           }
//         >
//           increase
//         </button>
//       </div>
//       <div>count 1: {count}</div>
//       <div>count 2: {count2}</div>
//     </>
//   );
// };


const App = () => {
  const [values, handleChange] = useForm({ email: '', password: '' });
 
  return (
    <div>
      <input name='email' value={values.email} onChange={handleChange}/>
      <input type='password' value={values.password} name='password' onChange={handleChange}/>
    </div>
  );
};

export default App;
