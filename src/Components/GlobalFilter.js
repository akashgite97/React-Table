import React, { useState } from 'react';

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span className='offset-md-5 '>
      Search:
      <input value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
    </span>
  );
};
