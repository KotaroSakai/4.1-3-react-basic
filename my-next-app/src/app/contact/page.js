"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => { 
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // バリデーション: 全てのフィールドが入力されているか確認
    if (!formData.name || !formData.email || !formData.message) {
      setError("全てのフィールドを入力してください。");
      return;
    }

    if (formData.name.length < 3) {
      setError("お名前は3文字以上で入力してください");
      return;
    }

    if (formData.message.length < 5) {
      setError("メッセージは5文字以上入力してください");
      return;
    }

    const emailreg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailreg.test(formData.email)) {
      setError("正しいメールアドレスを入力してください")
    }
    // バリデーション成功
    setError("");
    // ここでAPIへの送信処理などを実装可能（今回はシミュレーション）
    console.log("フォーム送信:", formData);
    setSubmitted(true);
  };

  // 送信後のメッセージ表示
  if (submitted) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>送信完了！</h2>
        <p>ご入力いただいた内容は送信されました。</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>お問い合わせフォーム</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="name"><span className={styles.label}>必須</span>お名前</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email"><span className={styles.label}>必須</span>メールアドレス</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="message"><span className={styles.label}>必須</span>メッセージ</label>
          <br />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>
          送信
        </button>
      </form>
    </div>
  );
  
  
}
