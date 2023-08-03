import Image from 'next/image'
import InstagramLink from '../util/instagram_link';

interface StaffCardProps {
  name: string;
  description: string;
  instagramHandle?: string;
  email?: string;
  phoneNumber?: string;
}

const StaffCard: React.FC<StaffCardProps> = ({name, description, instagramHandle, email, phoneNumber }) => {
  return (
    <div className="w-full flex flex-col mt-10 items-center text-center px-10 w-900:px-30">
      <h3 className="w-900:text-3xl font-bold">{name}</h3>
      <p className="w-900:text-2xl">{description}</p>
      <div>
      <div className='flex gap-5 mt-5'>
        {instagramHandle && 
        <div className="w-12 h-12 w-900:w-16 w-900:h-16 relative">
          <a href={InstagramLink(instagramHandle)}>
            <Image 
              src="/instagram_round_icon.svg"
              alt="Instagram logo"
              fill={true}
              quality={100}
            />
          </a>
        </div>
        }
        {email && 
        <div className="w-12 h-12 w-900:w-16 w-900:h-16 relative">
          <a href={`mailto:${email}`}>
            <Image 
              src="/email_logo.svg"
              alt="Email logo"
              fill={true}
              quality={100}
            />
          </a>
        </div>
        }
        {phoneNumber && 
        <div className="w-12 h-12 w-900:w-16 w-900:h-16 relative">
          <a href={`tel:${phoneNumber}`}>
            <Image 
              src="/phone_logo.svg"
              alt="Phone logo"
              fill={true}
              quality={100}
            />
          </a>
        </div>
        }
      </div>
      </div>
    </div>
  )
}

export default StaffCard;