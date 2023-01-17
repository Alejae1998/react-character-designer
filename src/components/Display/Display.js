import React from 'react';

export default function Character({ head, middle, bottom }) {
  return (
    <div>
      <div className="character">
        <div
          className="bg head"
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/characters/${head}-head.png')`,
          }}
        ></div>
        <div
          className="bg middle"
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/characters/${middle}-middle.png')`,
          }}
        ></div>
        <div
          className="bg bottom"
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/characters/${bottom}-pants.png`,
          }}
        ></div>
      </div>
    </div>
  );
}
