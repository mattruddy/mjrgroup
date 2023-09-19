import { sendMail } from "@/services/sendEmail";

export default async function handler(req, res) {
  const { body, method } = req;

  const { message, name, email, phoneNumber } = JSON.parse(body);

  if (method === "POST") {
    const everything = `name: ${name}\nemail: ${email}\nphone number: ${phoneNumber}\nmessage: ${message}`;
    await sendMail("New Client Request", "mjruddy94@gmail.com", everything);
    return res.status(200).json({});
  }

  return res.status(404).send("Not found");
}
