import React from 'react';

const Error = ({ error }) => (
  <div className="w-full flext justify-center items-center"><h1 className="font-bold text-2xl text-white mt-2">{error || 'Something went wrong. Please try again!'}</h1></div>
);

export default Error;
