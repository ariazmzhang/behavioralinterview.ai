import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


const processCV = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      console.log("request from the client: ", req.body);


    //Here to set all the ChatGPT prompts to let the results more accurate-------------------
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{
            "role": "user",
            "content": req.body.prompt
        }],
        temperature: 0.5,
        max_tokens: 1024,
      });


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
export default processCV;