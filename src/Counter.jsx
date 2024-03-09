import { useState, useEffect } from "react";

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  function incCountx() {
    setCountx(countx + 1);
  }

  function incCounty() {
    setCounty(county + 1);
  }

  useEffect(function () {
    console.log("This is side-effect");
  }, []);

  return (
    <div>
      <h3>Countx = {countx}</h3>
      <button onClick={incCountx}>+1</button>
      <h3>County = {county}</h3>
      <button onClick={incCounty}>+1</button>
    </div>
  );
}
