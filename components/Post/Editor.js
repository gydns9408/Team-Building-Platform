import React, { useState } from "react";
import Router from "next/router";

const submitData = async (e) => {
  // e.preventDefault();
  // try {
  //   const body = { title, content, authorEmail };
  //   await fetch(`http://localhost:3000/api/post`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(body),
  //   });
  //   await Router.push("/drafts");
  // } catch (error) {
  //   console.error(error);
  // }
  e.preventDefault();
  try {
    const body = {
      contest_name: "제12회 대한민국 호국미술대전",
      content: "test",
      prize: 1000,
      start_period: "1970-01-01T00:00:00.000Z",
      end_period: "1970-01-01T00:00:00.000Z",
      spcialization: "디자인/순수미술/공예",
      corporate_type: "기타",
    };
    await fetch(`http://localhost:3000/api/post/contest`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.error(error);
  }
};

const Editor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");

  return (
    <div className="page">
      <form onSubmit={submitData}>
        <h1>Create Draft</h1>
        <input
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          value={title}
        />
        <input
          onChange={(e) => setAuthorEmail(e.target.value)}
          placeholder="Author (email address)"
          type="text"
          value={authorEmail}
        />
        <textarea
          cols={50}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          rows={8}
          value={content}
        />
        <input type="submit" value="Create" />
        <a className="back" href="#" onClick={() => Router.push("/")}>
          or Cancel
        </a>
      </form>
    </div>
  );
};

export default Editor;
