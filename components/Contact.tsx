import { useState } from "react";
import Input from "./Input";

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
        className="mx-auto my-8 flex flex-col items-center rounded-xl border-beige border-2"
      >
        <div className="flex justify-around w-full">
          <div className="flex flex-col my-8 w-1/2 justify-around">
            <Input
              name="name"
              labelName="Name"
              placeholder="Hey there!"
              value={name}
              setValue={setName}
            />
            <Input
              name="email"
              labelName="Email"
              placeholder="How can I reach you?"
              value={email}
              setValue={setEmail}
            />
            <Input
              name="subject"
              labelName="Subject"
              placeholder="What's up?"
              value={subject}
              setValue={setSubject}
            />
          </div>
          <div className="flex flex-col items-center my-8 w-1/2 justify-around">
            <div className="w-3/4">
              <label htmlFor="message" className="text-2xl py-2 float-left">
                Message
              </label>
            </div>
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
              className="text-light-black h-full tracking-wide rounded-xl w-3/4 p-2 my-4 bg-beige--"
            />
          </div>
        </div>
        <button
          type="submit"
          className="resume resume-text p-2 mb-8 text-xl tracking-wider w-1/6"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
