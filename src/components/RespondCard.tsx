import React from 'react';
import Card from './Card';
import TextLogo from './TextLogo';
import ProjectCard from './ProjectCard';

type ApiResponse = string

type ResponseCardProps = {
  openAIResponse: ApiResponse | null;  // The API response can be either the ApiResponse type or null.
};

const ResponseCard: React.FC<ResponseCardProps & React.ButtonHTMLAttributes<HTMLButtonElement> & React.PropsWithChildren > = ({ openAIResponse, children, className, ...props }) => {
  const structureAnswer = (answer: string) => {
    
  }
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
            <div className="mt-4 text-slate-800 text-sm z-50">
                {/* Display the message from the API response */}
                {openAIResponse}
                
            </div>)
        }
      </div>
      {/* <div className="flex flex-col lg:flex-row flex-grow bg-transparent p-4 justify-center mt-0">
            <div className="max-w-5xl w-full p-5 grid grid-cols-1 md:grid-cols-3 gap-6 z-50">
            <ProjectCard 
                    title="Behavioral-Interview.ai"
                    keyword="Next.js, Typescript, Tailwindcss, Firebase"
                    descriptions={[
                        "tegration with Firebase: The Firebase backend provides secure user authentication, data storage, and real-time synchronization of story updates across devices. This ensures a seamless and reliable experience for users, allowing them to access their stories from anywhere."
                    ]}
                />
                <ProjectCard 
                    title="Search Engine 1.0 & 2.0"
                    keyword="Python, Java, NumPy, urllib, JavaFX"
                    descriptions={[
                        "Developed Search Engine 1.0 in Python, efficiently crawling over 1,000 interlinked websites",                    
                    ]}
                />

                <ProjectCard 
                    title="Search Engine 1.0 & 2.0"
                    keyword="Python, Java, NumPy, urllib, JavaFX"
                    descriptions={[
                        "Developed Search Engine 1.0 in Python, efficiently crawling over 1,000 interlinked websites",                    
                    ]}
                />
            </div>
      </div> */}
    </Card>
  );
};

export default ResponseCard;
