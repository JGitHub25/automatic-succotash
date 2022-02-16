import React, { useEffect, useRef, useState } from "react";
import "regenerator-runtime/runtime";

export const Component = ({ name, number }) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect ran.");
    const createLoop = () => {
      setCount(count + 1);
    };
    createLoop();
    document.title = `Hi ${name}`;
    return () => {
      console.log("Component umounted.");
    };
  }, []);

  return (
    <>
      <h2>Count: {count}</h2>
      {loading ? <h3>Loading...</h3> : <h1>Component: {name}</h1>}
      <button
        onClick={() => {
          setLoading(!loading);
        }}
      >
        Loading or not.
      </button>
    </>
  );
};

export const Home = () => {
  const [name, setName] = useState("");
  const [active, setActive] = useState(true);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h1>Your super React Playground is ready!</h1>
      <input type="text" value={name} onChange={handleChange} />
      <br />
      <button
        onClick={() => {
          setActive(!active);
        }}
      >
        Make me disappear!
      </button>
      {active && <Component name={name} />}
    </>
  );
};
