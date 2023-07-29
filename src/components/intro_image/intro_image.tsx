import Image from 'next/image';

export default function IntroImage() {
  return (
    <div>
      <Image 
        src='/fighter-faded2-sm.jpg'
        alt='Fighting class'
        fill
        quality={100}
        sizes="100vw"
        style={{
          objectFit:'cover',
        }}
      />
    </div>
  )
}