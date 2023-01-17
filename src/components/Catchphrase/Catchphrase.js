import React from 'react';

export default function Catchphrase({ headCount, middleCount, bottomCount, catchphrases }) {
  return (
    <div id="stats">
      <p id="report">
        You have changed the head {headCount} times, the body {middleCount} times, and the pants{' '}
        {bottomCount} times. Name your creation:
      </p>
      <ul className="catchphrases">
        {catchphrases.map((c) => (
          <li className="catchphrase" key={c}>
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}
