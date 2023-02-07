import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    fetch("http://localhost:3000/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        text: text,
      }),
    });
    setName("");
    setEmail("");
    setSubject("");
    setText("");
  }

  return (
    <div id="Contact" className="my-16">
      <div className="text-5xl mb-4 text-beige font-medium">Contact</div>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="w-2/3 mx-auto my-8 flex flex-col items-center rounded-lg border-white border-2"
      >
        <div className="w-full flex flex-col items-center my-4">
          <label
            htmlFor="name"
            className="w-1/4 my-2 h-full text-2xl text-center"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Hey there!"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="text-light-black w-2/3 h-full p-3 tracking-wide rounded-xl"
          />
        </div>
        <div className="w-full flex flex-col items-center my-4">
          <label
            htmlFor="email"
            className="w-1/4 my-2 h-full text-2xl text-center"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="How can I reach you?"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="text-light-black w-2/3 h-full p-3 tracking-wide rounded-xl"
          />
        </div>
        <div className="w-full flex flex-col items-center my-4">
          <label
            htmlFor="subject"
            className="w-1/4 my-2 h-full text-2xl text-center"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="What's up?"
            required
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="text-light-black w-2/3 h-full p-3 tracking-wide rounded-xl"
          />
        </div>
        <div className="w-full flex flex-col items-center my-4">
          <label
            htmlFor="message"
            className="w-1/4 my-2 h-full text-2xl text-center"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Alright! Let's talk it over at coffee..."
            rows={7}
            required
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="text-light-black w-2/3 h-full p-3 tracking-wide rounded-xl"
          />
        </div>
        <button
          type="submit"
          className="resume resume-text p-2 mt-4 mb-8 text-xl tracking-wider"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
