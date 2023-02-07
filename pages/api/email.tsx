import { SMTPClient } from "emailjs";

export default async function handler(req: any, res: any) {
  const { name, email, subject, text } = req.body;

  const client = new SMTPClient({
    user: process.env.mail,
    password: process.env.password,
    host: "smtp.gmail.com",
    ssl: true,
  });

  try {
    client.sendAsync({
      text: `A mail from: ${name}.\nEmail: ${email}\n\nMessage:\n${text}`,
      from: email,
      to: process.env.mail!,
      subject: subject,
    });
  } catch (e) {
    res.status(400).end(JSON.stringify({ message: "Error" }));
    return;
  }
  res.status(200).end(JSON.stringify({ message: "Send Mail" }));
}
