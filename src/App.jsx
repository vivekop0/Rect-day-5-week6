/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const text = useRef(null);
  const inp = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      console.log("hello");
    }, 1000);
  }, []);

  const handleChange = () => {
    text.current.innerHTML = inp.current.value;
  };

  return (
    <>
      <input type='text' ref={inp} onChange={handleChange} />
      <Heading textRef={text} item={"Write in Input to change me"} />
    </>
  );
}

function Heading({ textRef, item }) {
  return (
    <div>
      <h1 ref={textRef}>{item}</h1>
    </div>
  );
}

export default App;
