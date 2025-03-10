"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function ClickExample() {
  const handleClick = () => {
    alert('ボタンがクリックされました！');
  };

  return <button onClick={handleClick}>Click Me</button>;
}

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div className={styles.container}>
      <Greeting name="React" /> {/* ここで指定した値がGreetingに渡る */}
      <div>
        <p>カウンター: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>カウントアップ</button>
      </div>
      <ClickExample/>
    </div>
  );
}

