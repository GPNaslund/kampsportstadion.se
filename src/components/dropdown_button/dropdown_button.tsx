'use client';

import { WorkoutClass } from "@/data/classes";
import { useState } from "react";

interface DropdownButtonProps {
  item: WorkoutClass;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ item }) => {
  const { header, description, levels, rawHtml } = item;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-8 flex flex-col items-center text-center w-full px-4">
      <div 
        className={`w-full max-w-sm px-4 py-2 flex justify-between items-center cursor-pointer bg-white border border-black shadow-lg ${isOpen ? 'rounded-t-lg' : 'rounded-lg'}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-semibold text-lg">{header}</p>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </div>
      {isOpen && (
        <div className="w-full max-w-sm p-4 text-left bg-white shadow-lg border border-black border-t-0 rounded-b-lg">
          {description && <p className="mb-4 text-gray-700">{description}</p>}
          
          {levels && levels.length > 0 && (
            <div className="space-y-4">
              {levels.map((level, index) => (
                <div key={index} className="border-t pt-3">
                  <h4 className="font-bold text-md text-gray-800">{level.header}</h4>
                  <p className="text-sm text-gray-600">{level.description}</p>
                </div>
              ))}
            </div>
          )}

          {rawHtml && (
            <div className="mt-4 border-t pt-3 text-sm" dangerouslySetInnerHTML={{ __html: rawHtml }} />
          )}
        </div>
      )}
    </div>
  );
}

export default DropdownButton;