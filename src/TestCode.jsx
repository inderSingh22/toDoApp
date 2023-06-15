import React from "react";
import {useState} from 'react';

export default function TestCode() {
  const [names, setNames] = useState(['Alice', 'Bob']);

  const handleClick = () => {
    // 👇️ push to the end of the state array
    setNames(current => [...current, 'Carl']);

    // 👇️ spread an array into the state array
    // setNames(current => [...current, ...['Carl', 'Delilah']]);

    // 👇️ push to the beginning of the state array
    // setNames(current => ['Zoey', ...current]);
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>
          Push to state array
        </button>
      </div>

      {names.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element}</h2>
          </div>
        );
      })}
    </div>
  );
}
