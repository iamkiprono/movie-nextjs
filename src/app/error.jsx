"use client";
import React, { useEffect } from "react";
const error = ({ error, reset }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>{error.message}</h1>
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
};

export default error;
