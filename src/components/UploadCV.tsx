import React from 'react';
import CTA from './CTA';

interface ListItemProps {
  title: string;
  description: string;
  iconPath?: string;
  buttonText: string;
  onButtonClick?: (file: File | null) => void; 
  customComponent ?: React.ReactNode;
  isProcessing: boolean;
  isCompleted: boolean;
}

const UploadCV: React.FC<ListItemProps> = ({ title, description, iconPath, buttonText, onButtonClick,  isProcessing, isCompleted }) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // This function is called when the main button is clicked
  const handleButtonClick = () => {
    // Trigger the file input's click event to open the file picker
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.click();
    }
    // If no file is selected, we notify the caller by calling onButtonClick with null
    if (onButtonClick) {
      onButtonClick(null);
    }
  };

  return (
    <li className="relative pb-10 pl-8 border-l border-gray-900/20 dark:border-gray-700 dark:text-gray-400">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
            {iconPath ? <img src={iconPath} alt="icon" className="w-5 h-5" /> : null}
        </span>
        <h3 className="font-base leading-tight">{title}</h3>
        <p className="text-sm">{description}</p>

        {/* {customComponent} */}
        
        {!isProcessing &&
          <CTA className="text-green-400 font-bold bg-white mt-4" onClick={handleButtonClick}>
            Upload
          </CTA>}

        {isProcessing &&
          <CTA className="text-green-400 font-bold bg-purple-200-200 mt-4" onClick={handleButtonClick}>
            Processing
          </CTA>}

        {isCompleted &&
          <CTA className="text-green-400 font-bold bg-green-200 mt-4" onClick={handleButtonClick}>
            Completed
          </CTA>}

     

        <input 
            type="file" 
            accept=".pdf,.doc,.docx" 
            ref={fileInputRef}
            className="absolute opacity-0 w-full h-full cursor-pointer"
            onChange={e => {
              const fileName = e.target.files?.[0] || null;
              if (fileName && onButtonClick) {
                  onButtonClick(fileName);
              }
            }}
            style={{ display: 'none' }}
        />

    </li>
  );
};

export default UploadCV;
