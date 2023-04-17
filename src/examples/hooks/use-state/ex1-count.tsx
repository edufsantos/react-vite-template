import React, { useMemo, useState } from "react";

const CountComponent: React.FC = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  const calculate = useMemo(() => {
    return first + second;
  }, [first]);

  return (
    <div>
      <h1>Result: {calculate}</h1>
      <input type="number" onChange={(e) => setFirst(Number(e.target.value))} />
      <input
        type="number"
        onChange={(e) => setSecond(Number(e.target.value))}
      />
    </div>
  );
};

export default CountComponent;
