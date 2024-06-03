import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { firstName, secondName, email, number, jobTitle, creatorStatus } =
      req.body;

    //Configure Nodemailer

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "onecloudmediauk1@gmail.com",
        pass: "hipgagizxngbjkuf",
      },
    });

    const mailOptions = {
      from: "onecloudmediauk1@gmail.com",
      to: "onecloudmediauk1@gmail.com",
      subject: "Form Submission",
      text: `First Name: ${firstName}\nSecond Name: ${secondName}\nEmail Address: ${email}\nNumber: ${number}\nJob: ${jobTitle}\nCreator Status: ${creatorStatus}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email Sent Succesfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error sendinf mail" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
