import React, { useState } from 'react';
import CTA from './CTA';
import Image from 'next/image';

// Set up the PDF.js worker source
import * as pdfjs from 'pdfjs-dist'
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// Define the props for the component
interface ListItemProps {
  onButtonClick: (file: File | null, textContent: string) => void;
  customComponent?: React.ReactNode;
}

const CVUploader: React.FC<ListItemProps> = ({
  onButtonClick,
}) => {
  // State to store the selected file
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Ref for the file input element
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const [isCompleted, setIsCompleted] = useState(false);

  // State to store the extracted PDF text content
  const [pdfContent, setPdfContent] = useState('');
  const [numPages, setNumPages] = useState(null);
  const [pdfText, setPdfText] = useState('');

  
  // Function to handle the main button click
  const handleButtonClick = () => {
    // Trigger the file input's click event to open the file picker
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Function to handle file input change and extract text from the PDF
  const handleFileInputChange = async (e: any) => {
    const selectedFile = e.target.files?.[0] || null;
  
    if (!selectedFile) return;
  
    // Create a FileReader to read the selected file as an ArrayBuffer
    const reader = new FileReader();
    reader.onload = async () => {
      // Once the file is loaded, extract the ArrayBuffer
      const arrayBuffer = reader.result as ArrayBuffer;
  
      // Now, pass the arrayBuffer to pdfjs.getDocument
      const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
  
      const numPages = pdf.numPages;
      let pdfText = '';
  
      for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item: any) => item.str).join(' ');
        pdfText += pageText;
      }
  
      // Update the state with the extracted text content
      setPdfText(pdfText);
      // console.log("this is the pdf text: ", pdfText);

      // Call the callback function with the extracted text and the selected file
      if (onButtonClick) {
        onButtonClick(selectedFile, pdfText);
      }
    };
  
    // Read the selected file as an ArrayBuffer
    reader.readAsArrayBuffer(selectedFile);
    setIsCompleted(true);
  };

  
  return (
    <li className="relative pb-10 pl-8 border-l border-gray-900/20 dark:border-gray-700 dark:text-gray-400">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
        <Image src={"/checkmark.svg"} alt="icon" className="w-5 h-5" width={80} height={80} />
      </span>
      <h3 className="font-base leading-tight">Upload your CV</h3>
      <p className="text-sm">Please upload your CV so we can get to know you better.</p>

      <CTA
        className={`text-green-400 font-bold ${
          isCompleted ? 'bg-green-200' : 'bg-white'
        } mt-4`}
        onClick={handleButtonClick}
      >
        {isCompleted ? 'Completed' : 'Upload'}
      </CTA>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        ref={fileInputRef}
        className="absolute opacity-0 w-full h-full cursor-pointer"
        onChange={handleFileInputChange}
        style={{ display: 'none' }}
      />
    </li>
  );
};

export default CVUploader;
