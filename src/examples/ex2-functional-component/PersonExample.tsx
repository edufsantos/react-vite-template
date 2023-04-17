import React, { useEffect, useState } from "react";

export const PersonTesteComponent = () => {
  const [email, setEmail] = useState("ze@gmail.com");

  useEffect(() => {
    console.log("First mount");
  }, []);

  const changeEmail = () => {
    setEmail("edufilipinho@gmail.com");
  };

  console.log("mount");

  return (
    <div>
      <h1>Person {email}</h1>
      <button onClick={changeEmail}>Click-me</button>
    </div>
  );
};
