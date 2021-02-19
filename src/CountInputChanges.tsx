import { useEffect, useState, useCallback } from 'react';

// function setCount(callback) {
//   const prevCount = -1;
//   callback(prevCount);
// }


// setState can take either the value to update it to, 
// OR a callback function that returns the value to update it to


// Without a dependency array, useEffect gets called
// every time something reactive changes.

// If you declare a function in a component,
// it gets redefined on every render


function CountInputChanges() {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(-1);

  const myFunction = useCallback((value: number) => {
    console.log(value)
  }, [])


  useEffect(() => setCount(count +1))

  useEffect(() => {
    setCount(5)
  }, [myFunction]);

  const onChange = (value: any) => setValue(value);

  return (
    <div>
      <input type="text" value={value} onChange={({ target: { value }}) => onChange(value)} />
      <div>Number of changes: {count}</div>
    </div>
  )
}

export default CountInputChanges;