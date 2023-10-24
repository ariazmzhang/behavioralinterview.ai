import React from 'react';
import Card from './Card';
import TextLogo from './TextLogo';
// Define the type for the API response prop.
// For this example, I'm assuming the API response is an object with a "message" field.
// Adjust this type according to the actual structure of your API response.
type ApiResponse = {
  message: string;
};

type ResponseCardProps = {
  openAIResponse: ApiResponse | null;  // The API response can be either the ApiResponse type or null.
};

const ResponseCard: React.FC<ResponseCardProps & React.ButtonHTMLAttributes<HTMLButtonElement> & React.PropsWithChildren > = ({ openAIResponse, children, className, ...props }) => {
  return (
    <Card className={`h-full p-10 ml-10 z-50 ${className || ""}`} >
      {/* Header section of the card */}
      <div className="text-start mb-2">
        <TextLogo className='text-xl text-black'/>
      </div>

      {/* Instruction text */}
      <div className="text-slate-800 text-sm">
        Follow the instruction and talk to Copilot to assemble your story toolbox.
        {/* Display processing message if isProcessing is true */}
        {/* {isProcessing && <div>AI is processing your data...</div>} */}

        
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
