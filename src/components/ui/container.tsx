import { ReactNode } from 'react';

type Variant = 'standard' | 'wide' | 'prose';

const VARIANT_MAX: Record<Variant, string> = {
  standard: 'max-w-standard',
  wide: 'max-w-wide',
  prose: 'max-w-prose',
};

export default function Container({
  children,
  variant = 'standard',
  className = '',
  as: As = 'div',
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'main' | 'nav';
}) {
  return (
    <As className={`${VARIANT_MAX[variant]} mx-auto edge ${className}`}>
      {children}
    </As>
  );
}
