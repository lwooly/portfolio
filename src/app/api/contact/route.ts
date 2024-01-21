import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

const { ADMIN_EMAIL, MONITOR_EMAIL } = process.env;

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: NextRequest) {
  if (!request) {
    console.log("No request");
    return new NextResponse(JSON.stringify({ message: "No request" }), {
      status: 400,
    });
  }
  const data = await request.json();

  const { name, email, message } = data;
  console.log(name, email, message);

  const msg = {
    to: MONITOR_EMAIL,
    from: ADMIN_EMAIL,
    subject: `New message from ${name}`,
    text: message,
    html: `<p>${message}</p>`,
  };

  console.log(msg);

  try {
    const email = await sgMail.send(msg);
    console.log(email);
    return new NextResponse(JSON.stringify({ message: "Email sent" }), {
      status: 200,
    });
  } catch (error) {
    console.log("Email failed to send")
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
    return new NextResponse(
      JSON.stringify({ message: "Email failed to send" }),
      { status: 500 }
    );
  }
}
