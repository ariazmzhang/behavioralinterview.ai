import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// 1. process the CV and extract the key words like education and work experience
// 2. ask the user for more information to form the story box (need a chatbox below the respond box)
// 3. get the job description and the company they're interviewing with
// 4. generate the answer for the most common behavioural questions (maybe for this specific company and also based on the JD)
// 5. generate more based on the user's information(?) or the user can ask a question occurs to them and get the answer
// 6. async the answer to Notion or Google Doc
// 7. ask for feedback from the user about the interview

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
    //   const file: File = req.body;
      console.log("request from the client: ", req.body);
    //   // TODO: Convert the file to text or use its content accordingly
    //   const fileContent = /* extract content from file */;


    //Here to set all the ChatGPT prompts to let the results more accurate-------------------
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{
            "role": "user",
            "content": "I am a software engineer with 5 years of experience in the field. GCreate a list of 8 questions for an interview with me"
        }],
        temperature: 0.5,
        max_tokens: 1024,
      });




      //--------------------------------------------------------------------------------
      console.log("response from the openAI API: ", response.choices[0].message);

      return res.status(200).json(response.choices[0].message);

    } catch (error: any) {
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
