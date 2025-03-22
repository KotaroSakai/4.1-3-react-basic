"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";

function Greeting(props) {
  return (
    <h1
      style={{
        borderLeft: "10px solid skyblue",
        paddingLeft: "10px",
      }}
    >
      {props.name}
    </h1>
  );
}

function ClickExample({ color = "skyblue", callback }) {
  const handleClick = () => {
    callback();
  };

  return (
    <button onClick={handleClick} style={{ backgroundColor: color }}>
      Click Me
    </button>
  );
}

export default function Home() {
  const [counter, setCounter] = useState(0);
  // let counter = 0;

  return (
    <div className={styles.container}>
      <Greeting name="Next.jsの2025年における〜〜" />{" "}
      {/* ここで指定した値がGreetingに渡る */}
      <div>
        <p>カウンター: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>カウントアップ</button>
        {/* <button onClick={() => counter = counter + 1}>カウントアップ</button> */}
      </div>
      <ClickExample
        color="skyblue"
        callback={() => {
          document.body.style.backgroundColor = "gray";
        }}
      />
      <nav style={{ marginTop: "2rem" }}>
        <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
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
          <li>
            <Link href="/data">データ</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
