import Image from 'next/image'
import InstagramLink from '../util/instagram_link';

interface StaffCardProps {
  name: string;
  description: string;
  instagramHandle?: string;
  email?: string;
  phoneNumber?: string;
}

const StaffCard: React.FC<StaffCardProps> = ({ name, description, instagramHandle, email, phoneNumber }) => {
  return (
    <div className="w-full flex flex-col mt-10 items-center text-center px-10 w-900:px-30">
      <h3 className="w-900:text-2xl font-bold">{name}</h3>
      <p className="w-900:text-2xl">{description}</p>
      <div>
        <div className='flex gap-5 mt-5'>
          {instagramHandle &&
            <div className="w-12 h-12 w-900:w-16 w-900:h-16 relative">
              <a href={InstagramLink(instagramHandle)}>
                <img
                  src="/instagram_round_icon.svg"
                  alt="Instagram logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                  }}
                />
              </a>
            </div>
          }
          {email &&
            <div className="w-12 h-12 w-900:w-16 w-900:h-16 relative">
              <a href={`mailto:${email}`}>
                <img
                  src="/email_logo.svg"
                  alt="Email logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                  }}
                />
              </a>
            </div>
          }
          {phoneNumber &&
            <div className="w-12 h-12 w-900:w-16 w-900:h-16 relative">
              <a href={`tel:${phoneNumber}`}>
                <img
                  src="/phone_logo.svg"
                  alt="Phone logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                  }}
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