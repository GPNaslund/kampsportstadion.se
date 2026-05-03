import { ReactNode } from 'react';

type Size = 'xl' | 'lg' | 'md';
type Level = 1 | 2 | 3;

const SIZE_CLASS: Record<Size, string> = {
  xl: 'text-[2.5rem] w-625:text-[3.25rem] w-900:text-[4.75rem] leading-[1.0] tracking-[-0.04em] font-extrabold',
  lg: 'text-[2rem] w-625:text-[2.5rem] w-900:text-[3.5rem] leading-[1.05] tracking-[-0.035em] font-extrabold',
  md: 'text-[1.5rem] w-900:text-[2rem] leading-[1.1] tracking-[-0.025em] font-bold',
};

export default function Heading({
  children,
  size = 'lg',
  level = 2,
  className = '',
}: {
  children: ReactNode;
  size?: Size;
  level?: Level;
  className?: string;
}) {
  const Tag = (`h${level}` as 'h1' | 'h2' | 'h3');
  return (
    <Tag className={`font-display text-ink ${SIZE_CLASS[size]} ${className}`}>
      {children}
    </Tag>
  );
}
