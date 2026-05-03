import { ReactNode } from 'react';

type Pad = 'tight' | 'default' | 'marquee';

const PAD: Record<Pad, string> = {
  tight: 'py-12 w-900:py-16',
  default: 'py-20 w-900:py-28',
  marquee: 'py-24 w-900:py-40',
};

export default function Section({
  children,
  pad = 'default',
  className = '',
  id,
  as: As = 'section',
}: {
  children: ReactNode;
  pad?: Pad;
  className?: string;
  id?: string;
  as?: 'section' | 'div' | 'article' | 'header' | 'footer';
}) {
  return (
    <As id={id} className={`${PAD[pad]} ${className}`}>
      {children}
    </As>
  );
}
