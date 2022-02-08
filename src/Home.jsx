import React, { useEffect, useRef, useState } from "react";
import "regenerator-runtime/runtime";

export const Home = () => {
  const [text, setText] = useState("duper");
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(["a", "b", "c", "d", "e"]);
  const [user, setUser] = useState({
    name: "Pedro",
    age: 38,
    trabajo: "albañil",
  });

  const abc = async () => {
    const res = await fetch("https://randomuser.me/api/");
    return res;
  };

  const def = async (res) => {
    const data = await res.json();
    return data;
  };

  const doubleIncreaseHandler = async () => {
    // setCount(count + 1);
    // setCount((actualCount) => actualCount + 1);
    // setCount(18);
    // setCount(79);
    // setCount(99);
    // setCount(count + 3);
    // setCount((actualCount) => actualCount + 1);
    // setTimeout(() => {
    //   setCount(count + 1);
    // }, 3000);
    const res = await abc();
    const data = await def(res);
    const user = { ...data.results[0] };
    console.log(user);
  };

  const checkAttendance = () => {
    setCount(count * 2);
    setCount(count * 5);
  };
  // ["f", "g", "h", "i", "j"];

  // const handleArrayState = () => {
  //   const itemsClone = [...items];
  //   itemsClone[1] = "2";
  //   setItems(itemsClone);

  //   const itemsClone2 = [...itemsClone];
  //   itemsClone2[0] = "1";
  //   setItems(itemsClone2);
  // };

  const handleArrayState = () => {
    // setItems((state) => {
    //   const stateClone = [...state];
    //   stateClone[2] = "3";
    //   return stateClone;
    // });
    // setItems((state) => {
    //   const stateClone = [...state];
    //   stateClone[3] = "4";
    //   return stateClone;
    // });
  };

  const handleObjState = () => {
    const { age, ...user2 } = user;
    setUser(user2);
  };

  useEffect(() => {
    // setCount(count + 1);
    // setCount((actualCount) => actualCount + 1);
    // setCount(18);
    // setCount(79);
    setCount(1);
    // setCount(count + 3);
    // setCount((actualCount) => actualCount + 1);
    // setTimeout(() => {
    //   setCount(count + 1);
    // }, 3000);
  }, []);

  return (
    <>
      <h1>Your super {text} React Playground is ready!</h1>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setText("califragilistic");
        }}
      >
        Change state with setState()
      </button>
      <button
        onClick={() => {
          setText(() => "wonka");
        }}
      >
        Change w/ callback.
      </button>
      <button onClick={doubleIncreaseHandler}>Fetch data.</button>
      <button onClick={checkAttendance}>Change count 2.</button>
      <button onClick={handleArrayState}>Change array 3.</button>
      <button onClick={handleObjState}>Change obj 4.</button>
      {items.map((letter, index) => {
        return <p key={index}>{letter}</p>;
      })}
      <div>
        <p>{user.name}</p>
        <p>{user.age}</p>
      </div>
    </>
  );
};

export const Component = () => {
  const [user, setUser] = useState({
    name: "Beatriz",
    age: 70,
    skills: "Painting",
  });

  const handleUserChange = () => {
    const { age, ...clonedState } = {
      ...user,
      origin: "Bolívar",
      skills: "Poetry & Painting",
    };
    setUser(clonedState);
  };

  return (
    <>
      {Object.entries(user).map(([key, value]) => {
        return (
          <p>
            {key}: {value}
          </p>
        );
      })}
      <button onClick={handleUserChange}>Delete property.</button>
    </>
  );
};

const ChildComponent = ({ name, index, deleteMe, makeUsAFamily }) => {
  //isChecked es un state particular a cada instancia de ChildComponent: que uno de ellos lo cambie no afecta el de los demás.
  //names queda siendo una especie de state común a todos: el evento que lo cambie se da en una de las instancias pero se refleja en todas.
  const [isChecked, setIsChecked] = useState(false);
  //Este handler produce cambios sólo en la instancia en que se da.
  const checkAttendance = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <h1>{name}</h1>
      <h3>{isChecked ? "Confirmó" : "No ha confirmado."}</h3>
      <button onClick={checkAttendance}>Confirmó asistencia</button>
      <button
        onClick={() => {
          deleteMe(index);
        }}
      >
        Borrar este.
      </button>
      <button onClick={makeUsAFamily}>Haznos familia.</button>
    </>
  );
};

export function Component2() {
  const [a, setA] = useState("a");
  const [b, setB] = useState("b");
  console.log("a", a);
  console.log("b", b);

  async function handleClickWithPromise() {
    //Cada uno de estos setState() causa un re-render.
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    setA(data);
    const res2 = await fetch("https://randomuser.me/api/");
    const data2 = await res2.json();
    setB(data2);
  }

  return (
    <>
      <button onClick={handleClickWithPromise}>With async</button>
    </>
  );
}
