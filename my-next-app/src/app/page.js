"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";

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

      <nav style={{marginTop: "2rem"}}>
        <ul style={{listStyle: "none", display: "flex", gap: "1rem"}}>
          <li>
            <Link href="/">ホーム</Link> {/* linkではなくLink */}
          </li>
          <li>
            <Link href="/about">アバウト</Link>
          </li>
          <li>
            <Link href="/contact">コンタクト</Link>
          </li>
          <li>
            <Link href="/services">サービス</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

