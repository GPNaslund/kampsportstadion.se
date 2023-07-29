import React from 'react'

interface BlackButtonProps {
  text: string;
}
const BlackButton: React.FC<BlackButtonProps> = ({ text }) => {

  return (
    <div className={`w-3/6 h-12 px-3 bg-black rounded-full flex items-center justify-center mt-5`}>
      <p className="text-white text-center text-lg">{text}</p>
    </div>
  )

} 
export default BlackButton;