import React from "react";

const Child = () => {
  throw new Error();
};

const ErrorBoundaryTest = () => {
  return (
    <div>
      <Child />
    </div>
  );
};

export default ErrorBoundaryTest;
