"use client";

import { useEffect, useState } from "react";

export default function APIExample() {
  const [message, setMessage] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        setTimestamp(data.timestamp);
        setStatus(data.status);
      })
      .catch((err) => console.error("APIエラー:", err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>API Example</h1>
      <p>APIからのメッセージ: {message}</p>
      <p>現在の日本時間: {timestamp}</p>
      <p>ステータス: {status}</p>
    </div>
  );
}
