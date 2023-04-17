import React, { useEffect, useState } from "react";

interface IAppTestProps {
  name: string;
}

interface IStateProps {
  count: number;
}

export const FunctionalComponentPerson: React.FC<IAppTestProps> = (props) => {
  const [localStateData, setStateData] = useState<IStateProps>({ count: 0 });

  useEffect(() => {
    console.log("Print this prop ", props.name);
  }, []);

  function updateAmount() {
    setStateData((currentState) => ({
      count: currentState.count + 1,
    }));
  }

  return (
    <>
      <h1>{props.name}</h1>
      <button onClick={updateAmount}>
        Update amount: {localStateData.count}
      </button>
    </>
  );
};
