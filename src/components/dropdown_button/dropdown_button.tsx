'use client'

import { useState } from 'react';
interface DropdownButtonProps {
  header: string;
  dropdownText: string;
  classLevels?: string;
  coaches?: string;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ header, dropdownText, classLevels = '', coaches = '', rawHtml = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-8 flex flex-col items-center text-center">
      <div className="border-2 rounded-lg w-64 px-4 py-1 flex justify-between items-center" onClick={() => setIsOpen(!isOpen)}>
        <p className="">{header}</p>
        <span className={`${isOpen ? 'transform rotate-180' : ''} transition-all duration-250`}>▼</span>
      </div>
      {isOpen && (
        <div className="justify-self-end px-10">
          <div className="mt-4">{dropdownText}</div>
          {classLevels && (
            <p className="mt-4">Vi har klasser för <span className="font-bold">{classLevels}</span></p>
          )}
          {coaches && (
            <p className="mt-4">Tränare: <span className="font-bold">{coaches}</span></p>
          )}
          {rawHtml && (
            <div className="mt-4" dangerouslySetInnerHTML={{__html: rawHtml }}/>
          )}
        </div>
      )}
    </div>
  )
}

export default DropdownButton;
