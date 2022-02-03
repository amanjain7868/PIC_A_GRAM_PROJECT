import React from 'react';
import {  SpinnerRoundFilled } from 'spinners-react';

function Spinner({ message }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
<SpinnerRoundFilled size={250} thickness={100} speed={94} color="rgba(172, 57, 59, 1)" />

      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
}

export default Spinner;