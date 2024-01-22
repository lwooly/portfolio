import { EmailValues } from "@/src/app/components/forms/ContactMeForm";

export const sendEmail = async (emailVals: EmailValues) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json; charset="UTF8"',
      },
      body: JSON.stringify(emailVals),
    });

    if (!response.ok) {
      console.log(response);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log("Email sent");
    return true;
  } catch (error) {
    console.error("Error fetching data", error);
    return false;
  }
};
