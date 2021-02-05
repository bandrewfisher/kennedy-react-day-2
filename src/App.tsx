import { useEffect, useState } from "react";
import "./App.css";

interface User {
  id: number;
  name: string;
  username: string;
}

/**
 * 2 most common uses of useEffect
 *
 * 1. When the component loads (only do something once)
 * 2. Respond to a reactive variable changing
 */

// UseEffect always gets run immediately

const numbers: number[] = [12, 4, 3, 7];
const myStrings: string[] = ["hello", "world"];
const booleans: Array<boolean> = [true, true, false];

function App() {
  const [count, setCount] = useState(0);
  const [remaining, setRemaining] = useState(100);
  const [clickedString, setClickedString] = useState("You clicked 0 times");
  const [users, setUsers] = useState<User[]>([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    setClickedString(`You clicked ${count} times. You have ${remaining} left.`);
  }, [count, remaining]);

  // When I get paid, THEN I will buy shampoo
  // When I get shampoo, then I will give it to you

  async function getUsers() {
    // fetch("https://jsonplaceholder.typicode.com/users") // Get the data from the endpoint
    //   .then((response) => response.json()) // When you get the data, then what do you do?
    //   .then((users) => console.log(users)); // When it gets converted to JSON, then console.log it
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); // This could take a long time!
    const fetchedUsers = await response.json();
    setUsers(fetchedUsers);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <p>{clickedString}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          setRemaining(remaining - 1);
        }}
      >
        Click me
      </button>
      <p>
        {/* Map still works with an empty array */}
        {users.map((user) => (
          <div>{user.name}</div>
        ))}
      </p>
      <p>
        {users.map((user) => (
          <div>{user.username}</div>
        ))}
      </p>
    </div>
  );
}

export default App;
