import { useEffect, useState } from "react";

// If you need to update an object, useReducer
// Redux

function CountSecrets() {
  const [secret, setSecret] = useState({ value: "", countSecrets: 0 });
  const [letters, setLetters] = useState(['a', 'b', 'c'])

  // useEffect(() => {
  //   setLetters(l => [...l, 'd'])
  // })

  useEffect(() => {
    if (secret.value === 'secret') {
      setSecret(s => ({...s, countSecrets: s.countSecrets + 1}));
    }
  }, [secret.value]);

  const onChange = ({ target }) => {
    setSecret(s => ({ ...s, value: target.value }));
  };

  return (
    <div>
      <input type="text" value={secret.value} onChange={onChange} />
      <div>Number of secrets: {secret.countSecrets}</div>
    </div>
  );
}

export default CountSecrets;