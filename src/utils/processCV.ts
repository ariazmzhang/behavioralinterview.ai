import React from "react";

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
  }
  export default UploadCV;
  