import { sendMail } from "@/services/sendEmail";

export default async function handler(req: any, res: any) {
  const { body, method } = req;
  const { name, email, phoneNumber, contact, service, taxType } = body;

  if (method === "POST") {
    const everything = `name: ${name}\nemail: ${email}\nphone number: ${phoneNumber}\ncontact: ${contact}\nservice: ${service}`;
    await sendMail("New Client Request", "mjruddy94@gmail.com", everything);
    if (taxType) {
      everything.concat(`\ntax type: ${taxType}`);
    }
    return res.status(200).json({});
  }

  return res.status(404).send("Not found");
}
