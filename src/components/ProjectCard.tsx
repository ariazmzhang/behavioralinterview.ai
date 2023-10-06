import React from 'react';

type ProjectCardProps = {
    title: string;
    techStack: string;
    descriptions: string[];
  };
  
const ProjectCard: React.FC<ProjectCardProps> = ({ title, techStack, descriptions }) => {
    return (
        <div className="p-5 mb-6 bg-white text-black shadow-lg rounded-md bg-opacity-50">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-sm text-gray-500 mb-3">{techStack}</p>
            <ul className="list-disc pl-5">
                {descriptions.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectCard;
