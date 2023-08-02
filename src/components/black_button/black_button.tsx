import React from 'react'
import Link from 'next/link'

interface BlackButtonProps {
  text: string;
  href: string;
}
const BlackButton: React.FC<BlackButtonProps> = ({ text, href }) => {

  return (
    <Link href={href} className="text-white text-center text-lg">
      <div className={`w-52 h-12 px-3 bg-black rounded-full flex items-center justify-center mt-5`}>
        {text}
      </div>
    </Link>
  )

}
export default BlackButton;