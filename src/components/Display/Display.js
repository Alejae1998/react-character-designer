import React from 'react';

export default function Character({ head, middle, bottom }) {
  return (
    <div>
      <div className="character">
        <div className="bg head" style={{ backgroundImage: `url(../${head}-head.png)` }}></div>
        <div className="bd middle" style={{ backgroundImage: `url(./${middle}-middle.png)` }}></div>
        <div className="bg bottom" style={{ backgroundImage: `url(./${bottom}-pants.png)` }}></div>
      </div>
    </div>
  );
}
