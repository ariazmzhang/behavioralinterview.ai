import React from 'react';
import Card from './Card';
// Define the type for the API response prop.
// For this example, I'm assuming the API response is an object with a "message" field.
// Adjust this type according to the actual structure of your API response.
type ApiResponse = {
  message: string;
};

type ResponseCardProps = {
  openAIResponse: ApiResponse | null;  // The API response can be either the ApiResponse type or null.
  isProcessing: boolean;
};

const ResponseCard: React.FC<ResponseCardProps> = ({ openAIResponse, isProcessing }) => {
  return (
    <Card className="flex flex-grow flex-col lg:w-1/2 p-10 ml-10 z-50 ">
      {/* Header section of the card */}
      <div className="text-start mb-2">
        <h1 className="text-xl font-bold tracking-tight text-black sm:text-xl">
          Beh
          <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            a
          </span>
          vioral Interv
          <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            i
          </span>
          ew
        </h1>
      </div>

      {/* Instruction text */}
      <div className="text-slate-800 text-sm">
        Follow the instruction and talk to Copilot to assemble your story toolbox.
        {/* Display processing message if isProcessing is true */}
        {isProcessing && <div>AI is processing your data...</div>}

        {/* API Response section - This will be displayed only if there's an API response */}
        {openAIResponse && (
            <div className="mt-4 text-slate-800 text-sm">
                {/* Display the message from the API response */}
                {openAIResponse.message}
            </div>)
        }
      </div>
      
      
    </Card>
  );
};

export default ResponseCard;
