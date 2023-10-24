import React, { useState } from 'react';
import CVUploader from './CVUploader';
import ChatGPTPrompt from './ChatGPTPrompt';
import ChatGPTResponseHandler from './ChatGPTResponseHandler';

function CVHandleParent({ updateAnswer }: { updateAnswer: (answer: string) => void; }) {
  
    
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [pdfText, setPdfText] = useState('');
    const [chatGPTPrompt, setChatGPTPrompt] = useState("");
    const [chatGPTAnswer, setChatGPTAnswer] = useState("");
    // Callback function to handle the file and text from UploadCV
    const handleCVUpload = (file: File | null, textContent: string) => {
      setSelectedFile(file);
      setPdfText(textContent);
      
    };

    const generatePrompt = ( chatGPTPrompt: string ) => {
        setChatGPTPrompt(chatGPTPrompt);
        console.log("this is the chatGPTPrompt: ", chatGPTPrompt);
    };

    // console.log("this is the pdf text: ", pdfText);

    // Define a function to set the textContent
    const generateAnswer = ( chatGPTAnswer: string ) => {
        setChatGPTAnswer(chatGPTAnswer);
        // Call the callback to update chatGPTAnswer in the parent component
        updateAnswer(chatGPTAnswer);
    };

    return (
        <div>
            <CVUploader onButtonClick={handleCVUpload}/>
            <ChatGPTPrompt onGeneratedPrompt={generatePrompt} textContent={pdfText} />
            <ChatGPTResponseHandler chatGPTPrompt={chatGPTPrompt} onGeneratedAnswer={generateAnswer} /> {/* Include ChatGPTResponseHandler */}
        </div>
    );
}

export default CVHandleParent;
