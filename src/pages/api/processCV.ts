import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({ key: process.env.OPENAI_API_KEY });

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
    //   const file: File = req.body;
      console.log("request from the client: ", req.body);
    //   // TODO: Convert the file to text or use its content accordingly
    //   const fileContent = /* extract content from file */;

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{
            "role": "user",
            "content": "I am a software engineer with 5 years of experience in the field. GCreate a list of 8 questions for an interview with me"
        }],
        temperature: 0.5,
        max_tokens: 1024,
      });
      console.log("response from the openAI API: ", response.choices[0].message);

      return res.status(200).json(response.choices[0].message);

    } catch (error) {
        console.error("Error in /api/processCV:", error); 
        const errorMessage = console.error("OpenAI API Error:", error.response ? error.response.data : error.message);

        // Send a more detailed error message based on the OpenAI API response
        // const errorMessage = error.response && error.response.data && error.response.data.error
        //                  ? error.response.data.error
        //                  : "Failed to process CV.";
        return res.status(500).json({ error: errorMessage });
    }
  } else {
    return res.status(405).end(); // Method Not Allowed
  }
};
